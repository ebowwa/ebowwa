// app/page.tsx
"use client"
import * as React from 'react';
import * as THREE from 'three';
import { AsciiEffect } from 'three/addons/effects/AsciiEffect';
import { TrackballControls } from 'three/addons/controls/TrackballControls';

let camera: THREE.PerspectiveCamera;
let controls: TrackballControls;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let effect: AsciiEffect;

let sphere: THREE.Mesh;
let plane: THREE.Mesh;

const start = Date.now();

const init = () => {
  if (typeof window !== 'undefined') {
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.y = 150;
    camera.position.z = 500;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0, 0, 0);

    const pointLight1 = new THREE.PointLight(0xffffff, 3, 0, 0);
    pointLight1.position.set(500, 500, 500);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 1, 0, 0);
    pointLight2.position.set(-500, -500, -500);
    scene.add(pointLight2);

    sphere = new THREE.Mesh(new THREE.SphereGeometry(200, 20, 10), new THREE.MeshPhongMaterial({ flatShading: true }));
    scene.add(sphere);

    plane = new THREE.Mesh(new THREE.PlaneGeometry(400, 400), new THREE.MeshBasicMaterial({ color: 0xe0e0e0 }));
    plane.position.y = -200;
    plane.rotation.x = -Math.PI / 2;
    scene.add(plane);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    effect = new AsciiEffect(renderer, ' .:-+*=%@#', { invert: true });
    effect.setSize(window.innerWidth, window.innerHeight);
    effect.domElement.style.color = 'white';
    effect.domElement.style.backgroundColor = 'black';

    controls = new TrackballControls(camera, effect.domElement);

    window.addEventListener('resize', onWindowResize);
  }
};

const onWindowResize = () => {
  if (typeof window !== 'undefined') {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    effect.setSize(window.innerWidth, window.innerHeight);
  }
};

const animate = () => {
  requestAnimationFrame(animate);
  render();
};

const render = () => {
  const timer = Date.now() - start;

  sphere.position.y = Math.abs(Math.sin(timer * 0.002)) * 150;
  sphere.rotation.x = timer * 0.0003;
  sphere.rotation.z = timer * 0.0002;

  controls.update();

  effect.render(scene, camera);
};

export default function Page() {
  const [effectDomElement, setEffectDomElement] = React.useState<HTMLDivElement | null>(null);

  React.useEffect(() => {
    init();
    animate();

    return () => {
      // Clean up the scene and event listeners
      scene.remove(sphere);
      scene.remove(plane);
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', onWindowResize);
      }
    };
  }, []);

  React.useEffect(() => {
    if (effectDomElement && effect?.domElement) {
      effectDomElement.appendChild(effect.domElement);
    }
  }, [effectDomElement, effect?.domElement]);

  return (
    <div>
      <div id="info">
        <a href="https://threejs.org" target="_blank" rel="noopener">
          three.js
        </a>{' '}
        - effects - ascii
      </div>
      <div ref={(el) => setEffectDomElement(el)} />
    </div>
  );
}
