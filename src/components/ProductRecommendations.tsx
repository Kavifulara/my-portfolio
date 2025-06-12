import Link from 'next/link';
import AddToCartButton from './AddToCartButton';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

interface ProductRecommendationsProps {
  currentProductId: number;
  currentCategory: string;
}

export default function ProductRecommendations({ currentProductId, currentCategory }: ProductRecommendationsProps) {
  // Using the same product data structure as in other components
  const allProducts = [
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
  ];

  // Filter products to show only items from the same category, excluding the current product
  const recommendations = allProducts
    .filter(product => product.category === currentCategory && product.id !== currentProductId)
    .slice(0, 3); // Show up to 3 recommendations

  if (recommendations.length === 0) {
    return null;
  }

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">You May Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map((product) => (
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
    </div>
  );
} 