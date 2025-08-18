'use client';

import { Scene } from '@/components/canvas/scene';
import { Hero } from '@/components/sections/hero';
import { Vision } from '@/components/sections/vision';
import { Journey } from '@/components/sections/journey';
import { Projects } from '@/components/sections/projects';
import { Contact } from '@/components/sections/contact';
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver';

export default function Home() {
  useIntersectionObserver();

  return (
    <main className="relative">
      <Scene />
      <div className="relative z-10">
        <Hero />
        <Vision />
        <Journey />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}