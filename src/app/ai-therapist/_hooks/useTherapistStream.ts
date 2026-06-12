"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Cookies from "js-cookie";
import { useAppDispatch } from "@/src/store/hooks";
import { therapistApi, Message } from "@/src/store/services/therapistApi";
import { useToast } from "@/src/components/ui/Toast";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api-gp.648137462.xyz/api/v1";

interface CrisisDetails {
  reply: string;
  helplineUrl: string;
  phone: string;
}

export function useTherapistStream(activeSessionId: string | null) {
  const dispatch = useAppDispatch();
  const { showToast } = useToast();

  const [isStreaming, setIsStreaming] = useState(false);
  const [streamedReply, setStreamedReply] = useState("");

  const [showPricingModal, setShowPricingModal] = useState(false);
  const [showCrisisModal, setShowCrisisModal] = useState(false);
  const [crisisDetails, setCrisisDetails] = useState<CrisisDetails | null>(null);

  const abortControllerRef = useRef<AbortController | null>(null);

  // Abort active stream
  const abortStream = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    setIsStreaming(false);
    setStreamedReply("");
  }, []);

  // Abort on session change or component unmount
  useEffect(() => {
    abortStream();
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [activeSessionId, abortStream]);

  const sendMessage = useCallback(
    async (textInput: string) => {
      if (!textInput.trim() || !activeSessionId || isStreaming) return;

      // Abort any lingering streams
      abortStream();

      const controller = new AbortController();
      abortControllerRef.current = controller;

      setIsStreaming(true);
      setStreamedReply("");

      const userMsg: Message = { role: "user", content: textInput };

      // Optimistically append user message to local cache
      const updateDetailsUndo = dispatch(
        therapistApi.util.updateQueryData("getTherapistSessionDetails", activeSessionId, (draft) => {
          if (draft?.data) {
            if (!draft.data.messages) draft.data.messages = [];
            draft.data.messages.push(userMsg);
          }
        })
      );

      const updateListUndo = dispatch(
        therapistApi.util.updateQueryData("getTherapistSessions", undefined, (draft) => {
          if (draft?.data) {
            const session = draft.data.find((s) => s._id === activeSessionId);
            if (session) {
              if (!session.messages) session.messages = [];
              session.messages.push(userMsg);
              session.updatedAt = new Date().toISOString();
            }
          }
        })
      );

      const token = Cookies.get("token");
      let currentBuffer = "";

      try {
        const response = await fetch(`${API_URL}/ai-therapist/sessions/${activeSessionId}/messages`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ message: textInput }),
          signal: controller.signal,
        });

        const contentType = response.headers.get("content-type") || "";
        if (contentType.includes("application/json") || !response.ok) {
          const jsonResult = await response.json();

          if (jsonResult?.data?.safetyTriggered) {
            const safetyReply = jsonResult.data.reply;
            setCrisisDetails({
              reply: safetyReply,
              helplineUrl: jsonResult.data.helplineUrl || "https://www.samaritans.org",
              phone: jsonResult.data.phone || "116 123",
            });
            setShowCrisisModal(true);

            // Revert optimistic user message update
            updateDetailsUndo.undo();
            updateListUndo.undo();

            // Append user message AND safety message together to cache (so they render sequentially)
            dispatch(
              therapistApi.util.updateQueryData("getTherapistSessionDetails", activeSessionId, (draft) => {
                if (draft?.data) {
                  draft.data.messages.push(userMsg);
                  draft.data.messages.push({ role: "assistant", content: safetyReply });
                }
              })
            );
            dispatch(
              therapistApi.util.updateQueryData("getTherapistSessions", undefined, (draft) => {
                if (draft?.data) {
                  const session = draft.data.find((s) => s._id === activeSessionId);
                  if (session) {
                    session.messages.push(userMsg);
                    session.messages.push({ role: "assistant", content: safetyReply });
                    session.updatedAt = new Date().toISOString();
                  }
                }
              })
            );

            setIsStreaming(false);
            return;
          }

          if (response.status === 403 || jsonResult?.message?.includes("limit") || jsonResult?.message?.includes("tier")) {
            setShowPricingModal(true);
          } else {
            showToast(jsonResult?.message || "Failed to send message.", "error");
          }

          // Revert optimistic user message update since it failed
          updateDetailsUndo.undo();
          updateListUndo.undo();
          setIsStreaming(false);
          return;
        }

        const reader = response.body?.getReader();
        const decoder = new TextDecoder("utf-8");

        while (reader) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split("\n");

          for (const line of lines) {
            const trimmedLine = line.trim();
            if (!trimmedLine) continue;

            if (trimmedLine === "data: [DONE]" || trimmedLine.includes("[DONE]")) {
              break;
            }

            if (trimmedLine.startsWith("data: ")) {
              const jsonStr = trimmedLine.replace(/^data:\s*/, "");
              try {
                const parsed = JSON.parse(jsonStr);
                if (parsed.text) {
                  currentBuffer += parsed.text;
                  setStreamedReply(currentBuffer);
                }
              } catch (err) {
                // Ignore partial chunk parse error
              }
            }
          }
        }

        // Commit final assistant response to RTK cache
        if (currentBuffer) {
          const assistantMsg: Message = { role: "assistant", content: currentBuffer };
          dispatch(
            therapistApi.util.updateQueryData("getTherapistSessionDetails", activeSessionId, (draft) => {
              if (draft?.data) {
                draft.data.messages.push(assistantMsg);
              }
            })
          );
          dispatch(
            therapistApi.util.updateQueryData("getTherapistSessions", undefined, (draft) => {
              if (draft?.data) {
                const session = draft.data.find((s) => s._id === activeSessionId);
                if (session) {
                  session.messages.push(assistantMsg);
                  session.updatedAt = new Date().toISOString();
                }
              }
            })
          );
        }
      } catch (err: any) {
        if (err.name === "AbortError") {
          console.log("Therapist stream fetch request aborted.");
        } else {
          showToast("Connection to Kate lost. Please check your network.", "error");
          updateDetailsUndo.undo();
          updateListUndo.undo();
        }
      } finally {
        setStreamedReply("");
        setIsStreaming(false);
        if (abortControllerRef.current === controller) {
          abortControllerRef.current = null;
        }
      }
    },
    [activeSessionId, isStreaming, dispatch, showToast, abortStream]
  );

  return {
    isStreaming,
    streamedReply,
    sendMessage,
    showPricingModal,
    setShowPricingModal,
    showCrisisModal,
    setShowCrisisModal,
    crisisDetails,
    setCrisisDetails,
    abortStream,
  };
}
