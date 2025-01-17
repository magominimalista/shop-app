'use client';

import Link from 'next/link';
import { SearchInput } from './SearchInput';

export function Header() {
  return (
    <header className="bg-gray-900 border-b border-blue-500/20">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-6">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors"
            >
              NEXUS WEAR
            </Link>
          </div>
          <SearchInput />
          <div className="ml-10 space-x-8">
            <Link
              href="/"
              className="text-base font-medium text-gray-300 hover:text-blue-400 transition-colors"
            >
              Shop
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
