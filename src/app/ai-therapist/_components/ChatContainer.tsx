"use client";

import { useEffect, useRef, useState, memo } from "react";
import { Message } from "@/src/store/services/therapistApi";

interface ChatContainerProps {
  activeSessionId: string | null;
  messages: Message[];
  isMessagesLoading: boolean;
  isStreaming: boolean;
  streamedReply: string;
  onSendMessage: (text: string) => Promise<void>;
  isCreatingSession: boolean;
  onCreateSession: () => void;
}

export const ChatContainer = memo(function ChatContainer({
  activeSessionId,
  messages,
  isMessagesLoading,
  isStreaming,
  streamedReply,
  onSendMessage,
  isCreatingSession,
  onCreateSession,
}: ChatContainerProps) {
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const chatMessages = (messages || []).filter((m) => m.role !== "system");

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Auto scroll to bottom when messages or the stream buffer change
  useEffect(() => {
    scrollToBottom();
  }, [chatMessages.length, streamedReply, isStreaming]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isStreaming) return;
    onSendMessage(inputValue.trim());
    setInputValue("");
  };

  return (
    <main className="flex-1 flex flex-col justify-between bg-slate-50/50 min-w-0">
      {/* Active chat header */}
      <div className="bg-white border-b border-slate-200 p-4 flex items-center justify-between shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#e8ede4] flex items-center justify-center font-bold text-[#3a4535] flex-shrink-0">
            K
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-800">Kate</h3>
            <p className="text-xs text-slate-400 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-500 rounded-full inline-block animate-pulse" />
              CBT Therapist
            </p>
          </div>
        </div>

        <div className="text-xs text-slate-400 font-semibold bg-white border border-slate-200 px-3 py-1.5 rounded-full truncate max-w-[180px] sm:max-w-none">
          Session ID: {activeSessionId ? `${activeSessionId.slice(0, 8)}...` : "None"}
        </div>
      </div>

      {/* Chat Messages Log */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {!activeSessionId ? (
          <div className="h-full flex flex-col justify-center items-center text-center max-w-md mx-auto space-y-6">
            <div className="w-20 h-20 bg-[#e8ede4] rounded-full flex items-center justify-center text-[#A3B094]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09l2.846.813-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
              </svg>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-800">Start your session with Kate</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Kate uses Cognitive Behavioral Therapy (CBT) techniques to help you reframe stressful thoughts, ground yourself, and build lasting resilience.
              </p>
            </div>
            <button
              onClick={onCreateSession}
              disabled={isCreatingSession}
              className="bg-[#A3B094] hover:bg-[#8E9C85] text-white font-bold px-8 py-3 rounded-xl transition-all shadow-md active:scale-98 cursor-pointer disabled:opacity-50"
            >
              {isCreatingSession ? "Starting..." : "Begin CBT Consultation"}
            </button>
          </div>
        ) : isMessagesLoading ? (
          <div className="h-full flex justify-center items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#A3B094]"></div>
          </div>
        ) : (
          <div className="space-y-4 max-w-3xl mx-auto">
            {chatMessages.map((msg, index) => (
              <div
                key={msg._id || index}
                className={`flex gap-3 items-start ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                    msg.role === "assistant" ? "bg-[#e8ede4] text-[#3a4535]" : "bg-[#A3B094] text-white"
                  }`}
                >
                  {msg.role === "assistant" ? "K" : "U"}
                </div>
                <div
                  className={`px-4 py-3 rounded-2xl text-sm leading-relaxed max-w-[80%] shadow-sm ${
                    msg.role === "user"
                      ? "bg-[#A3B094] text-white rounded-tr-none"
                      : "bg-white border border-slate-200 text-slate-800 rounded-tl-none whitespace-pre-wrap"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Streaming Assistant Response Buffer */}
            {isStreaming && (
              <div className="flex gap-3 items-start flex-row">
                <div className="w-8 h-8 rounded-full bg-[#e8ede4] text-[#3a4535] flex items-center justify-center text-xs font-bold flex-shrink-0">
                  K
                </div>
                <div className="px-4 py-3 rounded-2xl text-sm leading-relaxed max-w-[80%] shadow-sm bg-white border border-slate-200 text-slate-800 rounded-tl-none whitespace-pre-wrap min-h-[40px] flex items-center">
                  {streamedReply ? (
                    streamedReply
                  ) : (
                    <div className="flex gap-1.5 items-center py-1.5">
                      <span className="w-2.5 h-2.5 bg-[#A3B094] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2.5 h-2.5 bg-[#A3B094] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2.5 h-2.5 bg-[#A3B094] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  )}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Message Input Bar */}
      {activeSessionId && (
        <form
          onSubmit={handleSubmit}
          className="bg-white border-t border-slate-200 p-4 shadow-[0_-1px_3px_rgba(0,0,0,0.02)]"
        >
          <div className="max-w-3xl mx-auto flex gap-3 items-center">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isStreaming}
              placeholder={isStreaming ? "Kate is typing..." : "Type your message here..."}
              className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#A3B094] focus:bg-white transition-all disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isStreaming}
              className="w-12 h-12 rounded-xl bg-[#A3B094] hover:bg-[#8E9C85] text-white flex items-center justify-center transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg viewBox="0 0 14 14" width={16} height={16} aria-hidden="true">
                <path d="M1 1l12 6-12 6V8.5l8-1.5-8-1.5V1z" fill="#fff" />
              </svg>
            </button>
          </div>
        </form>
      )}
    </main>
  );
});
