// src/components/canvas/ModelComponent.tsx
import { FC, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useMemo, useRef, useState } from 'react';
import { Line, useCursor, MeshDistortMaterial, meshBounds } from '@react-three/drei';

interface ModelComponentProps {
    modelPath: string;
    onClickRoute?: string;
    onHover?: (isHovered: boolean) => void;
    [key: string]: any;
}

const ModelComponent: FC<ModelComponentProps> = ({
    modelPath,
    onClickRoute,
    onHover,
    ...props
}) => {
    const router = useRouter();
    const { scene } = useGLTF(modelPath);
    const [hovered, setHovered] = useState(false);

    useCursor(hovered);

    useFrame((state, delta) => {
        if (scene.rotation) {
            scene.rotation.y += delta;
        }
    });

    const handleClick = () => {
        if (onClickRoute) {
            router.push(onClickRoute);
        }
    };

    const handlePointerOver = () => {
        setHovered(true);
        if (onHover) {
            onHover(true);
        }
    };

    const handlePointerOut = () => {
        setHovered(false);
        if (onHover) {
            onHover(false);
        }
    };

    return (
        <primitive
            object={scene}
            onClick={handleClick}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
            {...props}
        />
    );
};

export default ModelComponent;