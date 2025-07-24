// src/app/ascii/scene.tsx
import * as React from 'react';
import * as THREE from 'three';
import { AsciiEffect } from 'three/addons/effects/AsciiEffect';
import { TrackballControls } from 'three/addons/controls/TrackballControls';
import loadModel from './ModelLoader';

const Scene: React.FC = () => {
  const [model, setModel] = React.useState<THREE.Object3D | null>(null);

  React.useEffect(() => {
    const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
    const scene: THREE.Scene = new THREE.Scene();
    const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();
    const effect: AsciiEffect = new AsciiEffect(renderer, ' .:-+*=%@#', { invert: true });

    const controls: TrackballControls = new TrackballControls(camera, effect.domElement);

    const start: number = Date.now();

    const init = async () => {
      camera.position.y = 150;
      camera.position.z = 500;
      scene.background = new THREE.Color(0, 0, 0);

      const pointLight1: THREE.PointLight = new THREE.PointLight(0xffffff, 3, 0, 0);
      pointLight1.position.set(500, 500, 500);
      scene.add(pointLight1);

      const pointLight2: THREE.PointLight = new THREE.PointLight(0xffffff, 1, 0, 0);
      pointLight2.position.set(-500, -500, -500);
      scene.add(pointLight2);

      const loadedModel = await loadModel('/coin.glb');
      scene.add(loadedModel);
      setModel(loadedModel);

      renderer.setSize(window.innerWidth, window.innerHeight);

      effect.setSize(window.innerWidth, window.innerHeight);
      effect.domElement.style.color = 'white';
      effect.domElement.style.backgroundColor = 'black';

      document.body.appendChild(effect.domElement);

      window.addEventListener('resize', onWindowResize);
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
      effect.setSize(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      render();
    };

    const render = () => {
      const timer: number = Date.now() - start;

      if (model) {
        model.rotation.x = timer * 0.0003;
        model.rotation.z = timer * 0.0002;
      }

      controls.update();

      effect.render(scene, camera);
    };

    init();
    animate();

    return () => {
      // Clean up the scene and event listeners
      scene.remove(model);
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return null;
};

export default Scene;