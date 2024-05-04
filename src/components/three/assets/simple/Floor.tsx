'use client';

import { usePlane } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

interface FloorControlsProps {
    groundPosition: number;
    onGroundPositionChange: (value: number) => void;
    textureUrl: string;
    friction?: number;
    restitution?: number;
}

const FloorControls: React.FC<FloorControlsProps> = ({
    groundPosition,
    onGroundPositionChange,
    textureUrl,
    friction = 0.5,
    restitution = 0.3,
}) => {
    const [groundBody, groundApi] = usePlane(() => ({
        position: [0, groundPosition, 0],
        rotation: [-Math.PI / 2, 0, 0],
        material: {
            friction,
            restitution,
        },
    }));

    const texture = useLoader(TextureLoader, textureUrl);

    const updateGroundPosition = (newPosition: number) => {
        groundApi.position.set(0, newPosition, 0);
        onGroundPositionChange(newPosition);
    };

    return (
        <mesh >
            <planeGeometry args={[100, 100]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    );
};

export default FloorControls;