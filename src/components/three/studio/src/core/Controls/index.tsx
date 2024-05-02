// src/components/studio/src/core/Controls/index.ts
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { PerspectiveCamera } from 'three';

export interface ThreeJSControlsConfig {
    maxTilt: number;
    maxPan: number;
    domElement: HTMLElement;
}

export class ThreeJSControls {
    public controls: OrbitControls | null;

    constructor(config: ThreeJSControlsConfig) {
        this.controls = null;
        this.setupControls(config);
    }

    private setupControls(config: ThreeJSControlsConfig): void {
        // Check if config.domElement is defined
        if (config.domElement) {
            // Create a new OrbitControls instance and associate it with the camera and DOM element
            this.controls = new OrbitControls(new PerspectiveCamera(), config.domElement);

            // Set the maximum tilt and pan angles for the controls
            this.controls.maxPolarAngle = config.maxTilt;
            this.controls.maxAzimuthAngle = config.maxPan;

            // Set the target of the controls to the origin (0, 0, 0)
            this.controls.target.set(0, 0, 0);

            // Update the controls to ensure they are in the correct state
            this.controls.update();
        } else {
            // Handle the case where config.domElement is undefined
            console.error('config.domElement is undefined');
        }
    }

    public update(): void {
        // If the controls have been set up, update them
        if (this.controls) {
            this.controls.update();
        }
    }

    public dispose(): void {
        // If the controls have been set up, dispose of them
        if (this.controls) {
            this.controls.dispose();
        }
    }
}