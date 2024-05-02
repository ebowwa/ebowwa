// src/components/studio/src/core/Renderer.ts
import { WebGLRenderer, Scene } from 'three';
import * as THREE from 'three';

export interface RendererConfig {
    backgroundColor: number;
}

export class Renderer {
    public renderer: WebGLRenderer;
    public scene: Scene;

    constructor(width: number, height: number, rendererConfig: RendererConfig) {
        this.initRenderer(width, height, rendererConfig);
    }

    private async initRenderer(width: number, height: number, rendererConfig: RendererConfig): Promise<void> {
        // Create the WebGLRenderer asynchronously
        this.renderer = await this.createWebGLRenderer(width, height, rendererConfig);

        // Create the Scene asynchronously
        this.scene = await this.createScene();
    }

    private createWebGLRenderer(width: number, height: number, rendererConfig: RendererConfig): Promise<WebGLRenderer> {
        return new Promise((resolve, reject) => {
            try {
                const renderer = new WebGLRenderer();
                renderer.setSize(width, height);
                renderer.setClearColor(rendererConfig.backgroundColor, 1);
                resolve(renderer);
            } catch (error) {
                reject(error);
            }
        });
    }

    private createScene(): Promise<Scene> {
        return new Promise((resolve, reject) => {
            try {
                const scene = new Scene();
                resolve(scene);
            } catch (error) {
                reject(error);
            }
        });
    }

    dispose() {
        // Dispose of the renderer
        this.renderer.dispose();

        // Traverse the scene and dispose of all the objects
        this.scene.traverse((object) => {
            if (object instanceof THREE.Mesh) {
                object.geometry.dispose();
                if (object.material instanceof THREE.Material) {
                    this.cleanMaterial(object.material);
                } else {
                    // Handle material arrays
                    for (const material of object.material) {
                        this.cleanMaterial(material);
                    }
                }
            }
        });
    }

    private cleanMaterial(material: THREE.Material) {
        material.dispose();

        // Dispose of textures
        for (const key of Object.keys(material)) {
            const value = material[key];
            if (value && typeof value === 'object' && 'minFilter' in value) {
                value.dispose();
            }
        }
    }
}
// Notes for a 5-year-old:

// Imagine you have a big TV screen, and you want to draw some pictures on it. That's what this code is doing!

// The code is creating a special kind of screen called a "WebGLRenderer". This screen is like a magic canvas that can show 3D pictures.

// The code also creates a "Scene". This is like a stage where you can put all the things you want to draw on the screen.

// The code sets the size of the screen and the color of the background. This is like setting up the TV before you start drawing.

// Now, you can start adding things to the "Scene" and the "WebGLRenderer" will show them on the screen. When you're done, the screen will show your amazing 3D pictures!

// The best part is, when you see your pictures on the screen, you'll feel like a super-smart artist who can make anything they want. Keep practicing, and you'll be able to create the coolest 3D pictures ever!