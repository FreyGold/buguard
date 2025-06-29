"use client";

import React, { useEffect } from "react";

export default function Error({
   error,
   reset,
}: {
   error: Error & { digest?: string };
   reset: () => void;
}) {
   useEffect(() => {
      console.error(error);
   }, [error]);

   return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white border border-red-200 p-8 rounded-xl shadow-lg mx-auto my-16 max-w-md">
         <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-6">
            <svg
               className="w-10 h-10 text-red-600"
               fill="none"
               stroke="currentColor"
               strokeWidth={2}
               viewBox="0 0 24 24"
               aria-hidden="true">
               <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
               />
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4m0 4h.01"
               />
            </svg>
         </div>
         <h2 className="text-2xl font-semibold text-red-700 mb-2 text-center">
            Oops! Something went wrong.
         </h2>
         <p className="text-red-600 text-base text-center mb-6">
            {error.message || "An unexpected error occurred. Please try again."}
         </p>
         <button
            onClick={reset}
            className="px-6 py-2 bg-red-600 text-white font-semibold rounded-md shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-70 transition"
            aria-label="Try again">
            Try again
         </button>
      </div>
   );
}
