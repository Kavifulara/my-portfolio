'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import Model3DViewer from '@/components/Model3DViewer';

export default function ProductPage() {
  const params = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'image' | '3d'>('image');

  // Mock product data - in a real app, this would come from your API
  const product = {
    id: params.id as string,
    name: 'Abstract Wall Art',
    price: 199.99,
    description: 'Beautiful abstract wall art perfect for modern homes.',
    image: '/images/sample-product.jpg',
    modelPath: '/models/abstract-art.glb',
    supportsAR: true,
  };

  const handleAddToCart = () => {
    addToCart({
      id: Number(product.id),
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0 md:w-1/2">
              <div className="flex border-b border-gray-200">
                <button
                  className={`px-4 py-2 text-sm font-medium ${
                    activeTab === 'image'
                      ? 'text-secondary border-b-2 border-secondary'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab('image')}
                >
                  Product Image
                </button>
                <button
                  className={`px-4 py-2 text-sm font-medium ${
                    activeTab === '3d'
                      ? 'text-secondary border-b-2 border-secondary'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab('3d')}
                >
                  3D View
                </button>
              </div>
              <div className="h-96 md:h-full">
                {activeTab === 'image' ? (
                  <img
                    className="h-full w-full object-cover"
                    src={product.image}
                    alt={product.name}
                  />
                ) : (
                  <Model3DViewer modelPath={product.modelPath} />
                )}
              </div>
            </div>
            <div className="p-8 md:w-1/2">
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

                {product.supportsAR && (
                  <Link
                    href={`/ar-view/${product.id}`}
                    className="block w-full text-center bg-white border-2 border-secondary text-secondary px-6 py-3 rounded-lg hover:bg-secondary hover:text-white transition-colors"
                  >
                    View in Your Space (AR)
                  </Link>
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
      </div>
    </div>
  );
} 