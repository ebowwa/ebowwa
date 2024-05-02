import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { Group, SkinnedMesh } from 'three';

interface CharacterRendererProps {
    nodes: {
        [key: string]: THREE.Object3D | SkinnedMesh;
    };
    materials: {
        [key: string]: THREE.Material;
    };
}

const CharacterRenderer: React.FC<CharacterRendererProps> = ({ nodes, materials }) => {
    const group = useRef<Group>(null);

    const renderedElements = useMemo(() => {
        const elements: JSX.Element[] = [];

        // Render the JointRoot group
        elements.push(
            <group name="JointRoot" position={[0, 0.611, -0.041]} key="JointRoot">
                {Object.keys(nodes)
                    .filter((nodeName) => ['Hip', 'Spine1'].includes(nodeName))
                    .map((nodeName) => (
                        <primitive object={nodes[nodeName]} key={nodeName} />
                    ))}
            </group>
        );

        // Render the skinnedMesh elements
        Object.keys(nodes).forEach((nodeName) => {
            if (nodes[nodeName] instanceof SkinnedMesh) {
                const materialName = nodeName.split('__')[1];
                elements.push(
                    <skinnedMesh
                        name={nodeName}
                        geometry={nodes[nodeName].geometry}
                        material={materials[materialName]}
                        skeleton={nodes[nodeName].skeleton}
                        key={nodeName}
                    />
                );
            }
        });

        return elements;
    }, [nodes, materials]);

    return (
        <group ref={group} dispose={null}>
            <group name="Player" position={[0, -0.7, 0]}>
                <group name="Player_1">
                    <group name="Mario">
                        <group name="AllRoot">{renderedElements}</group>
                    </group>
                </group>
            </group>
        </group>
    );
};

export default CharacterRenderer;