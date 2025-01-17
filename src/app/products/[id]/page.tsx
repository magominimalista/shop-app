import { prisma } from "@/lib/db";
import { ProductDetails } from "@/components/ProductDetails";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await prisma.product.findUnique({
    where: {
      id: params.id,
    },
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

  if (!product) {
    notFound();
  }

  // Get 4 random products from the same category, excluding the current product
  const relatedProducts = await prisma.product.findMany({
    where: {
      category: product.category,
      id: {
        not: product.id,
      },
    },
    take: 4,
    orderBy: {
      createdAt: 'desc',
    },
  });

  return <ProductDetails product={product} relatedProducts={relatedProducts} />;
}
