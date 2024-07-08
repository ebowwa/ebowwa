// app/test/ClientComponent.tsx
"use client";

import React, { useEffect, useRef } from 'react';
import p5 from 'p5';
import { Vector, Flock, Boid } from './script';

export default function ClientComponent() {
  // Create a ref to hold the container element
  const containerRef = useRef<HTMLDivElement>(null);
  // Declare a variable to hold the Flock instance
  let flock: Flock;

  useEffect(() => {
    // Check if the container element is available
    if (containerRef.current) {
      // Create a P5.js sketch function
      const sketch = (p5: p5) => {
        // Setup function, called once at the start
        p5.setup = () => {
          // Create a canvas that fills the entire window
          const canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
          // Position the canvas at the top-left corner
          canvas.position(0, 0);
          // Set the canvas z-index to -1 to place it behind other elements
          canvas.style('z-index', '-1');
          // Set the background color to a dark shade
          p5.background('#1a1a1a');

          // Create a new Flock instance
          flock = new Flock(p5);
          // Add an initial set of boids to the flock
          for (let i = 0; i < 70; i++) {
            let b: Boid | null = null;
            // Place the first 35 boids at the center of the screen
            if (i < 35) {
              b = new Boid(p5.width / 2, p5.height / 2, p5);
            } // Place the remaining boids at random positions
            else {
              b = new Boid(p5.random(p5.width), p5.random(p5.height), p5);
            }
            // Add the boid to the flock if it was successfully created
            if (b) {
              flock.addBoid(b);
            }
          }
        };

        // Draw function, called on each frame
        p5.draw = () => {
          // Set the background color to a dark shade
          p5.background('#1a1a1a');
          // Run the flock simulation
          flock.run(p5);
        };

        // Handle window resizing
        p5.windowResized = () => {
          // Resize the canvas to fit the new window size
          p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
          // Set the background color to a dark shade
          p5.background('#1a1a1a');
        };

        // Handle mouse dragging
        p5.mouseDragged = () => {
          // Check if the flock has less than 250 boids
          if (flock.boids.length <= 250) {
            // Add a new boid at the current mouse position
            flock.addBoid(new Boid(p5.mouseX, p5.mouseY, p5));
          }
        };
      };

      // Create a new P5.js instance and attach it to the container element
      const p5Instance = new p5(sketch, containerRef.current);

      // Return a cleanup function to dispose of the P5.js instance
      return () => p5Instance.remove();
    }
  }, []);

  // Render the container element
  return (
    <div ref={containerRef} className="w-screen h-screen" />
  );
}