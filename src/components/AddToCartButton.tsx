'use client'

import { useCart } from '@/context/CartContext'

interface AddToCartButtonProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
  };
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button
      className="w-full bg-secondary text-white py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors"
      onClick={() => {
        addToCart(product);
      }}
    >
      Add to Cart
    </button>
  )
} 