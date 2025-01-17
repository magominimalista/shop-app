'use client';

import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { Tag, Ruler, DollarSign, ShoppingCart, ArrowLeft, Box } from 'lucide-react';
import { useRouter } from "next/navigation";
import { ProductCard } from "./ProductCard";

interface ProductDetailsProps {
  product: Product;
  relatedProducts: Product[];
}

export function ProductDetails({ product, relatedProducts }: ProductDetailsProps) {
  const { addItem } = useCart();
  const router = useRouter();

  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors mb-8 group"
        >
          <ArrowLeft className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" />
          Back to products
        </button>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Product Image */}
          <div className="aspect-square w-full overflow-hidden rounded-lg border border-gray-800">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Product Info */}
          <div className="mt-8 lg:mt-0">
            <div className="flex flex-col gap-6">
              <div className="border-b border-gray-800 pb-6">
                <h1 className="text-3xl font-bold tracking-tight text-gray-100">
                  {product.name}
                </h1>
                <div className="mt-4 flex items-center gap-2 text-2xl font-bold text-blue-400">
                  <DollarSign className="h-6 w-6" />
                  <span>{product.price.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gray-300">
                  <Tag className="h-5 w-5 text-blue-400" />
                  <span className="text-lg">Category: {product.category}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Ruler className="h-5 w-5 text-blue-400" />
                  <span className="text-lg">Size: {product.size}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Box className="h-5 w-5 text-blue-400" />
                  <span className="text-lg">In Stock</span>
                </div>
              </div>

              <div className="border-t border-gray-800 pt-6">
                <h3 className="text-lg font-medium text-gray-100 mb-4">Description</h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="mt-auto">
                <button
                  onClick={() => addItem(product)}
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-blue-500 px-6 py-3 text-lg font-medium text-white hover:bg-yellow-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-200"
                >
                  <ShoppingCart className="h-6 w-6" />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-blue-400 mb-8">
              More from {product.category}
            </h2>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
