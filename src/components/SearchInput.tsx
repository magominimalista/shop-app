'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import { Search } from 'lucide-react';

export function SearchInput() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const debouncedValue = useDebounce(searchQuery, 300);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    // Only update search if we're on the home page
    if (pathname === '/') {
      const queryString = createQueryString('q', debouncedValue);
      router.push(`/?${queryString}`);
    }
  }, [debouncedValue, router, createQueryString, pathname]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    // If we're not on the home page, redirect to home with search
    if (pathname !== '/') {
      const params = new URLSearchParams();
      if (value) {
        params.set('q', value);
      }
      router.push(`/?${params.toString()}`);
    }
  };

  return (
    <div className="relative flex-1 max-w-md">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        className="block w-full rounded-md border-0 bg-gray-800 py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-gray-700 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
        placeholder="Search products..."
      />
    </div>
  );
}
