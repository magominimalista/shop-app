'use client';

export function LoadingSkeleton() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="animate-pulse">
          <div className="h-8 w-60 bg-gray-800 rounded mb-8"></div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {[...Array(16)].map((_, index) => (
              <div key={index} className="rounded-lg border border-gray-800 bg-gray-900 overflow-hidden">
                <div className="w-full pt-[100%] bg-gray-800 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-700"></div>
                </div>
                <div className="p-4 space-y-3">
                  <div className="h-5 bg-gray-800 rounded w-3/4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-800 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-800 rounded w-1/3"></div>
                    <div className="h-4 bg-gray-800 rounded w-1/4"></div>
                  </div>
                  <div className="h-10 bg-gray-800 rounded mt-4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
