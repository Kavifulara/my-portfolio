'use client';

import React, { useState, Suspense } from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import ProductRecommendations from '@/components/ProductRecommendations';
import dynamic from 'next/dynamic';

// Dynamically import 3D components to avoid loading them unnecessarily
const Model3DViewer = dynamic(() => import('@/components/Model3DViewer'), {
  ssr: false,
  loading: () => <div className="w-full h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">Loading 3D viewer...</div>
});

const ARViewer = dynamic(() => import('@/components/ARViewer'), {
  ssr: false,
  loading: () => <div className="w-full h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">Loading AR viewer...</div>
});

// Import categories data
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  glbModel?: string;
}

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
        category: 'Wall Art',
        glbModel: '/models/abstract-art.glb'
      },
      {
        id: 2,
        name: 'Vintage Wall Print',
        price: 149.99,
        image: '/images/vintage-print.jpg',
        description: 'Classic vintage print with timeless appeal.',
        category: 'Wall Art',
        glbModel: '/models/vintage-wall.glb'
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
        category: 'Mirrors',
        glbModel: '/models/decorative-wall-mirror.glb'
      },
      {
        id: 6,
        name: 'Modern Round Mirror',
        price: 249.99,
        image: '/images/round-mirror.jpg',
        description: 'Sleek round mirror with minimalist design.',
        category: 'Mirrors',
        glbModel: '/models/modern-round-mirror.glb'
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
        category: 'Clocks',
        glbModel: '/models/round-clock.glb'
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
        category: 'Paintings',
        glbModel: '/models/painting.glb'
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
        category: 'Posters',
        glbModel: '/models/posters.glb'
      },
    ],
  },
};

export default function ProductPage() {
  const params = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [show3DError, setShow3DError] = useState(false);

  // Find the product from our categories data
  const productId = Number(params.id);
  const product = Object.values(categories)
    .flatMap(category => category.products)
    .find(p => p.id === productId) as Product | undefined;

  // If product not found, show 404
  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
  };

  const handle3DError = () => {
    setShow3DError(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0 md:w-1/2">
              <div className="h-96 md:h-full">
                <img
                  className="h-full w-full object-cover"
                  src={product.image}
                  alt={product.name}
                />
              </div>
            </div>
            <div className="p-8 md:w-1/2">
              <div className="mb-4">
                <Link
                  href={`/category/${product.category.toLowerCase().replace(' ', '-')}`}
                  className="text-sm text-secondary hover:text-primary"
                >
                  {product.category}
                </Link>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-2xl font-bold text-gray-900 mb-6">
                ${product.price}
              </p>

              <div className="flex items-center mb-6">
                <label htmlFor="quantity" className="mr-4 text-gray-700">
                  Quantity:
                </label>
                <select
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="border rounded-lg px-3 py-2"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-4">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-secondary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Add to Cart
                </button>

                {product.glbModel && (
                  <button
                    onClick={() => window.location.href = `#view-in-ar`}
                    className="w-full border-2 border-secondary text-secondary px-6 py-3 rounded-lg hover:bg-secondary hover:text-white transition-colors"
                  >
                    View in Your Space (AR)
                  </button>
                )}
              </div>

              <div className="mt-8">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Product Features:
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>High-quality materials</li>
                  <li>Perfect for modern interiors</li>
                  <li>Easy to install</li>
                  <li>Available in multiple sizes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {product.glbModel && !show3DError && (
          <div className="mt-12 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Interactive 3D View</h2>
              <ErrorBoundary onError={handle3DError}>
                <Suspense fallback={<div className="w-full h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">Loading 3D model...</div>}>
                  <Model3DViewer modelPath={product.glbModel} />
                </Suspense>
              </ErrorBoundary>
            </div>
          </div>
        )}

        {product.glbModel && !show3DError && (
          <div id="view-in-ar" className="mt-12 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">View in Your Space</h2>
              <ErrorBoundary onError={handle3DError}>
                <Suspense fallback={<div className="w-full h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">Loading AR viewer...</div>}>
                  <ARViewer modelUrl={product.glbModel} productName={product.name} />
                </Suspense>
              </ErrorBoundary>
            </div>
          </div>
        )}

        {/* Product Recommendations */}
        <ProductRecommendations
          currentProductId={product.id}
          currentCategory={product.category}
        />
      </div>
    </div>
  );
}

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; onError: () => void },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; onError: () => void }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error('3D/AR viewer error:', error);
    this.props.onError();
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
} 