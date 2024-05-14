"use client"
import React from 'react';

const FuturisticSaasPage: React.FC = () => {
  return (
    <html>
      <head>
        <base href="https://simulationguide.com" />
        <title>Futuristic SaaS Platform | Simulation Guide</title>
        <meta
          name="description"
          content="Unleash your 3D assets in dazzling futuristic simulations powered by Simulation Guide's SaaS platform. Bring your vision to virtual life with cutting-edge AI and cloud tech."
        />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');

          body {
            font-family: 'Inter', sans-serif;
            color: white;
            background: linear-gradient(135deg, #6c63ff 0%, #40E0D0 100%);
            margin: 0;
            padding: 0;
          }

          header {
            padding: 20px;
            position: sticky;
            top: 0;
            backdrop-filter: blur(10px);
          }

          h1 {
            margin: 0;
            font-size: 36px;
            font-weight: 900;
            background: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          nav ul {
            list-style: none;
            display: flex;
            gap: 20px;
            margin: 10px 0 0;
            padding: 0;
          }

          nav a,
          .cta {
            color: white;
            text-decoration: none;
            padding: 8px 16px;
            border-radius: 20px;
            background: rgba(255, 255, 255, 0.1);
          }

          .cta {
            font-weight: bold;
          }

          main {
            max-width: 800px;
            margin: 40px auto;
            padding: 0 20px;
          }

          h2 {
            font-size: 48px;
            margin: 0 0 20px;
            line-height: 1.2;
          }

          .features {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            margin: 60px 0;
          }

          .feature {
            padding: 30px;
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.1);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
          }

          .feature i {
            font-size: 48px;
          }

          .feature h3 {
            font-size: 24px;
            margin: 20px 0;
          }

          .feature p {
            margin: 0;
          }

          footer {
            padding: 40px 0;
            text-align: center;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          main > * {
            animation: fadeIn 1s;
          }

          .feature:hover {
            transform: scale(1.05);
            transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
          }
        `}</style>
      </head>
      <body>
        <header>
          <h1>Simulation Guide</h1>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/platform">Platform</a></li>
              <li><a href="/showcase">Showcase</a></li>
              <li><a href="/docs">Docs</a></li>
              <li><a href="/pricing">Pricing</a></li>
            </ul>
          </nav>
        </header>

        <main>
          <h2>Bring Your Own Assets.<br />Build Unreal Simulations.</h2>

          <p>
            With Simulation Guide's cloud platform, you can unleash the full potential of your 3D models, environments, and characters. Our cutting-edge AI tech and intuitive tools let you craft rich interactive worlds without limits.
          </p>

          <a href="/get-started" className="cta">
            Get Started
          </a>

          <section className="features">
            <div className="feature">
              <i>🤖</i>
              <h3>AI-Powered</h3>
              <p>
                Infuse your assets with intelligent behaviors using our state-of-the-art language models and reinforcement learning agents.
              </p>
            </div>

            <div className="feature">
              <i>🌐</i>
              <h3>Cloud Scale</h3>
              <p>
                Effortlessly scale your simulations to support vast worlds and countless users with our serverless compute infrastructure.
              </p>
            </div>

            <div className="feature">
              <i>🔌</i>
              <h3>Interoperable</h3>
              <p>
                Seamlessly import 3D assets in glTF, FBX, OBJ and other standard formats from all major DCC tools and marketplaces.
              </p>
            </div>

            <div className="feature">
              <i>🎨</i>
              <h3>Fully Customizable</h3>
              <p>
                Tailor every aspect of your simulation's look, feel, and functionality with flexible APIs, shaders, and components.
              </p>
            </div>
          </section>
        </main>

        <footer>
          <a href="/about">About</a> | <a href="/privacy">Privacy</a> | <a href="/terms">Terms</a>
          <p>&copy; 2024 Simulation Guide, Inc.</p>
        </footer>
      </body>
    </html>
  );
};

export default FuturisticSaasPage;
