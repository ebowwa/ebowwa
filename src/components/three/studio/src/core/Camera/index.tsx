// src/components/three/studio/src/core/Camera/index.tsx
import { useFrame, useThree } from '@react-three/fiber';

export interface CameraConfig {
    fov: number;
    near: number;
    far: number;
    cameraPosition: {
        x: number;
        y: number;
        z: number;
    };
    targetPosition: {
        x: number;
        y: number;
        z: number;
    };
}

export const ThreeJSCamera: React.FC<CameraConfig> = ({
    fov,
    near,
    far,
    cameraPosition,
    targetPosition,
}) => {
    const { camera } = useThree();

    useFrame(() => {
        camera.position.set(
            cameraPosition.x,
            cameraPosition.y,
            cameraPosition.z
        );
        camera.lookAt(
            targetPosition.x,
            targetPosition.y,
            targetPosition.z
        );
    });

    return null;
};