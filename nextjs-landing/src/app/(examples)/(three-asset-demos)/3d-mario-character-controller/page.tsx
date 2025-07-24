"use client"
import React, { useState } from 'react';
import { Player } from '@/components/three/assets/mario/Player';
import { Canvas } from '@react-three/fiber';

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
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Player animation={animation} rotation={rotation} />
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