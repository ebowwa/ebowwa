"use client"
import React, { useState, useEffect, Suspense } from 'react';
import { Player } from '@/components/three/assets/mario/Player';
import { Canvas } from '@react-three/fiber';

const Page = () => {
    const [animation, setAnimation] = useState<string>('idle');
    const [rotation, setRotation] = useState<'left' | 'right'>('right');

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                setRotation('left');
                setAnimation(e.shiftKey ? 'run' : 'walk');
            } else if (e.key === 'ArrowRight') {
                setRotation('right');
                setAnimation(e.shiftKey ? 'run' : 'walk');
            }
        };

        const handleKeyUp = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                setAnimation('idle');
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    const handleAnimationChange = (newAnimation: string) => {
        setAnimation(newAnimation);
    };

    const handleRotationChange = () => {
        setRotation(rotation === 'left' ? 'right' : 'left');
    };

    return (
        <div>
            <Canvas>
                <Suspense fallback={<span>Loading...</span>}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <Player animation={animation} rotation={rotation} />
                </Suspense>
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