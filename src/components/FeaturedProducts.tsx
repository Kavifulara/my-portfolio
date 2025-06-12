import Link from 'next/link'
import AddToCartButton from './AddToCartButton'

const products = [
  {
    id: 1,
    name: 'Abstract Canvas Art',
    price: 199.99,
    image: '/images/abstract-art.jpg',
    category: 'Wall Art',
    description: 'Modern abstract art piece perfect for contemporary spaces.',
  },
  {
    id: 3,
    name: 'Persian Style Rug',
    price: 499.99,
    image: '/images/persian-rug.jpg',
    category: 'Rugs',
    description: 'Traditional Persian-style rug with intricate patterns.',
  },
  {
    id: 5,
    name: 'Decorative Wall Mirror',
    price: 299.99,
    image: '/images/wall-mirror.jpg',
    category: 'Mirrors',
    description: 'Elegant wall mirror with ornate frame.',
  },
  {
    id: 7,
    name: 'Bronze Sculpture',
    price: 399.99,
    image: '/images/bronze-sculpture.jpg',
    category: 'Sculptures',
    description: 'Beautiful bronze sculpture for indoor display.',
  },
]

export default function FeaturedProducts() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-primary mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="group"
          >
            <div className="relative">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
} 