import { ProjectCard } from './project-card';

const projects = [
  {
    title: '3D Portfolio Showcase',
    description: 'Interactive 3D portfolio built with Three.js and React',
    tags: ['Three.js', 'React', 'WebGL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80'
  },
  // Add more projects as needed
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}