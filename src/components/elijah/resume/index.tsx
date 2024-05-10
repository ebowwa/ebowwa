// app/page.tsx
import Link from 'next/link';
import data from './resume.json';
// need to add :  `What exceptional work have you done?`
// driving beliefs : i.e. speed of ai, relevance of factors v success potential

export default function Resume() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">{data.name}</h1>
        <p className="text-gray-500">{data.title}</p>
      </header>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-medium">Email</p>
            <p>{data.email}</p>
          </div>
          <div>
            <p className="font-medium">Phone</p>
            <p>{data.phone}</p>
          </div>
          <div>
            <p className="font-medium">LinkedIn</p>
            <Link className="text-blue-500 hover:underline" href={data.linkedin}>
              {data.linkedin}
            </Link>
          </div>
          <div>
            <p className="font-medium">GitHub</p>
            <Link className="text-blue-500 hover:underline" href={data.github}>
              {data.github}
            </Link>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
        <div className="space-y-6">
          {data.workExperience.map((experience, index) => (
            <div key={index}>
              <h3 className="text-xl font-medium">{experience.title}</h3>
              <p className="text-gray-500">{experience.company} | {experience.duration}</p>
              <ul className="list-disc pl-6 mt-2">
                {experience.responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <div className="space-y-4">
          {data.education.map((edu, index) => (
            <div key={index}>
              <h3 className="text-xl font-medium">{edu.degree}</h3>
              <p className="text-gray-500">{edu.school} | {edu.duration}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-medium mb-2">Technical Skills</h3>
            <ul className="list-disc pl-6">
              {data.technicalSkills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Soft Skills</h3>
            <ul className="list-disc pl-6">
              {data.softSkills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
