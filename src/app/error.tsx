// src/app/products/[id]/error.tsx
"use client"; // Error boundaries must be Client Components

import React, { useEffect } from "react";

export default function Error({
   error,
   reset,
}: {
   error: Error & { digest?: string };
   reset: () => void;
}) {
   useEffect(() => {
      // Log the error to an error reporting service
      console.error(error);
   }, [error]);

   return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-red-50 border border-red-200 p-6 rounded-lg shadow-md mx-auto my-10 max-w-lg">
         <h2 className="text-3xl font-bold text-red-700 mb-4">
            Something went wrong!
         </h2>
         <p className="text-red-600 text-lg text-center mb-6">
            {error.message || "An unexpected error occurred."}
         </p>
         <button
            onClick={
               // Attempt to recover by trying to re-render the segment
               () => reset()
            }
            className="px-6 py-3 bg-red-600 text-white font-medium rounded-md shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition duration-300">
            Try again
         </button>
      </div>
   );
}
