import Link from 'next/link'

const categories = [
  {
    id: 1,
    name: 'Wall Art',
    image: '/images/wall-art.jpg',
    href: '/category/wall-art',
  },
  {
    id: 2,
    name: 'Rugs',
    image: '/images/rugs.jpg',
    href: '/category/rugs',
  },
  {
    id: 3,
    name: 'Mirrors',
    image: '/images/mirrors.jpg',
    href: '/category/mirrors',
  },
  {
    id: 4,
    name: 'Sculptures',
    image: '/images/sculptures.jpg',
    href: '/category/sculptures',
  },
  {
    id: 5,
    name: 'Sculptures',
    image: '/images/sculptures1.jpg',
    href: '/category/sculptures',
  },
  {
    id: 6,
    name: 'Sculptures',
    image: '/images/sculptures2.jpg',
    href: '/category/sculptures',
  },
]

export default function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-primary mb-8">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={category.href}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-w-1 aspect-h-1 w-full">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-center object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-semibold text-white">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
} 