'use client';

import { useState, useEffect } from 'react';
import { Filter } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

interface CategoryFilterProps {
  categories: string[];
}

export function CategoryFilter({ categories }: CategoryFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category') || 'All';

  const handleCategoryClick = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category === 'All') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    params.delete('page'); // Reset to first page when changing category
    router.push(`/?${params.toString()}`);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('[data-filter-container]')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="relative" data-filter-container>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-2 text-black font-medium hover:bg-yellow-500 transition-colors"
      >
        <Filter className="h-5 w-5" />
        <span>{currentCategory}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 rounded-lg bg-gray-800 shadow-lg border border-gray-700 py-2 z-50">
          <div 
            className={`px-4 py-2 cursor-pointer hover:bg-gray-700 transition-colors ${
              currentCategory === 'All' ? 'text-yellow-400' : 'text-gray-300'
            }`}
            onClick={() => handleCategoryClick('All')}
          >
            All
          </div>
          {categories.map((category) => (
            <div
              key={category}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-700 transition-colors ${
                currentCategory === category ? 'text-yellow-400' : 'text-gray-300'
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
