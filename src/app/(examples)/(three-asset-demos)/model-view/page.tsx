"use client"

import React from 'react';
import ModelViewer from '@/components/three/ModelViewer';

const MyPage: React.FC = () => {
  return (
      <div className="h-screen w-screen">
      <ModelViewer
        cameraPosition={[0, 0, 10]}
        environmentPreset="sunset"
        models={[
          { url: 'https://cdn.jsdelivr.net/gh/ebowwar/threejs-assets@main/Koopa.glb', position: [0, 0, 0] },
          { url: 'https://cdn.jsdelivr.net/gh/ebowwar/threejs-assets@main/GoalStar.glb', position: [5, 0, 0] },
          { url: 'https://cdn.jsdelivr.net/gh/ebowwar/threejs-assets@main/a_book_of_poems.glb', position: [-5, 0, 0] },
        ]}
      >
        {/* Additional 3D content can be added here */}
      </ModelViewer>
    </div>
  );
};

export default MyPage;
