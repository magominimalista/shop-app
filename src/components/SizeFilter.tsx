'use client';

import { useState, useEffect } from 'react';
import { Ruler } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

interface SizeFilterProps {
  sizes: string[];
}

export function SizeFilter({ sizes }: SizeFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSize = searchParams.get('size') || 'All';

  const handleSizeClick = (size: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (size === 'All') {
      params.delete('size');
    } else {
      params.set('size', size);
    }
    params.delete('page'); // Reset to first page when changing size
    router.push(`/?${params.toString()}`);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('[data-size-filter-container]')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="relative" data-size-filter-container>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-2 text-black font-medium hover:bg-yellow-500 transition-colors"
      >
        <Ruler className="h-5 w-5" />
        <span>{currentSize}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 rounded-lg bg-gray-800 shadow-lg border border-gray-700 py-2 z-50">
          <div 
            className={`px-4 py-2 cursor-pointer hover:bg-gray-700 transition-colors ${
              currentSize === 'All' ? 'text-yellow-400' : 'text-gray-300'
            }`}
            onClick={() => handleSizeClick('All')}
          >
            All
          </div>
          {sizes.map((size) => (
            <div
              key={size}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-700 transition-colors ${
                currentSize === size ? 'text-yellow-400' : 'text-gray-300'
              }`}
              onClick={() => handleSizeClick(size)}
            >
              {size}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
