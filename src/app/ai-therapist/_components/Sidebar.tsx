"use client";

import { memo } from "react";
import { TherapistSession } from "@/src/store/services/therapistApi";

interface SidebarProps {
  sessionsList: TherapistSession[];
  activeSessionId: string | null;
  isSessionsLoading: boolean;
  isCreatingSession: boolean;
  isStreaming: boolean;
  onSelectSession: (id: string) => void;
  onCreateSession: () => void;
}

export const Sidebar = memo(function Sidebar({
  sessionsList,
  activeSessionId,
  isSessionsLoading,
  isCreatingSession,
  isStreaming,
  onSelectSession,
  onCreateSession,
}: SidebarProps) {
  return (
    <aside className="w-[300px] border-r border-slate-200 bg-white flex flex-col justify-between flex-shrink-0">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="flex justify-between items-center pb-2 border-b border-slate-100">
          <h2 className="text-lg font-bold text-slate-800">Sessions</h2>
          <button
            onClick={onCreateSession}
            disabled={isCreatingSession}
            className="bg-[#A3B094] hover:bg-[#8E9C85] text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 cursor-pointer disabled:opacity-50"
          >
            <span>+</span> New
          </button>
        </div>

        {isSessionsLoading ? (
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#A3B094]"></div>
          </div>
        ) : sessionsList.length === 0 ? (
          <div className="text-center py-12 text-slate-400 text-sm">
            No chat history. Click new to start.
          </div>
        ) : (
          <div className="space-y-2">
            {sessionsList.map((session) => {
              const isActive = session._id === activeSessionId;
              const userMessages = (session.messages || []).filter((m) => m.role !== "system");
              const lastMsg = userMessages[userMessages.length - 1]?.content || "Empty chat";
              const dateStr = new Date(session.createdAt).toLocaleDateString(undefined, {
                month: "short",
                day: "numeric",
              });

              return (
                <button
                  key={session._id}
                  onClick={() => onSelectSession(session._id)}
                  disabled={isStreaming}
                  className={`w-full text-left p-3 rounded-xl transition-all border cursor-pointer ${
                    isActive
                      ? "bg-slate-50 border-[#A3B094] text-slate-800"
                      : "bg-white border-slate-100 text-slate-600 hover:bg-slate-50 hover:border-slate-200"
                  } disabled:opacity-75 disabled:cursor-not-allowed`}
                >
                  <div className="flex justify-between items-center text-xs font-semibold text-slate-400 mb-1">
                    <span>CBT Therapy</span>
                    <span>{dateStr}</span>
                  </div>
                  <p className="text-sm truncate font-medium max-w-[240px]">
                    {lastMsg}
                  </p>
                </button>
              );
            })}
          </div>
        )}
      </div>

      <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
        <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
          Kate CBT Support — Live
        </p>
      </div>
    </aside>
  );
});
