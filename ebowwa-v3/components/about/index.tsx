import { AboutCard } from './about-card';

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <p className="text-lg text-muted-foreground">
            I'm a passionate developer and creative technologist, exploring the possibilities
            of 3D visualization and immersive web experiences. My journey combines technical
            expertise with artistic vision.
          </p>
        </div>
        <AboutCard />
      </div>
    </section>
  );
}