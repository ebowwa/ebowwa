write a higher level script to wrap these two together, be sure the script you write doesnt manage state nor does it directly handle importing data an even higher level will handle the state, props, and data

```
// src/components/studio/Controls.ts
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { ThreeJSScene } from '../scene';

export interface ThreeJSControlsConfig {
    maxTilt: number;
    maxPan: number;
    domElement: HTMLElement;
}

export class ThreeJSControls {
    private controls: OrbitControls | null;

    constructor(threeJSScene: ThreeJSScene, threeJSControlsConfig: ThreeJSControlsConfig) {
        this.controls = null;
        this.setupControls(threeJSScene, threeJSControlsConfig);
    }

    private setupControls(threeJSScene: ThreeJSScene, threeJSControlsConfig: ThreeJSControlsConfig) {
        this.controls = new OrbitControls(threeJSScene.camera, threeJSControlsConfig.domElement);
        this.controls.maxPolarAngle = threeJSControlsConfig.maxTilt;
        this.controls.maxAzimuthAngle = threeJSControlsConfig.maxPan;
        this.controls.target.set(0, 0, 0);
        this.controls.update();
    }
}
```


```
// src/components/studio/Camera.ts
import { PerspectiveCamera } from 'three';

export interface CameraConfig {
    fov: number;
    near: number;
    far: number;
    cameraPosition: {
        x: number;
        y: number;
        z: number;
    };
}

export class ThreeJSCamera {
    public camera: PerspectiveCamera;

    constructor(width: number, height: number, cameraConfig: CameraConfig) {
        this.camera = new PerspectiveCamera(
            cameraConfig.fov,
            width / height,
            cameraConfig.near,
            cameraConfig.far
        );
        this.camera.position.set(
            cameraConfig.cameraPosition.x,
            cameraConfig.cameraPosition.y,
            cameraConfig.cameraPosition.z
        );
    }
}
```