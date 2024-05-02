// src/store/useHomePageStore.ts
import create from 'zustand';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useEffect, useState } from 'react';

// This code runs on both the server and the client
type ThreeJSPageState = {
    scene: THREE.Scene;
    renderer: THREE.WebGLRenderer;
    camera: THREE.PerspectiveCamera;
    light: THREE.PointLight;
    controls: OrbitControls | null;
    modelGroup: THREE.Group | null;
};

type ThreeJSPageStore = ThreeJSPageState & {
    setControls: (controls: OrbitControls) => void;
    setModelGroup: (modelGroup: THREE.Group) => void;
};

const useStore = create<ThreeJSPageStore>((set) => ({
    // This code runs on both the server and the client
    scene: new THREE.Scene(),
    renderer: new THREE.WebGLRenderer(),
    camera: new THREE.PerspectiveCamera(
        70,
        typeof window !== 'undefined' ? window.innerWidth / window.innerHeight : 1,
        1,
        1000
    ),
    light: new THREE.PointLight(),
    controls: null,
    modelGroup: null,
    setControls: (controls) => set({ controls }),
    setModelGroup: (modelGroup) => set({ modelGroup }),
}));

// This code runs on the client
export default function useHomePageStore() {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    return isBrowser ? useStore : null;
}