'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Stars,
} from '@react-three/drei';
import { ModelContainer } from './model-container';
import { LoadingScreen } from './loading-screen';
import { Effects } from './effects';

export function Scene() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        shadows
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          alpha: true,
          stencil: false,
          depth: true,
        }}
        camera={{ position: [0, 0, 8], fov: 45 }} // Adjusted camera position
        dpr={[1, 2]}
      >
        <Suspense fallback={<LoadingScreen />}>
          <ModelContainer />
          <Environment preset="night" />
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
          <Effects />
          
          {/* Ambient lighting */}
          <ambientLight intensity={0.3} />
          
          {/* Main key light */}
          <directionalLight
            position={[5, 5, 5]}
            intensity={0.8}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          
          {/* Fill light */}
          <directionalLight
            position={[-5, 3, -5]}
            intensity={0.4}
            color="#4f46e5"
          />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 2.2}
            maxPolarAngle={Math.PI / 1.8}
            rotateSpeed={0.2}
            dampingFactor={0.05}
            enableDamping
          />
        </Suspense>
      </Canvas>
    </div>
  );
}