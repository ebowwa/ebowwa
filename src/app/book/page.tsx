"use client"
import { Canvas } from '@react-three/fiber';
import { Model } from '@/components/three/assets/A_book_of_poems';
import { Suspense, useState } from 'react';
import { OrbitControls } from '@react-three/drei';

const VariablesDisplay = ({ position, rotation }) => {
  return (
    <div style={{
      position: 'absolute',
      top: '20px',
      left: '20px',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: 'white',
      padding: '10px',
      fontSize: '14px',
      fontFamily: 'monospace',
    }}>
      {position && (
        <p>Position: ({position.x?.toFixed(2)}, {position.y?.toFixed(2)}, {position.z?.toFixed(2)})</p>
      )}
      {rotation && (
        <p>Rotation: ({rotation.x?.toFixed(2)}, {rotation.y?.toFixed(2)}, {rotation.z?.toFixed(2)})</p>
      )}
    </div>
  );
};

export default function Home() {
  const [position, setPosition] = useState([0, 0, 0]);
  const [rotation, setRotation] = useState([0, 0, 0]);

  const handleCameraChange = (event) => {
    console.log('Camera:', event);
    const { target } = event;
    setPosition([target.target.x, target.target.y, target.target.z]);
    setRotation([target.rotation.x, target.rotation.y, target.rotation.z]);
  };

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Canvas>
        <Suspense fallback={null}>
          <Model position={[0, 0, 0]} />
          <OrbitControls onChange={handleCameraChange} />
        </Suspense>
      </Canvas>
      <VariablesDisplay position={position} rotation={rotation} />
    </div>
  );
}