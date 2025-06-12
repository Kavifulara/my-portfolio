'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import AddToCartButton from '@/components/AddToCartButton'
import ProductGrid from '@/components/ProductGrid'

// Import the same categories data
const categories = {
  'wall-art': {
    title: 'Wall Art',
    description: 'Beautiful pieces to adorn your walls',
    products: [
      {
        id: 1,
        name: 'Abstract Canvas Art',
        price: 199.99,
        image: '/images/abstract-art.jpg',
        description: 'Modern abstract art piece perfect for contemporary spaces.',
        category: 'Wall Art'
      },
      {
        id: 2,
        name: 'Vintage Wall Print',
        price: 149.99,
        image: '/images/vintage-print.jpg',
        description: 'Classic vintage print with timeless appeal.',
        category: 'Wall Art'
      },
    ],
  },
  'rugs': {
    title: 'Rugs',
    description: 'Elegant rugs to transform your floors',
    products: [
      {
        id: 3,
        name: 'Persian Style Rug',
        price: 499.99,
        image: '/images/persian-rug.jpg',
        description: 'Traditional Persian-style rug with intricate patterns.',
        category: 'Rugs'
      },
      {
        id: 4,
        name: 'Modern Geometric Rug',
        price: 299.99,
        image: '/images/geometric-rug.jpg',
        description: 'Contemporary rug with bold geometric patterns.',
        category: 'Rugs'
      },
    ],
  },
  'mirrors': {
    title: 'Mirrors',
    description: 'Stunning mirrors to brighten your space',
    products: [
      {
        id: 5,
        name: 'Decorative Wall Mirror',
        price: 299.99,
        image: '/images/wall-mirror.jpg',
        description: 'Elegant wall mirror with ornate frame.',
        category: 'Mirrors'
      },
      {
        id: 6,
        name: 'Modern Round Mirror',
        price: 249.99,
        image: '/images/round-mirror.jpg',
        description: 'Sleek round mirror with minimalist design.',
        category: 'Mirrors'
      },
    ],
  },
  'sculptures': {
    title: 'Sculptures',
    description: 'Artistic sculptures for your home',
    products: [
      {
        id: 7,
        name: 'Bronze Sculpture',
        price: 399.99,
        image: '/images/bronze-sculpture.jpg',
        description: 'Beautiful bronze sculpture for indoor display.',
        category: 'Sculptures'
      },
      {
        id: 8,
        name: 'Modern Abstract Sculpture',
        price: 349.99,
        image: '/images/modern-abstract-sculpture.png',
        description: 'Contemporary abstract sculpture in metal finish.',
        category: 'Sculptures'
      },
      {
        id: 9,
        name: 'Lord Buddha sculpture',
        price: 149.99,
        image: '/images/Buddha.jpg',
        description: 'Lord Buddha.',
        category: 'Sculptures'
      },
      {
        id: 10,
        name: 'Lord Hanuman sculpture',
        price: 249.99,
        image: '/images/Lord-Hanuman.jpg',
        description: 'Hanuman ji.',
        category: 'Sculptures'
      },
    ],
  },
  'curtains': {
    title: 'Curtains',
    description: 'Lovely curtains to match your home environment ',
    products: [
      {
        id: 11,
        name: 'Red curtains',
        price: 199.99,
        image: '/images/curtains.jpg',
        description: 'Beautiful curtain to suit your home.',
        category: 'Curtains'
      },
    ],
  },
  'clocks': {
    title: 'Clocks',
    description: 'Lovely clocks to match your home environment ',
    products: [
      {
        id: 12,
        name: 'Round clock',
        price: 199.99,
        image: '/images/clock.jpg',
        description: 'classic round clock.',
        category: 'Clocks'
      },
    ],
  },
  'paintings': {
    title: 'Paintings',
    description: 'Lovely paintings ',
    products: [
      {
        id: 13,
        name: 'Animal painting',
        price: 199.99,
        image: '/images/painting.jpg',
        description: 'Amazing animal painting.',
        category: 'Paintings'
      },
    ],
  },
  'posters': {
    title: 'Posters',
    description: 'Posters that will fill your lonely walls.',
    products: [
      {
        id: 14,
        name: 'Multi image poster',
        price: 199.99,
        image: '/images/posters.jpg',
        description: 'Beautiful poster to suit your wall.',
        category: 'Posters'
      },
    ],
  },
};

// Convert categories data to flat array of products with href
const allProducts = Object.values(categories)
  .flatMap(category => category.products)
  .map(product => ({
    ...product,
    href: `/product/${product.id}`,
  }));

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-primary mb-8">All Products</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductGrid products={allProducts} />
        </Suspense>
      </div>
    </div>
  );
} 