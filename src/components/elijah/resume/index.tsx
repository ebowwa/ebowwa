// src/components/elijah/index.tsx
import Link from 'next/link';
import data from './new-resume.json';
import ImageDisplayComponent from '@/components/three/assets/frame';

// Define interfaces/types to match the structure of resume.json
interface WorkExperience {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

interface Hackathon {
  name: string;
  date: string;
  project: string;
  description: string;
}

interface ResumeData {
  name: string;
  dob: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  workExperience: WorkExperience[];
  hackathons: Hackathon[];
  technicalSkills: string[];
  softSkills: string[];
  interests: string[];
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

// Function to calculate age from DOB
const calculateAge = (dob: string): number => {
  const birthDate = new Date(dob);
  const ageDifMs = Date.now() - birthDate.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

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

      <ImageDisplayComponent imageSource="https://cdn.jsdelivr.net/gh/ebowwar/asset-store@main/a887ec56-90e7-427e-8c98-22a8c8ba92a8.webp" showImage={true} />

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
        <h2 className="text-2xl font-bold mb-4">Hackathons</h2>
        <ImageDisplayComponent imageSource="https://cdn.jsdelivr.net/gh/ebowwar/asset-store@main/7a803307-b6fb-4419-84bf-bcc4252b15cf.webp" showImage={true} />
        <div className="space-y-6">
          {resumeData.hackathons.map((hackathon, index) => (
            <div key={index}>
              <h3 className="text-xl font-medium">{hackathon.name}</h3>
              <p className="text-gray-500">{hackathon.date} | Project: {hackathon.project}</p>
              <p>{hackathon.description}</p>
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

      <section>
        <h2 className="text-2xl font-bold mb-4">Interests</h2>
        <div>
          <p>{resumeData.interests.join(', ')}</p>
        </div>
      </section>
    </main>
  );
}