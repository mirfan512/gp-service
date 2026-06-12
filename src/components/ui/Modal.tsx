import React, { useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  maxWidth?: string;
  isActionDisabled?: boolean;
}

export function Modal({
  isOpen,
  onClose,
  title = "Notice",
  children,
  actionLabel = "Acknowledge",
  onAction,
  maxWidth = "max-w-lg",
  isActionDisabled = false,
}: ModalProps) {
  // Handle escape key and body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="presentation"
    >
      {/* Backdrop with a smooth blur */}
      <div
        className="absolute inset-0 bg-gray-900/40 backdrop-blur-md transition-opacity duration-300 ease-out animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className={`relative z-10 w-full ${maxWidth} transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all duration-300 ease-out animate-in fade-in zoom-in-95`}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4">
          <h3
            id="modal-title"
            className="text-xl font-semibold tracking-tight text-gray-900"
          >
            {title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="text-sm leading-relaxed text-gray-600">
          {children}
        </div>

        {/* Footer Actions */}
        <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 items-center justify-center rounded-xl border border-gray-200 bg-white px-4 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 active:scale-[0.98]"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={isActionDisabled}
            onClick={onAction || onClose}
            className="inline-flex h-10 items-center justify-center rounded-xl bg-[#A3B094] px-4 text-sm font-medium text-white shadow-sm transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 active:scale-[0.98] disabled:opacity-40 disabled:pointer-events-none"
          >
            {actionLabel}
          </button>
        </div>  
      </div>
    </div>
  );
}