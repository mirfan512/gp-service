"use client";

import { useEffect, useState, useCallback } from "react";
import { useToast } from "@/src/components/ui/Toast";
import {
  useGetTherapistSessionsQuery,
  useCreateTherapistSessionMutation,
  useGetTherapistSessionDetailsQuery,
} from "@/src/store/services/therapistApi";
import { useTherapistStream } from "../_hooks/useTherapistStream";
import { Sidebar } from "./Sidebar";
import { ChatContainer } from "./ChatContainer";
import { PricingModal } from "./PricingModal";
import { CrisisModal } from "./CrisisModal";

export function TherapistDashboard() {
  const { showToast } = useToast();

  // Queries & Mutations
  const { data: sessionsData, isLoading: isSessionsLoading } = useGetTherapistSessionsQuery();
  const [createSessionMutation, { isLoading: isCreatingSession }] = useCreateTherapistSessionMutation();

  // Active session
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const { data: activeSessionDetails, isLoading: isActiveSessionLoading } = useGetTherapistSessionDetailsQuery(
    activeSessionId || "",
    { skip: !activeSessionId }
  );

  // SSE Stream logic from custom hook
  const {
    isStreaming,
    streamedReply,
    sendMessage,
    showPricingModal,
    setShowPricingModal,
    showCrisisModal,
    setShowCrisisModal,
    crisisDetails,
    setCrisisDetails,
  } = useTherapistStream(activeSessionId);

  // Set initial active session on load
  useEffect(() => {
    if (sessionsData?.data && sessionsData.data.length > 0 && !activeSessionId) {
      setActiveSessionId(sessionsData.data[0]._id);
    }
  }, [sessionsData, activeSessionId]);

  // Start new CBT session
  const handleCreateSession = useCallback(async () => {
    try {
      const result = await createSessionMutation().unwrap();
      if (result.data?._id) {
        setActiveSessionId(result.data._id);
        showToast("New CBT session started.", "success");
      }
    } catch (err: any) {
      if (err?.status === 403 || err?.data?.message?.includes("limit") || err?.data?.message?.includes("tier")) {
        setShowPricingModal(true);
      } else {
        showToast(err?.data?.message || "Failed to start session. Please try again.", "error");
      }
    }
  }, [createSessionMutation, showToast, setShowPricingModal]);

  // Select a session from sidebar
  const handleSelectSession = useCallback(
    (id: string) => {
      if (!isStreaming) {
        setActiveSessionId(id);
      }
    },
    [isStreaming]
  );

  const handleClosePricingModal = useCallback(() => {
    setShowPricingModal(false);
  }, [setShowPricingModal]);

  const handleCloseCrisisModal = useCallback(() => {
    setShowCrisisModal(false);
    setCrisisDetails(null);
  }, [setShowCrisisModal, setCrisisDetails]);

  const sessionsList = sessionsData?.data || [];
  const messagesList = activeSessionDetails?.data?.messages || [];

  return (
    <div className="flex h-[calc(100vh-80px)] bg-slate-50 border-t border-slate-200">
      <Sidebar
        sessionsList={sessionsList}
        activeSessionId={activeSessionId}
        isSessionsLoading={isSessionsLoading}
        isCreatingSession={isCreatingSession}
        isStreaming={isStreaming}
        onSelectSession={handleSelectSession}
        onCreateSession={handleCreateSession}
      />

      <ChatContainer
        activeSessionId={activeSessionId}
        messages={messagesList}
        isMessagesLoading={isActiveSessionLoading}
        isStreaming={isStreaming}
        streamedReply={streamedReply}
        onSendMessage={sendMessage}
        isCreatingSession={isCreatingSession}
        onCreateSession={handleCreateSession}
      />

      <PricingModal
        isOpen={showPricingModal}
        onClose={handleClosePricingModal}
      />

      <CrisisModal
        isOpen={showCrisisModal}
        details={crisisDetails}
        onClose={handleCloseCrisisModal}
      />

      {/* Embedded keyframe animations */}
      <style>{`
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-scaleUp {
          animation: scaleUp 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}
