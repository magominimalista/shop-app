import { Suspense } from 'react';
import { prisma } from "@/lib/db";
import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/types";
import { Pagination } from "@/components/Pagination";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";

const ITEMS_PER_PAGE = 16;

interface SearchParams {
  q?: string;
  page?: string;
}

async function ProductList({ searchParams }: { searchParams: SearchParams }) {
  const query = (searchParams?.q || '').toLowerCase();
  const currentPage = Number(searchParams?.page) || 1;
  const skip = (currentPage - 1) * ITEMS_PER_PAGE;
  
  // Simulate some network delay to show loading state
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Get total count for pagination
  const totalItems = await prisma.product.count({
    where: {
      OR: [
        { name: { contains: query } },
        { description: { contains: query } },
        { category: { contains: query } },
      ],
    },
  });

  // Get paginated products
  const products: Product[] = await prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: query } },
        { description: { contains: query } },
        { category: { contains: query } },
      ],
    },
    skip,
    take: ITEMS_PER_PAGE,
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight text-blue-400 mb-8">
        {query ? `Search Results for "${searchParams.q}"` : 'Featured Collection'}
      </h2>
      {products.length === 0 ? (
        <p className="text-gray-400 text-center py-8">No products found matching your search.</p>
      ) : (
        <>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8">
            <Pagination
              totalItems={totalItems}
              itemsPerPage={ITEMS_PER_PAGE}
              currentPage={currentPage}
            />
          </div>
        </>
      )}
    </>
  );
}

export default function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <Suspense fallback={<LoadingSkeleton />}>
          <ProductList searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}
