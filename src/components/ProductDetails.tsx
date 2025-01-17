'use client';

import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image */}
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-800 border border-blue-500/20">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover object-center hover:opacity-75 transition-opacity"
            />
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-blue-400">{product.name}</h1>
            
            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-100">${product.price}</p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className="space-y-6 text-base text-gray-300">{product.description}</p>
            </div>

            <div className="mt-6">
              <div className="space-y-4">
                <p className="text-gray-300">
                  <span className="font-medium text-blue-400">Category:</span> {product.category}
                </p>
                <p className="text-gray-300">
                  <span className="font-medium text-blue-400">Size:</span> {product.size}
                </p>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-500 px-8 py-3 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-colors gap-2"
            >
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
