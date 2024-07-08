import { RigidBody } from '@react-three/rapier'

export const Ground = (props) => {
    return (
        <RigidBody
            type='fixed'
            {...props}
        >
            <mesh
                receiveShadow
                rotation={[-Math.PI / 2, 0, 0]}
            >
                <planeGeometry args={[500, 500, 1]} />
                <meshStandardMaterial
                    color='#808080'
                    opacity={0.5}
                    transparent
                />
            </mesh>
        </RigidBody>
    )
}