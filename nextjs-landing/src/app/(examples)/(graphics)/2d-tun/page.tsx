// src/app/tun/page.tsx
"use client"
import React from 'react';
import { Tunnel } from '@/components/three/utils/tunnel';

const IndexPage: React.FC = () => {
  return (
    <Tunnel>
      <div className="flex justify-center items-center h-screen">
        <div className="w-64 h-64 bg-gray-200 rounded-md shadow-md flex justify-center items-center transform rotate-45">
          <div>
            <h2 className="text-2xl font-bold mb-4">Welcome to the Tunnel</h2>
            <p className="text-gray-600">This is a square box inside the tunnel.</p>
          </div>
        </div>
      </div>
    </Tunnel>
  );
};

export default IndexPage;