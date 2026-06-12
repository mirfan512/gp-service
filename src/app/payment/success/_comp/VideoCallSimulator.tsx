"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useJoinConsultationQuery } from "@/src/store/services/doctorsApi";
import { getErrorMessage } from "@/src/store/services/api";

interface VideoCallSimulatorProps {
  doctorName: string;
  consultationId: string;
  onEndCall: () => void;
}

export function VideoCallSimulator({
  doctorName,
  consultationId,
  onEndCall,
}: VideoCallSimulatorProps) {
  const [hasJoined, setHasJoined] = useState(false);
  const [launchError, setLaunchError] = useState<string | null>(null);

  // Fetch join token and server URL from backend
  const { data, error, isLoading, refetch } = useJoinConsultationQuery(consultationId, {
    skip: !consultationId,
  });

  const serverUrl = data?.data?.serverUrl || "";
  const accessToken = data?.data?.accessToken || "";

  // Construct standard LiveKit customized join link
  const joinUrl = serverUrl && accessToken
    ? `https://meet.livekit.io/custom?liveKitUrl=${encodeURIComponent(serverUrl)}&token=${accessToken}`
    : "";

  const handleJoinCall = () => {
    if (!joinUrl) {
      setLaunchError("Call room is not ready yet. Please try again.");
      return;
    }
    setLaunchError(null);
    setHasJoined(true);
    // Open in a new tab so they keep the portal/feedback screen open in this tab
    const newWindow = window.open(joinUrl, "_blank");
    if (!newWindow) {
      setLaunchError("Popup blocked! Please allow popups or click the link below to join.");
    }
  };

  return (
    <div className="hero-gradient rounded-3xl overflow-hidden shadow-2xl max-w-6xl w-full min-h-[720px] flex flex-col justify-between p-8 relative text-white">
      
      {/* Background glow effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] aspect-square rounded-full bg-[var(--c-primary)] opacity-[0.05] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] aspect-square rounded-full bg-[#39657D] opacity-[0.05] blur-[100px] pointer-events-none" />

      {/* Header row */}
      <div className="flex justify-between items-center z-10">
       
        <div className="text-xs bg-slate-800/80 border border-slate-700/50 rounded-full px-3 py-1 text-slate-300 font-medium">
          Ref: {consultationId ? consultationId.substring(0, 8) : "N/A"}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col items-center justify-center space-y-6 z-10 flex-1 my-8">
        
        {/* Clinician Avatar Card */}
        <div className="relative">
          {isLoading && (
            <div className="absolute inset-[-15px] rounded-full border-2 border-dashed border-sky-500/40 animate-spin duration-3000" />
          )}
          {joinUrl && !isLoading && (
            <>
              <div className="absolute inset-[-12px] rounded-full border-2 border-emerald-500/25 animate-ping duration-1500" />
              <div className="absolute inset-[-6px] rounded-full border border-emerald-500/40 animate-pulse" />
            </>
          )}
          
          <div className="w-32 h-32 rounded-full bg-slate-600 border-4 border-slate-700 overflow-hidden flex items-center justify-center text-5xl shadow-inner relative">
            👨‍⚕️
          </div>
        </div>

        {/* Status Text & Information */}
        <div className="text-center space-y-2 max-w-lg">
          <h3 className="text-2xl font-bold tracking-wide">Dr. {doctorName}</h3>
          
          {isLoading ? (
            <div className="flex flex-col items-center gap-2">
              <svg className="animate-spin h-5 w-5 text-sky-400 mt-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p className="text-sm text-white font-medium animate-pulse">
                Generating secure WebRTC Room credentials...
              </p>
            </div>
          ) : error ? (
            <div className="space-y-4">
              <p className="text-sm text-rose-400 font-medium bg-rose-500/10 border border-rose-500/20 px-4 py-2.5 rounded-xl">
                {getErrorMessage(error)}
              </p>
              <button
                onClick={() => refetch()}
                className="px-5 py-2 bg-slate-850 hover:bg-slate-800 border border-slate-700 rounded-xl text-xs font-semibold tracking-wide transition-all active:scale-98 cursor-pointer"
              >
                Retry Connection
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-sm text-emerald-400 font-semibold flex items-center justify-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.14-.082l4-5.6Z" clipRule="evenodd" />
                </svg>
                Secure Connection Ready
              </p>
              <p className="text-sm  text-white leading-relaxed">
                Your consultation room has been allocated. Please click the button below to join the call. Make sure to allow camera and microphone permissions when prompted in the room.
              </p>
            </div>
          )}
        </div>

        {/* Launch Error / Popup Warning */}
        {launchError && (
          <div className="text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 px-4 py-2.5 rounded-xl text-center max-w-md">
            {launchError}
          </div>
        )}
      </div>

      {/* Footer / Call Controls */}
      <div className="flex flex-col items-center gap-4 z-10">
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
          
          {/* Join Call Button */}
          {joinUrl && !isLoading && (
            <button
              onClick={handleJoinCall}
              className="flex-1 h-14 bg-[#39657D] hover:bg-emerald-600 active:bg-emerald-700 text-white font-semibold rounded-2xl flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-900/20 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.51 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
              {hasJoined ? "Rejoin Video Call" : "Start Video Call"}
            </button>
          )}

          {/* End Call/Advance Button */}
          <button
            onClick={onEndCall}
            className={`flex-1 h-14 rounded-2xl font-semibold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
              hasJoined
                ? "bg-slate-800 border-slate-700 hover:bg-slate-750 text-white"
                : "bg-slate-850/50 border-slate-800 text-slate-500 hover:text-slate-300 hover:border-slate-700"
            }`}
          >
            {hasJoined ? "Complete & Leave Review" : "Skip to Feedback"}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>

        {/* Troubleshooting link */}
        {hasJoined && joinUrl && (
          <a
            href={joinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-sky-400 hover:underline cursor-pointer"
          >
            Direct Link: Open video room manually
          </a>
        )}
      </div>
    </div>
  );
}
