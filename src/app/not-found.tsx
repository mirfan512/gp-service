//
'use client';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="mb-4 text-3xl font-bold text-red-600">Page Not Found</h1>
      <p className="mb-6 text-gray-700">The page you are looking for does not exist.</p>
    </div>
  );
}