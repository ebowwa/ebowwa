// app/page.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { VoxelGrid, CellularAutomaton } from '@/components/utility/helpers/studio/math/discrete-3d-helper';

const Home: React.FC = () => {
    const [scene, setScene] = useState<THREE.Scene | null>(null);
    const [camera, setCamera] = useState<THREE.Camera | null>(null);
    const [renderer, setRenderer] = useState<THREE.Renderer | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Set up the Three.js scene, camera, and renderer
        const newScene = new THREE.Scene();
        const newCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        newCamera.position.z = 20;
        const newRenderer = new THREE.WebGLRenderer();
        newRenderer.setSize(window.innerWidth, window.innerHeight);

        setScene(newScene);
        setCamera(newCamera);
        setRenderer(newRenderer);

        // Create a 3D voxel grid and generate a mesh
        const voxelGrid = new VoxelGrid(10, 10, 10);
        voxelGrid.set(5, 5, 5, true);
        voxelGrid.set(6, 6, 6, true);
        const voxelMesh = voxelGrid.toMesh(newScene);
        newScene.add(voxelMesh);

        // Create a 3D cellular automaton and simulate it
        const cellularAutomaton = new CellularAutomaton(20, 20, 20, (neighbors) => neighbors === 6);
        const animate = () => {
            requestAnimationFrame(animate);
            cellularAutomaton.step(newScene);
            if (renderer) renderer.render(newScene, newCamera);
        };
        animate();

        // Append the renderer's canvas to the container
        if (containerRef.current && renderer) {
            containerRef.current.appendChild(renderer.domElement);
        }

        return () => {
            // Clean up the Three.js scene
            newScene.traverse((object) => {
                if (object instanceof THREE.Mesh) {
                    object.geometry.dispose();
                    object.material.dispose();
                }
            });
        };
    }, []);

    return (
        <div ref={containerRef}>
            {/* No need for the conditional rendering here */}
        </div>
    );
};

export default Home;