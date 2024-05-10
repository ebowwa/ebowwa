// src/app/page.tsx
"use client"
import React from 'react';
import Dynamic from 'next/dynamic'
import AsciiEffect from '@/(three-asset-demos)/ascii/page';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Ascii Effect</h1>
      <AsciiEffect />
    </div>
  );
};

export default HomePage;