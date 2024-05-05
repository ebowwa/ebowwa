"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import UncertaintyPrinciple from './help';

const Home: React.FC = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Heisenberg Uncertainty Principle Demo</h1>
      <UncertaintyPrinciple initialPosition={1} initialMomentum={2} />
    </div>
  );
};

export default Home;