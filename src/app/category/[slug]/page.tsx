'use client'

import { notFound } from 'next/navigation'
import AddToCartButton from '@/components/AddToCartButton'

// This would typically come from a database or API
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
      },
      {
        id: 2,
        name: 'Vintage Wall Print',
        price: 149.99,
        image: '/images/vintage-print.jpg',
        description: 'Classic vintage print with timeless appeal.',
      },
      // Add more products as needed
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
      },
      {
        id: 4,
        name: 'Modern Geometric Rug',
        price: 299.99,
        image: '/images/geometric-rug.jpg',
        description: 'Contemporary rug with bold geometric patterns.',
      },
      // Add more products as needed
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
      },
      {
        id: 6,
        name: 'Modern Round Mirror',
        price: 249.99,
        image: '/images/round-mirror.jpg',
        description: 'Sleek round mirror with minimalist design.',
      },
      // Add more products as needed
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
      },
      {
        id: 8,
        name: 'Modern Abstract Sculpture',
        price: 349.99,
        image: '/images/modern-abstract-sculpture.png',
        description: 'Contemporary abstract sculpture in metal finish.',
      },
      {
        id: 9,
        name: 'Lord Buddha sculpture',
        price: 149.99,
        image: '/images/Buddha.jpg',
        description: 'Lord Buddha.',
      },
      {
        id: 10,
        name: 'Lord Hanuman sculpture',
        price: 249.99,
        image: '/images/Lord-Hanuman.jpg',
        description: 'Hanuman ji.',
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
      },
    ],
  },
}                   
export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories[params.slug as keyof typeof categories]

  if (!category) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">{category.title}</h1>
          <p className="text-lg text-gray-600">{category.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    ${product.price}
                  </span>
                  <AddToCartButton product={product} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 