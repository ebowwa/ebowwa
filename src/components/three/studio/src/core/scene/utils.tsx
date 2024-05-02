import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export function resize(
    camera: THREE.PerspectiveCamera,
    renderer: THREE.WebGLRenderer,
    width: number,
    height: number
) {
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}

export function update(
    controls: OrbitControls,
    renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera
) {
    controls.update();
    renderer.render(scene, camera);
}

export function dispose(
    renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera
) {
    renderer.dispose();
    scene.remove(camera);

    // Remove the renderer's DOM element from its parent
    if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
    }
}