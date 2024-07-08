"use client"
import React, { useState } from 'react';
import { Player } from '@/components/three/assets/mario/Player';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';

const Page = () => {
    const [animation, setAnimation] = useState<string>('idle');
    const [rotation, setRotation] = useState<'left' | 'right'>('right');

    const handleAnimationChange = (newAnimation: string) => {
        setAnimation(newAnimation);
    };

    const handleRotationChange = () => {
        setRotation(rotation === 'left' ? 'right' : 'left');
    };

    return (
        <div>
            <Canvas>
                <Physics>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <Player animation={animation} rotation={rotation} />
                    <mesh
                        position={[0, -1, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        receiveShadow
                    >
                        <planeGeometry args={[1000, 1000]} />
                        <meshStandardMaterial color="#808080" opacity={0.5} transparent />
                    </mesh>
                </Physics>
            </Canvas>
            <div>
                <button onClick={() => handleAnimationChange('idle')}>Idle</button>
                <button onClick={() => handleAnimationChange('walk')}>Walk</button>
                <button onClick={() => handleAnimationChange('run')}>Run</button>
                <button onClick={handleRotationChange}>
                    Rotate {rotation === 'left' ? 'Right' : 'Left'}
                </button>
            </div>
        </div>
    );
};

export default Page;