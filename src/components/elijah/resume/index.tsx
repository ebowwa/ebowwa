// src/components/elijah/index.tsx
"use client"
import Link from 'next/link';
import data from '@public/html/elijah-arbee-resume.json';
import ImageDisplayComponent from '@/components/three/assets/frame';
import { redact, redactPhoneNumber, calculateAge } from './utils';
import ShaderBackground from '@/components/landing/ui/shaders/wide-ruled-paper'; // src/components/shaders/wide-riled-paper.tsx
import { Transparent } from '@/components/landing/ui/transparent-buttons/BuiltInPublicButton/transparent'; // Import the button component
import { BuyMeACoffeeWhiteButton } from '@/components/landing/ui/transparent-buttons/BuyMeCoffee'; // Import the button component
import { FullstackDevButton } from '@/components/landing/ui/transparent-buttons/fullstack';
import { AskMeAnythingButton } from '@/components/landing/ui/transparent-buttons/Ama';
import TimedDialog from "@/components/landing/ui/TimeDialog"
// AMA | https://docs.google.com/forms/d/e/1FAIpQLSeaFid_fvg0WSeYvLz6zwU7xjGV0az_qaLSiF1yx7d3sXpB8Q/viewform?usp=sf_link

// Define interfaces/types to match the structure of resume.json
interface WorkExperience {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
  background: string;
}

interface Build {
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
  huggingface: string; 
  ollama: string; 
  workExperience: WorkExperience[];
  build: Build[];
  technicalSkills: string[];
  softSkills: string[];
  interests: string[];
}

// Type assertion to ensure `data` conforms to `ResumeData` shape
const resumeData = data as ResumeData;

export default function Resume() {
  const redactedEmail = redact(process.env.NEXT_PUBLIC_CONTACT_EMAIL || '', 2); // Shows only the first 3 characters
  const redactedPhone = redactPhoneNumber(process.env.NEXT_PUBLIC_CONTACT_PHONE || ''); // Show the first 8 characters (e.g., '+1 (510)999-9999')
  const age = calculateAge(process.env.NEXT_PUBLIC_DOB || ''); // i didn't want to expose this publically example: '2001-07-14'

  return (
    <div>
      <ShaderBackground />
      <main className="container mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 relative z-10">
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
                className="text-blue-500 hover:underline glow-link"
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
                className="text-blue-500 hover:underline glow-link"
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
                className="text-blue-500 hover:underline glow-link"
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
                className="text-blue-500 glow-link hover:underline"
                href={resumeData.ollama}
                target="_blank"
                rel="noopener noreferrer"
              >
                {resumeData.ollama}
              </a>
            </div>
          </div>
        </section>

        <ImageDisplayComponent 
          imageSource="https://cdn.jsdelivr.net/gh/ebowwar/asset-store@main/meta-cerebral-valley-5-24/a887ec56-90e7-427e-8c98-22a8c8ba92a8.webp" 
          showImage={true} 
          dialogTitle="Professional Experience Image"
          dialogDescription="This image represents the professional experience section."
        />
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
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
          <ImageDisplayComponent 
            imageSource="https://cdn.jsdelivr.net/gh/ebowwar/asset-store@main/meta-cerebral-valley-5-24/7a803307-b6fb-4419-84bf-bcc4252b15cf.webp" 
            showImage={true} 
            dialogTitle="Open Source Community Image"
            dialogDescription="This image represents the open source community section."
          />
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium">{resumeData.build[0].name}</h3>
              <p>{resumeData.build[0].description}</p>
              <ul className="list-disc pl-6 mt-2">
                {resumeData.build[0].learnings.map((learning, i) => (
                  <li key={i}>{learning}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
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

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Interests</h2>
          <div>
            <p>{resumeData.interests.join(', ')}</p>
          </div>
        </section>
        <div className="flex justify-center space-x-4">
          <Transparent />
          <BuyMeACoffeeWhiteButton />
          <AskMeAnythingButton />
        </div>
      </main>
      <TimedDialog /> {/* Add the TimedDialog component here */}
    </div>
  );
}