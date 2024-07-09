// app/page.tsx

import Image from 'next/image';

export default function Home() {
  return (
    <div className="container">
      <h1>Breadboard Magic: Connecting XIAO nRF52840 with Audio Components</h1>
      
      <p>Let's dive into how you can use a breadboard to connect your Seeed Studio XIAO nRF52840 Sense Board with the MAX98357 I2S Audio Amplifier Module and the EEMB 3.7V LIR2032 Rechargeable Battery.</p>
      
      <h2>Components Overview</h2>
      
      <div className="component">
        <h3>1. Seeed Studio XIAO nRF52840 Sense Board</h3>
        <p>This is your main microcontroller board. It's small but powerful, perfect for audio projects.</p>
      </div>
      
      <div className="component">
        <h3>2. MAX98357 I2S Audio Amplifier Module</h3>
        <p>This module will amplify the audio signal from your XIAO board.</p>
      </div>
      
      <div className="component">
        <h3>3. EEMB 3.7V LIR2032 Rechargeable Battery</h3>
        <p>This will power your project, making it portable.</p>
      </div>
      
      <h2>How to Use the Breadboard</h2>
      
      <div className="steps">
        <h3>Step-by-Step Guide:</h3>
        <ol>
          <li>Place the XIAO nRF52840 board on one end of the breadboard, ensuring each pin is in a separate row.</li>
          <li>Place the MAX98357 module on the other end of the breadboard.</li>
          <li>Use jumper wires to connect the following:
            <ul>
              <li>XIAO 3.3V to MAX98357 VIN</li>
              <li>XIAO GND to MAX98357 GND</li>
              <li>XIAO D8 (BCLK) to MAX98357 BCLK</li>
              <li>XIAO D10 (LRCLK) to MAX98357 LRC</li>
              <li>XIAO D9 (DIN) to MAX98357 DIN</li>
            </ul>
          </li>
          <li>Connect the battery:
            <ul>
              <li>Positive lead to the breadboard's power rail</li>
              <li>Negative lead to the breadboard's ground rail</li>
            </ul>
          </li>
          <li>Connect the XIAO's VIN to the power rail and GND to the ground rail.</li>
        </ol>
      </div>
      
      <Image src="/api/placeholder/600/400" alt="Breadboard layout illustration" width={600} height={400} />
      
      <h2>Why This Setup Works</h2>
      <p>The breadboard allows you to:
        <ul>
          <li>Easily connect components without soldering</li>
          <li>Quickly test different configurations</li>
          <li>Prototype your audio project before making it permanent</li>
        </ul>
      </p>
      
      <div className="warning">
        <h3>Important Notes:</h3>
        <ul>
          <li>Double-check all connections before powering on</li>
          <li>Be careful not to short-circuit any components</li>
          <li>The XIAO board may need additional setup in your code to work with the I2S amplifier</li>
        </ul>
      </div>
      
      <h2>Next Steps</h2>
      <p>With this setup, you can now write code for your XIAO board to output audio through the amplifier. You might create a simple tone generator, an audio player, or even a voice assistant!</p>
    </div>
  );
}