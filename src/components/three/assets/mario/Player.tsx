// contains: character, controls, movement
// src/components/three/assets/mario/Player.tsx
import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Group } from 'three';
import CharacterRenderer from './Character';
import type { GLTFResult } from './PlayerTyped';


// Define the props interface for the Player component
interface PlayerProps {
    // The animation to play on the character, such as "run" or "walk"
    animation: string;
    // The rotation direction for the character, either "left" or "right"
    rotation: 'left' | 'right';
}

export function Player({ animation, rotation }: PlayerProps) {
    // Create a ref to hold the group of objects that make up the 3D character model
    const group = useRef<Group>(null);

    // Load the 3D model with typed nodes and materials
    const { nodes, materials, animations } = useGLTF<GLTFResult>(
        'https://cdn.jsdelivr.net/gh/ebowwar/threejs-assets@main/Player.glb'
    );

    // Use the useAnimations hook to extract the animation actions from the loaded model
    // The actions object contains the individual animation actions that can be played
    const { actions } = useAnimations(animations, group);

    // Create a ref to hold the time scale for the animations
    const timeScale = useRef<number>(5);

    // Use the useEffect hook to handle the animation of the character
    useEffect(() => {

        // If the animation is not "run" or "walk", set the time scale to 1
        // Otherwise, set the time scale to 5
        if (animation !== 'run' && animation !== 'walk') {
            timeScale.current = 1;
        } else {
            timeScale.current = 5;
        }

        // Get the animation action for the current animation
        // Reset the action, fade it in, and play it
        // Set the effective time scale for the action
        actions[animation]?.reset().fadeIn(0.2).play();
        actions[animation]?.setEffectiveTimeScale(timeScale.current);

        // When the component unmounts, fade out the current animation
        return () => {
            actions[animation]?.fadeOut(0.2);
        };
    }, [animation]);

    // Use the useGSAP hook to handle the rotation of the character
    useGSAP(() => {
        // If the rotation is "left", rotate the group to PI radians (180 degrees)
        // Otherwise, rotate the group back to 0 radians (0 degrees)
        if (rotation === 'left') {
            gsap.to(group.current?.rotation, {
                y: Math.PI,
                duration: 0.3,
                ease: 'expo.inOut',
            });
        } else {
            gsap.to(group.current?.rotation, {
                y: 0,
                duration: 0.3,
                ease: 'expo.inOut',
            });
        }
    }, [rotation]);

    // Render the character using a generic renderer
    return <CharacterRenderer nodes={nodes} materials={materials} groupRef={group} />;
}

useGLTF.preload('https://cdn.jsdelivr.net/gh/ebowwar/threejs-assets@main/Player.glb');