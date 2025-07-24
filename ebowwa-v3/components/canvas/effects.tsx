'use client';

import { useRef } from 'react';
import { extend, useFrame } from '@react-three/fiber';
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
  Noise,
} from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

export function Effects() {
  const bloomRef = useRef();

  useFrame((state) => {
    if (bloomRef.current) {
      bloomRef.current.intensity = 0.5 + Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <EffectComposer>
      <Bloom 
        ref={bloomRef}
        intensity={0.5}
        luminanceThreshold={0.2}
        luminanceSmoothing={0.9}
      />
      <ChromaticAberration
        blendFunction={BlendFunction.NORMAL}
        offset={[0.002, 0.002]}
      />
      <Noise opacity={0.02} />
    </EffectComposer>
  );
}