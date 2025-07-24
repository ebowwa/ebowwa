import { useEffect, useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useThree } from '@react-three/fiber';

export interface ThreeJSControlsConfig {
    maxTilt: number;
    maxPan: number;
    domElement: HTMLElement;
}

export const ThreeJSControls: React.FC<ThreeJSControlsConfig> = ({
    maxTilt,
    maxPan,
    domElement,
}) => {
    const { camera, gl } = useThree();
    const controlsRef = useRef<OrbitControls | null>(null);

    useEffect(() => {
        // Create a new OrbitControls instance and associate it with the camera and DOM element
        controlsRef.current = new OrbitControls(camera, domElement);

        // Set the maximum tilt and pan angles for the controls
        controlsRef.current.maxPolarAngle = maxTilt;
        controlsRef.current.maxAzimuthAngle = maxPan;

        // Set the target of the controls to the origin (0, 0, 0)
        controlsRef.current.target.set(0, 0, 0);

        // Update the controls to ensure they are in the correct state
        controlsRef.current.update();

        // Clean up the controls when the component is unmounted
        return () => {
            if (controlsRef.current) {
                controlsRef.current.dispose();
            }
        };
    }, [camera, domElement, maxTilt, maxPan, gl]);

    useEffect(() => {
        // Update the controls on each frame
        const animate = () => {
            requestAnimationFrame(animate);
            if (controlsRef.current) {
                controlsRef.current.update();
            }
        };
        animate();
    }, []);

    return null;
};