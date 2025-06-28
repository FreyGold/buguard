// src/app/dashboard/loading.tsx
import React from "react";

export default function Loading() {
   return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
         <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Loading Dashboard...
         </h2>
         <p className="text-gray-600 mb-6">
            Please wait while we fetch your data.
         </p>
         <div className="w-10 h-10 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
   );
}
