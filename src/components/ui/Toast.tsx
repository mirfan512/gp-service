"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";

export type ToastType = "success" | "error" | "info";

export interface ToastMessage {
  id: string;
  type: ToastType;
  message: string;
}

interface ToastContextType {
  showToast: (message: string, type: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = useCallback((message: string, type: ToastType) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, type, message }]);

    // Auto dismiss after 5 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Toast container */}
      <div className="fixed top-5 right-5 z-50 flex flex-col gap-3 max-w-md w-full sm:w-96">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="flex items-start gap-3 p-4 rounded-xl shadow-lg border backdrop-blur-md transition-all duration-300 transform translate-y-0 scale-100 animate-slide-in"
            style={{
              background:
                toast.type === "success"
                  ? "rgba(244, 247, 244, 0.95)"
                  : toast.type === "error"
                  ? "rgba(253, 244, 244, 0.95)"
                  : "rgba(244, 246, 248, 0.95)",
              borderColor:
                toast.type === "success"
                  ? "#A3B094"
                  : toast.type === "error"
                  ? "#E53E3E"
                  : "#3182CE",
              color: "var(--c-text)",
            }}
          >
            {/* Icons */}
            <div className="flex-shrink-0 mt-0.5">
              {toast.type === "success" && <CheckCircle size={20} className="text-[#5B7553]" />}
              {toast.type === "error" && <AlertCircle size={20} className="text-[#E53E3E]" />}
              {toast.type === "info" && <Info size={20} className="text-[#3182CE]" />}
            </div>
            {/* Message */}
            <div className="flex-1 text-[14px] font-medium leading-relaxed">
              {toast.message}
            </div>
            {/* Close button */}
            <button
              onClick={() => removeToast(toast.id)}
              className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity"
              aria-label="Close notification"
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
      
      {/* Dynamic Keyframe Injection for animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(1rem) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-slide-in {
          animation: slideIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />
    </ToastContext.Provider>
  );
}
