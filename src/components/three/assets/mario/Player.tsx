// contains: character, controls, movement
// src/components/three/assets/mario/Player.tsx
import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Group, SkinnedMesh} from 'three';
import { GLTFResult } from '../../studio/src/core/ModelLoader';


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

    // Use the useGLTF hook to load the 3D model from the '/Player.glb' file
    // The returned object contains the nodes, materials, and animations of the model
    // @ts-ignore
    const { nodes, materials, animations } = useGLTF('https://cdn.jsdelivr.net/gh/ebowwar/threejs-assets@main/Player.glb') as GLTFResult;

    // Use the useAnimations hook to extract the animation actions from the loaded model
    // The actions object contains the individual animation actions that can be played
    const { actions } = useAnimations(animations, group);

    // Create a ref to hold the time scale for the animations
    const timeScale = useRef<number>(5);

    // Use the useEffect hook to handle the animation of the character
    useEffect(() => {
        console.log(timeScale.current);

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

    // Render the 3D character model using the loaded nodes, materials, and animations
    return (
        <group ref={group} dispose={null}>
            <group name="Player" position={[0, -0.7, 0]}>
                <group name="Player_1">
                    <group name="Mario">
                        <group name="AllRoot">
                            <group name="JointRoot" position={[0, 0.611, -0.041]}>
                                {nodes.Hip && <primitive object={nodes.Hip} />}
                                {nodes.Spine1 && <primitive object={nodes.Spine1} />}
                            </group>
                        </group>
                        {nodes.Face00__MarioFaceMat00 && (
                            <skinnedMesh
                                name="Face00__MarioFaceMat00"
                                geometry={(nodes.Face00__MarioFaceMat00 as SkinnedMesh).geometry}
                                material={materials.MarioFaceMat00}
                                skeleton={(nodes.Face00__MarioFaceMat00 as SkinnedMesh).skeleton}
                            >
                                {nodes.Face00__MarioHigeMat00 && (
                                    <skinnedMesh
                                        name="Face00__MarioHigeMat00"
                                        geometry={(nodes.Face00__MarioHigeMat00 as SkinnedMesh).geometry}
                                        material={materials.MarioHigeMat00}
                                        skeleton={(nodes.Face00__MarioHigeMat00 as SkinnedMesh).skeleton}
                                    />
                                )}
                            </skinnedMesh>
                        )}
                        {nodes.Mario__MarioBodyMat00 && (
                            <skinnedMesh
                                name="Mario__MarioBodyMat00"
                                geometry={(nodes.Mario__MarioBodyMat00 as SkinnedMesh).geometry}
                                material={materials.MarioBodyMat00}
                                skeleton={(nodes.Mario__MarioBodyMat00 as SkinnedMesh).skeleton}
                            >
                                {nodes.Mario__MarioBodyMat01 && (
                                    <skinnedMesh
                                        name="Mario__MarioBodyMat01"
                                        geometry={(nodes.Mario__MarioBodyMat01 as SkinnedMesh).geometry}
                                        material={materials.MarioBodyMat01}
                                        skeleton={(nodes.Mario__MarioBodyMat01 as SkinnedMesh).skeleton}
                                    />
                                )}
                                {nodes.Mario__MarioFaceMat00 && (
                                    <skinnedMesh
                                        name="Mario__MarioFaceMat00"
                                        geometry={(nodes.Mario__MarioFaceMat00 as SkinnedMesh).geometry}
                                        material={materials.MarioMetalMat00}
                                        skeleton={(nodes.Mario__MarioFaceMat00 as SkinnedMesh).skeleton}
                                    />
                                )}
                                {nodes.Mario__MarioMetalMat00 && (
                                    <skinnedMesh
                                        name="Mario__MarioMetalMat00"
                                        geometry={(nodes.Mario__MarioMetalMat00 as SkinnedMesh).geometry}
                                        material={materials.MarioMetalMat00}
                                        skeleton={(nodes.Mario__MarioMetalMat00 as SkinnedMesh).skeleton}
                                    />
                                )}
                                {nodes.Mario__MarioShoesMat00 && (
                                    <skinnedMesh
                                        name="Mario__MarioShoesMat00"
                                        geometry={(nodes.Mario__MarioShoesMat00 as SkinnedMesh).geometry}
                                        material={materials.MarioShoesMat00}
                                        skeleton={(nodes.Mario__MarioShoesMat00 as SkinnedMesh).skeleton}
                                    />
                                )}
                            </skinnedMesh>
                        )}
                        {nodes.Eyeball__MarioEyeMat00 && (
                            <skinnedMesh
                                name="Eyeball__MarioEyeMat00"
                                geometry={(nodes.Eyeball__MarioEyeMat00 as SkinnedMesh).geometry}
                                material={materials.MarioEyeMat00}
                                skeleton={(nodes.Eyeball__MarioEyeMat00 as SkinnedMesh).skeleton}
                            />
                        )}
                        {nodes.HandL00__MarioHandMat00 && (
                            <skinnedMesh
                                name="HandL00__MarioHandMat00"
                                geometry={(nodes.HandL00__MarioHandMat00 as SkinnedMesh).geometry}
                                material={materials.MarioHandMat00}
                                skeleton={(nodes.HandL00__MarioHandMat00 as SkinnedMesh).skeleton}
                            />
                        )}
                        {nodes.HandR00__MarioHandMat00 && (
                            <skinnedMesh
                                name="HandR00__MarioHandMat00"
                                geometry={(nodes.HandR00__MarioHandMat00 as SkinnedMesh).geometry}
                                material={materials.MarioHandMat00}
                                skeleton={(nodes.HandR00__MarioHandMat00 as SkinnedMesh).skeleton}
                            />
                        )}
                    </group>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload('https://cdn.jsdelivr.net/gh/ebowwar/threejs-assets@main/Player.glb');