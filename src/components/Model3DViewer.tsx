'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

interface Model3DViewerProps {
  modelPath: string;
}

export default function Model3DViewer({ modelPath }: Model3DViewerProps) {
  return (
    <div className="w-full h-[400px] bg-gray-100 rounded-lg">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Model url={modelPath} />
        </Suspense>
        <OrbitControls enableZoom={true} autoRotate={true} />
      </Canvas>
    </div>
  );
} 