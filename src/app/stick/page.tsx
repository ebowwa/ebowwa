"use client"

// app/page.tsx
import React from 'react';
import StickFigureAnimation from '@/components/StickFigureAnimation';

const HomePage: React.FC = () => {
  return (
    <div style={{ height: '5000px', backgroundColor: '#f0f0f0' }}>
      <StickFigureAnimation />
    </div>
  );
};

export default HomePage;