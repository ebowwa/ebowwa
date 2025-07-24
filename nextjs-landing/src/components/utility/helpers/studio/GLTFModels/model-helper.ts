// src/helpers/GLTFModels/model-helper.ts
import * as THREE from 'three';
import { Point3D, Angles3D } from '@/components/utility/helpers/studio/shape-rotations/types';
import { GLTFAnimationManager, loadGLTFModelWithAnimations } from './animations';
import { ObjectTransform, ViewingPerspective } from '@/components/utility/helpers/studio/scene/scene-utils'
export async function loadAndSetupModel(
    url: string,
    position: Point3D,
    rotation: Angles3D
): Promise<GLTFAnimationManager> {
    const animationManager = await loadGLTFModelWithAnimations(url);
    setupModelPosition(animationManager.model, position, rotation);
    return animationManager;
}

export function setupModelPosition(
    model: THREE.Object3D,
    position: Point3D,
    rotation: Angles3D
): void {
    model.position.set(position.x, position.y, position.z);
    model.rotation.set(rotation.x, rotation.y, rotation.z);
}

export function setupModelVisibility(
    model: THREE.Object3D,
    visible: boolean,
    castShadow: boolean,
    receiveShadow: boolean
): void {
    model.visible = visible;
    model.castShadow = castShadow;
    model.receiveShadow = receiveShadow;
}

export function addClickHandler(
    model: THREE.Object3D,
    onClick: () => void
): void {
    model.userData.onClick = onClick;
}

export function animateModel(
    model: THREE.Object3D,
    animation: ObjectTransform
): void {
    gsap.to(model.position, animation.location);
    gsap.to(model.scale, animation.scale);
    gsap.to(model.rotation, animation.rotation);
}

export function setupViewingPerspective(
    camera: THREE.Camera,
    viewingPerspective: ViewingPerspective
): void {
    camera.projectionMatrix.fromArray(viewingPerspective.projection.flat());
    camera.position.copy(new THREE.Vector3(
        viewingPerspective.location.x,
        viewingPerspective.location.y,
        viewingPerspective.location.z
    ));
    camera.rotation.set(
        viewingPerspective.rotation.x,
        viewingPerspective.rotation.y,
        viewingPerspective.rotation.z
    );
}


export interface ModelConfig {
    url: string;
    position: Point3D;
    rotation: Angles3D;
    visible: boolean;
    castShadow: boolean;
    receiveShadow: boolean;
    animation?: Partial<ObjectTransform>;
    clickHandler?: () => void;
}

export function ModelConfigFromJSON(config: Record<string, any>): { [key: string]: ModelConfig } {
    const modelConfig: { [key: string]: ModelConfig } = {};

    for (const [key, value] of Object.entries(config)) {
        modelConfig[key] = {
            url: value.url,
            position: {
                x: value.position.x,
                y: value.position.y,
                z: value.position.z
            },
            rotation: {
                x: value.rotation.x,
                y: value.rotation.y,
                z: value.rotation.z
            },
            visible: value.visible,
            castShadow: value.castShadow,
            receiveShadow: value.receiveShadow,
            animation: value.animation ? {
                location: {
                    x: value.animation.x ?? 0,
                    y: value.animation.y ?? 0,
                    z: value.animation.z ?? 0
                },
                scale: {
                    x: value.animation.scaleX ?? 1,
                    y: value.animation.scaleY ?? 1,
                    z: value.animation.scaleZ ?? 1
                },
                rotation: {
                    x: value.animation.rotationX ?? 0,
                    y: value.animation.rotationY ?? 0,
                    z: value.animation.rotationZ ?? 0
                }
            } : undefined,
            clickHandler: value.redirectUrl ? () => { window.location.href = value.redirectUrl; } : undefined
        };
    }

    return modelConfig;
}