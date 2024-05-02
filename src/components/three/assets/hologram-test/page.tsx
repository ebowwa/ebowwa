"use client"
import * as React from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Model } from '@/components/three/assets/spaceguy/model';
import { OrbitControls } from '@react-three/drei';
import { Player } from '@/components/three/assets/mario/Player'; // Import the Player component

const SceneContent: React.FC = () => {
    const { camera, gl } = useThree();

    useFrame((state) => {
        camera.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 10;
        camera.position.z = Math.cos(state.clock.elapsedTime * 0.5) * 10;
        camera.lookAt(0, 0, 0);
    });

    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Model>
                {/* Render the Player component as a child of the Model component */}
                <Player animation="run" rotation="right" />
            </Model>
            <OrbitControls />
        </>
    );
};

const Page: React.FC = () => {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Canvas
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 1000,
                    position: [0, 0, 20],
                }}
                gl={{
                    antialias: true,
                }}
            >
                <SceneContent />
            </Canvas>
        </div>
    );
};

export default Page;