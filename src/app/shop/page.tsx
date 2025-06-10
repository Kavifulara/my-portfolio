'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import AddToCartButton from '@/components/AddToCartButton'
import ProductGrid from '@/components/ProductGrid'

const allProducts = [
  {
    id: 1,
    name: 'Abstract Canvas Art',
    price: 199.99,
    image: '/images/abstract-art.jpg',
    category: 'Wall Art',
    href: '/product/abstract-canvas-art',
  },
  {
    id: 2,
    name: 'Vintage Persian Rug',
    price: 499.99,
    image: '/images/persian-rug.jpg',
    category: 'Rugs',
    href: '/product/vintage-persian-rug',
  },
  {
    id: 3,
    name: 'Decorative Wall Mirror',
    price: 299.99,
    image: '/images/wall-mirror.jpg',
    category: 'Mirrors',
    href: '/product/decorative-wall-mirror',
  },
  {
    id: 4,
    name: 'Modern Bronze Sculpture',
    price: 399.99,
    image: '/images/bronze-sculpture.jpg',
    category: 'Sculptures',
    href: '/product/modern-bronze-sculpture',
  },
  {
    id: 5,
    name: 'Modern Geometric Rug',
    price: 299.99,
    image: '/images/geometric-rug.jpg',
    category: 'Rugs',
    href: '/product/modern-geometric-rug',
  },
  {
    id: 6,
    name: 'Vintage Wall Print',
    price: 149.99,
    image: '/images/vintage-print.jpg',
    category: 'Wall Art',
    href: '/product/vintage-wall-print',
  },
  {
    id: 7,
    name: 'Modern Round Mirror',
    price: 249.99,
    image: '/images/round-mirror.jpg',
    category: 'Mirrors',
    href: '/product/modern-round-mirror',
  },
  {
    id: 8,
    name: 'Abstract Sculpture',
    price: 349.99,
    image: '/images/modern-abstract-sculpture.png',
    category: 'Sculptures',
    href: '/product/abstract-sculpture',
  },
]

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense
          fallback={
            <div className="text-center py-12">
              <div className="text-lg text-gray-600">Loading products...</div>
            </div>
          }
        >
          <ProductGrid products={allProducts} />
        </Suspense>
      </div>
    </div>
  )
} 