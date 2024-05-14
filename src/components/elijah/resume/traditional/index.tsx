// app/page.tsx
import Link from 'next/link';
import data from './traditional-resume.json';
// need to add :  `What exceptional work have you done?`
// driving beliefs : i.e. speed of ai, relevance of factors v success potential

// Define interfaces/types to match the structure of resume.json
interface WorkExperience {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

interface Education {
  degree: string;
  school: string;
  duration: string;
}

interface ResumeData {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  workExperience: WorkExperience[];
  education: Education[];
  technicalSkills: string[];
  softSkills: string[];
}

// Utility function to redact sensitive information
const redact = (str: string, visibleChars: number): string => {
  if (str.length <= visibleChars) return str;
  return `${str.slice(0, visibleChars)}${'*'.repeat(str.length - visibleChars)}`;
};

// Specific function to redact phone numbers
const redactPhoneNumber = (phone: string): string => {
  const visiblePart = phone.slice(0, 8); // Adjust this to show the desired part of the phone number
  const redactedPart = '*'.repeat(phone.length - 8);
  return `${visiblePart}${redactedPart}`;
};

// Type assertion to ensure `data` conforms to `ResumeData` shape
const resumeData = data as ResumeData;

export default function Resume() {
  const redactedEmail = redact(resumeData.email, 3); // Show only the first 3 characters
  const redactedPhone = redactPhoneNumber(resumeData.phone); // Show the first 8 characters (e.g., '+1 (510)')

  return (
    <main className="container mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">{resumeData.name}</h1>
        <p className="text-gray-500">{resumeData.title}</p>
      </header>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-medium">Email</p>
            <p>{redactedEmail}</p>
          </div>
          <div>
            <p className="font-medium">Phone</p>
            <p>{redactedPhone}</p>
          </div>
          <div>
            <p className="font-medium">LinkedIn</p>
            <Link className="text-blue-500 hover:underline" href={resumeData.linkedin}>
              {resumeData.linkedin}
            </Link>
          </div>
          <div>
            <p className="font-medium">GitHub</p>
            <Link className="text-blue-500 hover:underline" href={resumeData.github}>
              {resumeData.github}
            </Link>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
        <div className="space-y-6">
          {resumeData.workExperience.map((experience, index) => (
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
          {resumeData.education.map((edu, index) => (
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
              {resumeData.technicalSkills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Soft Skills</h3>
            <ul className="list-disc pl-6">
              {resumeData.softSkills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
