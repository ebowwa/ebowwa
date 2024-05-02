export interface ThreeJSConfig {
    renderer: {
        width: number;
        height: number;
    };
    camera: {
        position: {
            z: number;
        };
    };
    controls: {
        maxPan: number;
        maxTilt: number;
    };
}

export interface ThreeJSDefaultState {
    camera: {
        fov: number;
        near: number;
        far: number;
    };
}

export interface ThreeJSLightingConfig {
    ambientLight: {
        color: number;
    };
    directionalLight: {
        color: number;
        intensity: number;
        position: {
            x: number;
            y: number;
            z: number;
        };
    };
}

export interface ThreeJSModelConfig {
    [key: string]: {
        url: string;
        position: {
            x: number;
            y: number;
            z: number;
        };
        rotation: {
            x: number;
            y: number;
            z: number;
        };
        visible: boolean;
        castShadow: boolean;
        receiveShadow: boolean;
        animation: {
            y: string;
            duration: number;
            repeat: number;
            ease: string;
        };
        redirectUrl?: string;
    };
}

export interface IndexConfig {
    threeJSConfig: string;
    threeJSLightingConfig: string;
    threeJSSceneConfig: string;
    threeJSDefaultState: string;
    threeJSModelConfig: string;
}