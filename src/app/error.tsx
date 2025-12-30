//coomplete this file src/app/error.tsx
'use client';
import { useEffect } from 'react';

interface ErrorProps {
  error: Error;
  reset: () => void;
}
export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Error occurred:', error);
  }, [error]);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="mb-4 text-3xl font-bold text-red-600">Something went wrong!</h1>
      <p className="mb-6 text-gray-700">An unexpected error has occurred. Please try again.</p>
      <button
        onClick={() => reset()}
        className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-[var(--sh-elev)] hover:bg-blue-700"
      >
        Try Again
      </button>
    </div>
  );
}