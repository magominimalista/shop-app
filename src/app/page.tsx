import { Suspense } from 'react';
import { prisma } from "@/lib/db";
import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/types";
import { Pagination } from "@/components/Pagination";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import { CategoryFilter } from "@/components/CategoryFilter";

const ITEMS_PER_PAGE = 16;

interface SearchParams {
  q?: string;
  page?: string;
  category?: string;
}

async function getCategories() {
  const categories = await prisma.product.findMany({
    select: {
      category: true,
    },
    distinct: ['category'],
  });
  return categories.map(c => c.category);
}

async function ProductList({ searchParams }: { searchParams: SearchParams }) {
  const query = (searchParams?.q || '').toLowerCase();
  const category = searchParams?.category;
  const currentPage = Number(searchParams?.page) || 1;
  const skip = (currentPage - 1) * ITEMS_PER_PAGE;
  
  // Get all unique categories
  const categories = await getCategories();
  
  // Build the where clause
  const whereClause: any = {
    AND: [
      {
        OR: [
          { name: { contains: query } },
          { description: { contains: query } },
        ],
      },
    ],
  };

  // Add category filter if selected
  if (category) {
    whereClause.AND.push({ category });
  }
  
  // Get total count for pagination
  const totalItems = await prisma.product.count({
    where: whereClause,
  });

  // Get paginated products
  const products: Product[] = await prisma.product.findMany({
    where: whereClause,
    skip,
    take: ITEMS_PER_PAGE,
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-blue-400">
          {query ? `Search Results for "${searchParams.q}"` : 'Featured Collection'}
        </h2>
        <CategoryFilter categories={categories} />
      </div>

      {products.length === 0 ? (
        <p className="text-gray-400 text-center py-8">No products found matching your criteria.</p>
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
