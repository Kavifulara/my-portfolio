'use client';

import { useParams } from 'next/navigation';
import ARViewer from '@/components/ARViewer';
import Link from 'next/link';

// This would typically come from your API/database
const products = {
  'abstract-canvas-art': {
    name: 'Abstract Canvas Art',
    modelUrl: '/models/abstract-canvas.glb', // This would be your actual model file
  },
  'vintage-wall-print': {
    name: 'Vintage Wall Print',
    modelUrl: '/models/vintage-print.glb', // This would be your actual model file
  },
};

export default function ARViewPage() {
  const params = useParams();
  const productId = params.productId as string;
  const product = products[productId as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">This product doesn't support AR view.</p>
          <Link
            href="/shop"
            className="inline-block bg-secondary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href={`/product/${productId}`}
            className="text-secondary hover:text-primary"
          >
            ← Back to Product
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">
            AR View - {product.name}
          </h1>
          
          <ARViewer
            modelUrl={product.modelUrl}
            productName={product.name}
          />
          
          <div className="mt-8 text-center text-sm text-gray-600">
            <p>For the best experience:</p>
            <ul className="mt-2 space-y-1">
              <li>• Ensure good lighting in your room</li>
              <li>• Point your camera at a clear wall space</li>
              <li>• Move your device slowly when scanning</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 