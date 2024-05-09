"use client";

import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Model } from './Coin';

const CoinScene = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked((prevState) => !prevState);
        window.location.href = '/models';
    };

    return (
        <Canvas>
            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} intensity={2} />
            <PerspectiveCamera position={[0, 0, 5]} />
            <Model
                position={[0, 0, 0]}
                scale={isClicked ? 2 : 1}
                onClick={handleClick}
            />
            <OrbitControls />
        </Canvas>
    );
};

export default CoinScene;