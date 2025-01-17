import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import { ProductDetails } from "@/components/ProductDetails";

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
  });

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
