To install @react-three/cannon using pnpm, you can run the following command in your terminal:

```
pnpm install @react-three/cannon
```

This will install the package and its dependencies. Make sure you have pnpm installed and configured correctly on your system. If you don't have pnpm, you can install it by following the instructions on the pnpm website.

After installing, you can import the package in your React application and use its hooks to add physics to your scene. For example, you can use the `useBox` hook to create a box with mass and position, and the `usePlane` hook to create a plane with rotation and position.

Here's an example of how you might use these hooks:
```jsx
import { Canvas } from '@react-three/fiber';
import { Physics, useBox, usePlane } from '@react-three/cannon';

function Plane() {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));
  return (
    <mesh ref={ref}>
      <planeGeometry args={[100, 100]} />
    </mesh>
  );
}

function Cube() {
  const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0] }));
  return (
    <mesh ref={ref}>
      <boxGeometry />
    </mesh>
  );
}

function App() {
  return (
    <Canvas>
      <Physics>
        <Plane />
        <Cube />
      </Physics>
    </Canvas>
  );
}
```
This code creates a plane and a cube, and adds them to a physics world. The plane has a rotation of -π/2, and the cube has a mass of 1 and a position of [5]. The `useBox` and `usePlane` hooks return a reference to the box and plane objects, which can be used to access their properties and methods.

Note that you'll need to have `@react-three/fiber` installed as well, as it provides the `Canvas` component that wraps the physics world.

Citations:
[1] https://codesandbox.io/examples/package/%40react-three/cannon
[2] https://discourse.threejs.org/t/react-three-cannon-official-docs/51539
[3] https://stackoverflow.com/questions/68749396/module-not-found-cant-resolve-react-three-cannon
[4] https://github.com/pmndrs/use-cannon
[5] https://docs.pmnd.rs/react-three-fiber/getting-started/installation
[6] https://www.npmjs.com/package/%40react-three/fiber
[7] https://www.npmjs.com/package/%40react-three/cannon
[8] https://cloudcannon.com/documentation/articles/managing-your-node-version-with-nvm/
[9] https://classic.yarnpkg.com/en/package/react-garden
[10] https://classic.yarnpkg.com/en/package/%40react-three/cannon
[11] https://github.com/pmndrs/use-cannon/issues/419