// src/components/elijah/index.tsx

import Link from 'next/link';
import data from '@public/html/elijah-arbee-resume.json';
import ImageDisplayComponent from '@/components/three/assets/frame';
import { redact, redactPhoneNumber, calculateAge } from './utils';

// Define interfaces/types to match the structure of resume.json
interface WorkExperience {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
  background: string;
}

interface Hackathon {
  name: string;
  date: string;
  description: string;
  learnings: string[];
}

interface ResumeData {
  name: string;
  dob: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  huggingface: string; // Added Hugging Face property
  ollama: string; // Added Ollama property
  workExperience: WorkExperience[];
  hackathons: Hackathon[];
  technicalSkills: string[];
  softSkills: string[];
  interests: string[];
}

// Type assertion to ensure `data` conforms to `ResumeData` shape
const resumeData = data as ResumeData;

export default function Resume() {
  const redactedEmail = redact(resumeData.email, 2); // Show only the first 3 characters
  const redactedPhone = redactPhoneNumber(resumeData.phone); // Show the first 8 characters (e.g., '+1 (510)')
  const age = calculateAge(resumeData.dob);

  return (
    <main className="container mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">{resumeData.name}, {age}</h1>
        <p className="text-gray-500">{resumeData.title}</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="font-medium">Email</p>
            <p>{redactedEmail}</p>
          </div>
          <div>
            <p className="font-medium">Phone</p>
            <p>{redactedPhone}</p>
          </div>
          <div className="col-span-1 sm:col-span-1">
            <p className="font-medium">LinkedIn</p>
            <a
              className="text-blue-500 hover:underline"
              href={resumeData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              {resumeData.linkedin}
            </a>
          </div>
          <div className="col-span-1 sm:col-span-1">
            <p className="font-medium">GitHub</p>
            <a
              className="text-blue-500 hover:underline"
              href={resumeData.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {resumeData.github}
            </a>
          </div>
          <div className="col-span-1 sm:col-span-1">
            <p className="font-medium">Hugging Face</p>
            <a
              className="text-blue-500 hover:underline"
              href={resumeData.huggingface}
              target="_blank"
              rel="noopener noreferrer"
            >
              {resumeData.huggingface}
            </a>
          </div>
          <div className="col-span-1 sm:col-span-1">
            <p className="font-medium">Ollama</p>
            <a
              className="text-blue-500 hover:underline"
              href={resumeData.ollama}
              target="_blank"
              rel="noopener noreferrer"
            >
              {resumeData.ollama}
            </a>
          </div>
        </div>
      </section>

      <ImageDisplayComponent imageSource="https://cdn.jsdelivr.net/gh/ebowwar/asset-store@main/a887ec56-90e7-427e-8c98-22a8c8ba92a8.webp" showImage={true} />

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
        <div className="space-y-6">
          {resumeData.workExperience.map((experience, index) => (
            <div key={index}>
              <h3 className="text-xl font-medium">{experience.title}</h3>
              <p className="text-gray-500">{experience.company} | {experience.duration}</p>
              <p>{experience.background}</p>
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
        <h2 className="text-2xl font-bold mb-4">Open Source Community</h2>
        <ImageDisplayComponent imageSource="https://cdn.jsdelivr.net/gh/ebowwar/asset-store@main/7a803307-b6fb-4419-84bf-bcc4252b15cf.webp" showImage={true} />
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium">{resumeData.hackathons[0].name}</h3>
            <p>{resumeData.hackathons[0].description}</p>
            <ul className="list-disc pl-6 mt-2">
              {resumeData.hackathons[0].learnings.map((learning, i) => (
                <li key={i}>{learning}</li>
              ))}
            </ul>
          </div>
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

      <section>
        <h2 className="text-2xl font-bold mb-4">Interests</h2>
        <div>
          <p>{resumeData.interests.join(', ')}</p>
        </div>
      </section>
    </main>
  );
}