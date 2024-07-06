// src/components/three/assets/frame/index.tsx
"use client"
import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import tunnel from 'tunnel-rat';
import { ImagePlaneProps, GLTFResult, ContextType } from './types';
import DialogFrameComponent from './dialog';

const t = tunnel();

const PictureFrame: React.FC<{
  position?: THREE.Vector3;
  rotation?: THREE.Euler;
  scale?: THREE.Vector3;
  onClick: () => void;
}> = ({ position = new THREE.Vector3(), rotation = new THREE.Euler(), scale = new THREE.Vector3(1, 1, 1), onClick }) => {
  const { nodes, materials } = useGLTF('/models/glb/picture_frame.glb') as GLTFResult;
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.position.copy(position);
      groupRef.current.rotation.copy(rotation);
      groupRef.current.scale.copy(scale);
    }
  }, [position, rotation, scale]);

  return (
    <group ref={groupRef} dispose={null} onClick={(event) => {
      event.stopPropagation();
      onClick();
    }}>
      <group rotation={[-Math.PI / 2, 0, 35]}>
        <mesh
          geometry={nodes.defaultMaterial.geometry}
          material={materials.defaultMaterial}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/models/glb/picture_frame.glb');

const ImagePlane: React.FC<ImagePlaneProps> = ({
  imageSource,
  positionX = 0,
  positionY = 0,
  positionZ = 0,
  rotationAngle = 0,
  imageWidth = 1.7,
  imageHeight = 1,
  widthSegments = 10,
  heightSegments = 10,
}) => {
  const texture = useTexture(imageSource);
  const radians = (rotationAngle * Math.PI) / 180;
  return (
    <mesh position={[positionX, positionY, positionZ]} rotation={[0, 0.5, radians]}>
      <planeGeometry args={[imageWidth, imageHeight, widthSegments, heightSegments]} />
      <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
    </mesh>
  );
};

interface ImageDisplayComponentProps {
  imageSource: string;
  showImage: boolean;
  dialogTitle: string;
  dialogDescription: string;
}

const ImageDisplayComponent: React.FC<ImageDisplayComponentProps> = ({ imageSource, showImage, dialogTitle, dialogDescription }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleFrameClick = () => {
    setIsDialogOpen(true);
  };

  const Scene = () => {
    return (
      <>
        <ambientLight intensity={6.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
        <PictureFrame 
          position={new THREE.Vector3(0, 0, 0)} 
          rotation={new THREE.Euler(0, 0, 0)} 
          scale={new THREE.Vector3(1, 1, 1)} 
          onClick={handleFrameClick} 
        />
        {showImage && <ImagePlane imageSource={imageSource} positionZ={0.01} />}
        <OrbitControls
          enableDamping
          dampingFactor={0.25}
          rotateSpeed={0.5}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
          minDistance={2}
          maxDistance={10}
        />
        <Environment preset="city" />
      </>
    );
  };

  return (
    <div className="w-screen h-screen">
      <div style={{ width: '100vw', height: '100vh' }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Scene />
        </Canvas>
      </div>
      <div id="ui">
        <t.Out />
      </div>
      <DialogFrameComponent 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
        title={dialogTitle} 
        description={dialogDescription} 
      />
    </div>
  );
};

export default ImageDisplayComponent;