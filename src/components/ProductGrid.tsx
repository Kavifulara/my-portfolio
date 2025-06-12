'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import AddToCartButton from './AddToCartButton'

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  description: string
}

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  const searchParams = useSearchParams()
  const query = searchParams?.get('q')?.toLowerCase() || ''

  const filteredProducts = query
    ? products.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      )
    : products

  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">
          {query ? `Search Results for "${query}"` : 'All Products'}
        </h1>
        <p className="text-lg text-gray-600">
          {query
            ? `Found ${filteredProducts.length} products matching your search`
            : 'Browse our complete collection of decorative items'}
        </p>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-medium text-gray-900 mb-4">
            No products found
          </h2>
          <p className="text-gray-600 mb-8">
            Try searching with different terms or browse our categories
          </p>
          <Link
            href="/shop"
            className="inline-block bg-secondary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            View All Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-1 aspect-h-1 w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.category}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-medium text-primary">
                    ${product.price}
                  </span>
                  <AddToCartButton product={product} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  )
} 