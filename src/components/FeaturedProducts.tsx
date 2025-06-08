import Link from 'next/link'

const products = [
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
]

export default function FeaturedProducts() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-primary mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={product.href}
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