"use client";

export function DashboardSkeleton() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      
      <div className="w-64 h-full bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
      
      <div className="flex-1 overflow-auto">
        
        <div className="h-16 bg-white dark:bg-gray-800 shadow-sm animate-pulse"></div>
        
        <main className="p-6 space-y-6">
          
          <div className="flex justify-between">
            <div className="flex space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
              ))}
            </div>
            <div className="flex space-x-2">
              {[1, 2].map((i) => (
                <div key={i} className="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
              ))}
            </div>
          </div>
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="h-32 bg-white dark:bg-gray-800 rounded-lg shadow animate-pulse"></div>
            ))}
          </div>
          
          
          <div className="h-80 bg-white dark:bg-gray-800 rounded-lg shadow animate-pulse"></div>
          
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-24 bg-white dark:bg-gray-800 rounded-lg shadow animate-pulse"></div>
            ))}
          </div>
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="h-48 bg-white dark:bg-gray-800 rounded-lg shadow animate-pulse"></div>
            ))}
          </div>
          
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="h-64 bg-white dark:bg-gray-800 rounded-lg shadow animate-pulse"></div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}