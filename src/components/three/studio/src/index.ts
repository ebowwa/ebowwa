// @/components/studio/index.ts
// src/components/studio/src/Animate/index.ts
// This code is a part of the ThreeJSAnimate class, which is responsible for animating a ThreeJS scene.
// The class has a private method called setupAnimate that sets up the animation loop.
// The animate method is called repeatedly using requestAnimationFrame, which renders the scene using the ThreeJSScene object.
// To start the animation, you can call the startAnimation method on an instance of the ThreeJSAnimate class.
export * from './core/Camera';
// src/components/studio/Camera.ts
// This code defines the ThreeJSCamera class, which is responsible for creating a perspective camera for a ThreeJS scene.
// The class takes in a width, height, and a CameraConfig object that contains the field of view, near and far planes, and the camera's position.
// The constructor creates a new PerspectiveCamera instance with the provided configuration and sets the camera's position.
// The camera object can be accessed through the public camera property of the ThreeJSCamera instance.
export * from './core/Controls';
// src/components/studio/Controls.ts
// This code defines the ThreeJSControls class, which is responsible for setting up orbit controls for a ThreeJS scene.
// The class takes in a ThreeJSScene object and a ThreeJSSceneConfig object, which contains the maximum tilt and pan angles for the camera.
// The constructor sets up the OrbitControls instance, which allows the user to rotate, pan, and zoom the camera using the mouse or touch gestures.
// The setupControls method configures the controls, setting the maximum tilt and pan angles, and updating the target position.
// The controls object can be accessed through the private controls property of the ThreeJSControls instance.
// src/components/studio/src/scene/index.ts
// This code defines the ThreeJSScene class, which is responsible for setting up a ThreeJS scene.
// The constructor takes in various configuration parameters, such as camera field of view, near and far planes, renderer width and height, and lighting properties.
// The setupCamera method sets the initial position of the camera.
// The setupRenderer method sets the size of the renderer.
// The setupLighting method adds an ambient light and a directional light to the scene.
// The scene, renderer, and camera objects can be accessed through the public properties of the ThreeJSScene instance.
export * from './ModelLoader';
// src/helpers/GLTFModels/model-helper.ts
// This file contains a set of helper functions for loading, setting up, and animating 3D models in a ThreeJS scene.
// The loadAndSetupModel function loads a GLTF model from a given URL and sets its position and rotation.
// The setupModelPosition function sets the position and rotation of a 3D model.
// The setupModelVisibility function sets the visibility, shadow casting, and shadow receiving properties of a 3D model.
// The addClickHandler function adds a click handler to a 3D model.
// The animateModel function animates a 3D model's position, scale, and rotation using GSAP.
// The setupViewingPerspective function sets the camera's projection matrix, position, and rotation based on a given viewing perspective.
// The ModelConfigFromJSON function creates a configuration object for multiple 3D models from a JSON object.
// The loadGLTFModel function is a helper function that loads a GLTF model from a given URL.
export * from './core/Renderer';
// src/components/studio/Renderer.ts
// This code defines the ThreeJSRenderer class, which is responsible for setting up a WebGLRenderer and a Scene for a ThreeJS scene.
// The constructor takes in the width and height of the renderer, as well as a RendererConfig object that contains the background color.
// The code creates a new WebGLRenderer instance and sets its size and background color.
// It also creates a new Scene instance, which is like a stage where you can put all the things you want to draw on the screen.
// The renderer and scene objects can be accessed through the public renderer and scene properties of the ThreeJSRenderer instance.



// DOES THIS DO A GOOD JOB OF TELLING STATE MANAGEMENT AND PROPS