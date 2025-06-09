'use client'

import { notFound } from 'next/navigation'
import AddToCartButton from '@/components/AddToCartButton'

// This would typically come from a database or API
const products = {
  'abstract-canvas-art': {
    id: 1,
    name: 'Abstract Canvas Art',
    price: 199.99,
    image: '/images/abstract-art.jpg',
    description: 'Modern abstract art piece perfect for contemporary spaces.',
    details: [
      'High-quality canvas material',
      'Hand-painted with premium acrylic colors',
      'Size: 36" x 48"',
      'Ready to hang',
      'Includes mounting hardware',
    ],
    category: 'Wall Art',
  },
  'vintage-persian-rug': {
    id: 2,
    name: 'Vintage Persian Rug',
    price: 499.99,
    image: '/images/persian-rug.jpg',
    description: 'Traditional Persian-style rug with intricate patterns.',
    details: [
      'Hand-knotted wool construction',
      'Traditional Persian patterns',
      'Size: 8\' x 10\'',
      'Durable and long-lasting',
      'Professional cleaning recommended',
    ],
    category: 'Rugs',
  },
  'decorative-wall-mirror': {
    id: 3,
    name: 'Decorative Wall Mirror',
    price: 299.99,
    image: '/images/wall-mirror.jpg',
    description: 'Elegant wall mirror with ornate frame.',
    details: [
      'Ornate gold-finish frame',
      'High-quality mirror glass',
      'Size: 30" diameter',
      'Easy wall mounting',
      'Includes mounting hardware',
    ],
    category: 'Mirrors',
  },
  'modern-bronze-sculpture': {
    id: 4,
    name: 'Modern Bronze Sculpture',
    price: 399.99,
    image: '/images/bronze-sculpture.jpg',
    description: 'Contemporary bronze sculpture for indoor display.',
    details: [
      'Cast bronze with patina finish',
      'Modern abstract design',
      'Height: 24"',
      'Solid marble base',
      'Signed by artist',
    ],
    category: 'Sculptures',
  },
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug as keyof typeof products]

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="aspect-w-1 aspect-h-1 bg-white rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-center object-cover"
            />
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-sm text-gray-500">Category: {product.category}</p>
            </div>

            <div className="mb-8">
              <p className="text-gray-600 text-lg mb-4">{product.description}</p>
              <ul className="space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="mr-2">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <span className="text-3xl font-bold text-primary">${product.price}</span>
            </div>

            <div className="space-y-4">
              <AddToCartButton />
              <button className="w-full border border-primary text-primary py-3 px-8 rounded-lg hover:bg-primary hover:text-white transition-colors">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 