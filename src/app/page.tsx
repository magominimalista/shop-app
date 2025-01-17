import { Suspense } from "react";
import { prisma } from "@/lib/db";
import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/types";
import { Pagination } from "@/components/Pagination";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import { CategoryFilter } from "@/components/CategoryFilter";
import { SizeFilter } from "@/components/SizeFilter";

const ITEMS_PER_PAGE = 16;

interface SearchParams {
  q?: string;
  page?: string;
  category?: string;
  size?: string;
}

async function getCategories() {
  const categories = await prisma.product.findMany({
    select: {
      category: true,
    },
    distinct: ["category"],
  });
  return categories.map((c) => c.category);
}

async function getSizes() {
  const sizes = await prisma.product.findMany({
    select: {
      size: true,
    },
    distinct: ["size"],
  });
  return sizes.map((s) => s.size);
}

async function ProductList({ searchParams }: { searchParams: SearchParams }) {
  const query = (searchParams?.q || "").toLowerCase();
  const category = searchParams?.category;
  const size = searchParams?.size;
  const currentPage = Number(searchParams?.page) || 1;
  const skip = (currentPage - 1) * ITEMS_PER_PAGE;

  // Get all unique categories and sizes
  const [categories, sizes] = await Promise.all([getCategories(), getSizes()]);

  const whereClause = buildWhereClause(query, category, size);

  // Get total count for pagination
  const totalItems = await prisma.product.count({
    where: whereClause,
  });

  // Get paginated products
  const products: Product[] = await prisma.product.findMany({
    where: whereClause,
    orderBy: {
      createdAt: "desc",
    },
    skip,
    take: ITEMS_PER_PAGE,
    select: {
      id: true,
      name: true,
      description: true,
      price: true,
      image: true,
      additionalImages: true,
      category: true,
      size: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-blue-400">
          {query
            ? `Search Results for "${searchParams.q}"`
            : "Featured Collection"}
        </h2>
        <div className="flex items-center gap-3">
          <CategoryFilter categories={categories} />
          <SizeFilter sizes={sizes} />
        </div>
      </div>

      {products.length === 0 ? (
        <p className="text-gray-400 text-center py-8">
          No products found matching your criteria.
        </p>
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

function buildWhereClause(
  query: string,
  category: string | undefined,
  size: string | undefined
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  // Add size filter if selected
  if (size) {
    whereClause.AND.push({ size });
  }

  return whereClause;
}

function ProductListWrapper({ searchParams }: { searchParams: SearchParams }) {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <ProductList searchParams={searchParams} />
    </Suspense>
  );
}

export default function Home({ searchParams }: { searchParams: SearchParams }) {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <ProductListWrapper searchParams={searchParams} />
      </div>
    </div>
  );
}
