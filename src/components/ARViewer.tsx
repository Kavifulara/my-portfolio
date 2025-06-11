'use client';

import { useEffect, useRef, useState } from 'react';

interface ARViewerProps {
  modelUrl: string;
  productName: string;
}

export default function ARViewer({ modelUrl, productName }: ARViewerProps) {
  const [isARSupported, setIsARSupported] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if WebXR is supported with AR
    if ('xr' in navigator) {
      (navigator as any).xr?.isSessionSupported('immersive-ar')
        .then((supported: boolean) => {
          setIsARSupported(supported);
        });
    }
  }, []);

  const startARSession = async () => {
    setIsLoading(true);
    try {
      const session = await (navigator as any).xr?.requestSession('immersive-ar', {
        requiredFeatures: ['hit-test', 'dom-overlay'],
        domOverlay: { root: containerRef.current! }
      });

      // Here we would initialize the AR scene with Three.js
      // For now, we'll just show a placeholder
      setIsLoading(false);
    } catch (error) {
      console.error('Error starting AR session:', error);
      setIsLoading(false);
    }
  };

  return (
    <div ref={containerRef} className="relative min-h-[300px] bg-gray-100 rounded-lg">
      {!isARSupported ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-600">
            AR is not supported on your device. Please use a compatible mobile device.
          </p>
        </div>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          <h3 className="text-xl font-medium mb-4">{productName}</h3>
          <button
            onClick={startARSession}
            disabled={isLoading}
            className="bg-secondary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            {isLoading ? 'Loading AR...' : 'View in Your Space'}
          </button>
          <p className="mt-4 text-sm text-gray-600 text-center">
            Point your camera at a flat surface to place the item
          </p>
        </div>
      )}
    </div>
  );
} 