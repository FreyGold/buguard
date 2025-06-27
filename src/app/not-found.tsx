// src/app/not-found.tsx
import Link from "next/link";
import React from "react";

export default function NotFound() {
   return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-6 text-center">
         <h1 className="text-6xl font-extrabold text-blue-700 mb-4 animate-bounce">
            404
         </h1>
         <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Page Not Found
         </h2>
         <p className="text-lg text-gray-600 mb-8 max-w-md">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has
            been moved.
         </p>
         <Link
            href="/"
            className="px-8 py-4 bg-blue-600 text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 transform hover:scale-105">
            Return Home
         </Link>
      </div>
   );
}
