'use client';

import Image from 'next/image'
import { Product } from '@/types'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <div className="group">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-800 lg:aspect-none group-hover:opacity-75 lg:h-80 border border-blue-500/20">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
        </div>
      </Link>
      <div className="mt-4">
        <div className="flex justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-200 group-hover:text-blue-400 transition-colors">
              <Link href={`/products/${product.id}`}>
                {product.name}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-400">{product.category}</p>
          </div>
          <p className="text-sm font-medium text-blue-400">${product.price}</p>
        </div>
        <button
          onClick={() => addItem(product)}
          className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
