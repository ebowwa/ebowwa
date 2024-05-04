import { Object3D } from 'three';

/**
 * Animates an object with unpredictable time jumps.
 * @param object - The Three.js object to animate.
 * @param duration - The duration of the animation in seconds.
 */
export function timeWarpAnimation(object: Object3D, duration: number): void {
    let elapsedTime = 0;

    const update = (): void => {
        elapsedTime += Math.random() * 0.2; // Random time jump
        if (elapsedTime > duration) elapsedTime = 0;

        object.rotation.y = elapsedTime * Math.PI;
        requestAnimationFrame(update);
    };

    update();
}