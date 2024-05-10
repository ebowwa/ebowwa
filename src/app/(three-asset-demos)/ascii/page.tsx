// app/page.tsx
"use client"
import * as React from 'react';
import * as THREE from 'three';
import { AsciiEffect } from 'three/addons/effects/AsciiEffect';
import { TrackballControls } from 'three/addons/controls/TrackballControls';

const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
const scene: THREE.Scene = new THREE.Scene();
const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();
const effect: AsciiEffect = new AsciiEffect(renderer, ' .:-+*=%@#', { invert: true });

const controls: TrackballControls = new TrackballControls(camera, effect.domElement);

const sphere: THREE.Mesh = new THREE.Mesh(new THREE.SphereGeometry(200, 20, 10), new THREE.MeshPhongMaterial({ flatShading: true }));
const plane: THREE.Mesh = new THREE.Mesh(new THREE.PlaneGeometry(400, 400), new THREE.MeshBasicMaterial({ color: 0xe0e0e0 }));

const start: number = Date.now();

const init = () => {
  camera.position.y = 150;
  camera.position.z = 500;
  scene.background = new THREE.Color(0, 0, 0);

  const pointLight1: THREE.PointLight = new THREE.PointLight(0xffffff, 3, 0, 0);
  pointLight1.position.set(500, 500, 500);
  scene.add(pointLight1);

  const pointLight2: THREE.PointLight = new THREE.PointLight(0xffffff, 1, 0, 0);
  pointLight2.position.set(-500, -500, -500);
  scene.add(pointLight2);

  scene.add(sphere);

  plane.position.y = -200;
  plane.rotation.x = -Math.PI / 2;
  scene.add(plane);

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

  sphere.position.y = Math.abs(Math.sin(timer * 0.002)) * 150;
  sphere.rotation.x = timer * 0.0003;
  sphere.rotation.z = timer * 0.0002;

  controls.update();

  effect.render(scene, camera);
};

export default function Page() {
  React.useEffect(() => {
    init();
    animate();

    return () => {
      // Clean up the scene and event listeners
      scene.remove(sphere);
      scene.remove(plane);
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return (
    <div>
      <div id="info">
        <a href="https://threejs.org" target="_blank" rel="noopener">
          three.js
        </a>{' '}
        - effects - ascii
      </div>
    </div>
  );
}