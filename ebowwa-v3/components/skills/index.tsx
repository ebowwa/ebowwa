import { SkillCard } from './skill-card';

const skillsData = {
  technical: {
    category: 'Technical Skills',
    skills: [
      { name: '3D Modeling', level: 90 },
      { name: 'Web Development', level: 85 },
      { name: 'UI/UX Design', level: 80 }
    ]
  },
  software: {
    category: 'Software & Tools',
    skills: [
      { name: 'Blender', level: 85 },
      { name: 'React/Next.js', level: 90 },
      { name: 'Three.js', level: 80 }
    ]
  }
};

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-primary/5">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          <SkillCard {...skillsData.technical} />
          <SkillCard {...skillsData.software} />
        </div>
      </div>
    </section>
  );
}