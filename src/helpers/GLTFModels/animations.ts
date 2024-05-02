import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

/**
 * Represents a GLTF model with its animations.
 */
export interface GLTFModelWithAnimations {
    model: THREE.Object3D;
    animations: THREE.AnimationClip[];
}

/**
 * Manages the animations of a GLTF model.
 */
export class GLTFAnimationManager {
    private _model: THREE.Object3D;
    private animations: THREE.AnimationClip[];
    private mixer: THREE.AnimationMixer;
    private actions: Map<string, THREE.AnimationAction> = new Map();

    constructor(gltfModel: GLTFModelWithAnimations) {
        this._model = gltfModel.model;
        this.animations = gltfModel.animations;
        this.mixer = new THREE.AnimationMixer(this._model);
        this.setupAnimations();
    }

    get model(): THREE.Object3D {
        return this._model;
    }

    /**
     * Plays an animation.
     * @param animationName - The name of the animation to play.
     * @param loop - Whether the animation should loop.
     * @param speed - The playback speed of the animation.
     */
    playAnimation(animationName: string, loop: boolean = true, speed: number = 1): void {
        const action = this.actions.get(animationName);
        if (action) {
            action.loop = loop ? THREE.LoopRepeat : THREE.LoopOnce;
            action.play();
            action.setEffectiveTimeScale(speed);
        }
    }

    /**
     * Stops an animation.
     * @param animationName - The name of the animation to stop.
     */
    stopAnimation(animationName: string): void {
        const action = this.actions.get(animationName);
        if (action) {
            action.stop();
        }
    }

    /**
     * Blends between two animations.
     * @param fromAnimationName - The name of the animation to blend from.
     * @param toAnimationName - The name of the animation to blend to.
     * @param duration - The duration of the blend in seconds.
     */
    blendAnimations(fromAnimationName: string, toAnimationName: string, duration: number): void {
        const fromAction = this.actions.get(fromAnimationName);
        const toAction = this.actions.get(toAnimationName);
        if (fromAction && toAction) {
            fromAction.crossFadeTo(toAction, duration, true);
        }
    }

    /**
     * Updates the animation mixer.
     * @param delta - The time delta since the last update.
     */
    update(delta: number): void {
        this.mixer.update(delta);
    }

    private setupAnimations(): void {
        this.animations.forEach((animation) => {
            const action = this.mixer.clipAction(animation);
            this.actions.set(animation.name, action);
        });
    }
}

/**
 * Loads a GLTF model and its animations.
 * @param url - The URL of the GLTF model.
 * @returns The GLTF animation manager.
 */
export async function loadGLTFModelWithAnimations(url: string): Promise<GLTFAnimationManager> {
    const loader = new GLTFLoader();
    const gltf = await loader.loadAsync(url);
    return new GLTFAnimationManager({ model: gltf.scene, animations: gltf.animations });
}