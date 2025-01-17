'use client';

import { Product } from '@/types';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Tag, Ruler, DollarSign, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <Link
      href={`/products/${product.id}`}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-800 bg-gray-900"
    >
      <div className="relative w-full pt-[100%] bg-gray-800 rounded-t-lg overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-full"
          whileHover={{ scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ borderRadius: '8px 8px 0 0' }}
        >
          <motion.img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover object-center transform-gpu"
            style={{ 
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
              borderRadius: '8px 8px 0 0'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
        </motion.div>
      </div>
      <div className="flex flex-1 flex-col space-y-3 p-4">
        <h3 className="text-lg font-bold text-gray-100 line-clamp-1 tracking-tight">
          {product.name}
        </h3>
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 text-gray-300">
            <Tag className="h-4 w-4 text-blue-400" />
            <span>{product.category}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Ruler className="h-4 w-4 text-blue-400" />
            <span>Size: {product.size}</span>
          </div>
          <div className="flex items-center gap-2 text-xl font-bold text-blue-400">
            <DollarSign className="h-5 w-5" />
            <span>{product.price.toFixed(2)}</span>
          </div>
        </div>
        <button
          onClick={handleAddToCart}
          className="mt-auto flex w-full items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 px-4 py-2 text-base font-medium text-white hover:bg-yellow-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
        >
          <ShoppingCart className="h-5 w-5" />
          Add to cart
        </button>
      </div>
    </Link>
  );
}
