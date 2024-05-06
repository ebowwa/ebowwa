"use client"
import React from 'react';
import ModelViewer from '@/components/three/ModelViewer';

const MyPage: React.FC = () => {
  return (
    <ModelViewer
      cameraPosition={[0, 0, 10]}
      environmentPreset="sunset"
      models={[
        { url: '/models/Koopa.glb', position: [0, 0, 0] },
        { url: '/models/GoalStar.glb', position: [5, 0, 0] },
        { url: '/models/building.gltf', position: [-5, 0, 0] },
      ]}
    >
      {/* Additional 3D content can be added here */}
    </ModelViewer>
  );
};

export default MyPage;