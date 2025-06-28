import React from "react";

function AllPostsSkeleton() {
   return (
      <div>
         <div className="animate-pulse mb-6">
            <div className="h-8 w-48 bg-gray-300 rounded mb-4" />
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, idx) => (
               <div
                  key={idx}
                  className="flex flex-col gap-4 p-4 bg-gray-100 rounded shadow animate-pulse">
                  <div className="h-40 bg-gray-300 rounded" />
                  <div className="h-6 w-3/4 bg-gray-300 rounded" />
                  <div className="h-4 w-1/2 bg-gray-200 rounded" />
                  <div className="h-4 w-1/3 bg-gray-200 rounded" />
               </div>
            ))}
         </div>
      </div>
   );
}

export default AllPostsSkeleton;
