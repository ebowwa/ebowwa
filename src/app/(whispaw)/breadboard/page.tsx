// app/page.tsx
"use client";

import React from 'react';

const HomePage = () => {
  return (
    <div className="container">
      <h1>Discover the Magic of Breadboards: Your Gateway to Electronics</h1>
      
      <p>Ever wondered how electronic wizards bring their ideas to life? The secret is out: it's the humble breadboard!</p>
      
      <h2>What is a Breadboard?</h2>
      <p>A breadboard is a reusable plastic board with holes and metal clips underneath. It allows you to create temporary electrical circuits without soldering. Think of it as a playground for your electronic components!</p>
      
      <img src="/api/placeholder/400/200" alt="Breadboard illustration" />
      
      <h2>How Does It Work?</h2>
      <p>The holes on a breadboard are connected in a specific pattern:</p>
      <ul>
        <li>The outer columns (usually marked + and -) are connected vertically.</li>
        <li>The inner holes are connected horizontally in groups of 5.</li>
        <li>A central groove separates the board into two halves.</li>
      </ul>
      
      <h2>Why You Need a Breadboard</h2>
      <div className="benefits">
        <h3>Benefits:</h3>
        <ul>
          <li><strong>Easy to Use:</strong> No soldering required! Just plug and play.</li>
          <li><strong>Reusable:</strong> Create, test, and modify circuits endlessly.</li>
          <li><strong>Learn Electronics:</strong> Perfect for beginners and experts alike.</li>
          <li><strong>Prototype Quickly:</strong> Turn ideas into reality in minutes.</li>
          <li><strong>Cost-Effective:</strong> Experiment without wasting components.</li>
        </ul>
      </div>
      
      <h2>What Can You Create?</h2>
      <p>The possibilities are endless! Start with simple LED circuits, then move on to:</p>
      <ul>
        <li>Digital clocks</li>
        <li>Sound generators</li>
        <li>Robot controls</li>
        <li>Home automation prototypes</li>
      </ul>
      
      <h2>Ready to Start Your Electronics Journey?</h2>
      <p>A breadboard is your ticket to the exciting world of electronics. Whether you're a curious beginner or an aspiring inventor, a breadboard is an essential tool in your maker's toolkit.</p>
      
      <a href="#" className="cta">Get Your Breadboard Today!</a>
    </div>
  );
};

export default HomePage;