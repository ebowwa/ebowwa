import React from 'react';

export const metadata = {
  title: 'SleepLoops Privacy Policy - Ebowwa Labs',
  description: 'Privacy policy and data handling information for SleepLoops app users',
};

export default function SleepLoopsPrivacy() {
  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">SleepLoops Privacy Policy</h1>
      
      <section className="mb-8">
        <p className="mb-4">Last updated: April 30, 2025</p>
        
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="mb-4">
          At SleepLoops, we take your privacy seriously. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you use our mobile application.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li>Sleep schedule data</li>
          <li>App usage statistics</li>
          <li>Device information</li>
          <li>User preferences</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li>To provide and maintain our Service</li>
          <li>To improve our app based on your feedback and usage</li>
          <li>To send you app updates and important notifications</li>
          <li>To respond to your inquiries and support requests</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Storage and Security</h2>
        <p className="mb-4">
          Your data is encrypted and stored securely on your device. We implement appropriate
          technical and organizational security measures to protect your information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
        <p className="mb-4">
          You have the right to:
        </p>
        <ul className="list-disc pl-6 space-y-4">
          <li>Access your personal data</li>
          <li>Request deletion of your data</li>
          <li>Opt-out of data collection</li>
          <li>Update your privacy choices</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:{' '}
          <a href="mailto:privacy@ebowwa.xyz" className="text-blue-500 hover:text-blue-600">
            privacy@ebowwa.xyz
          </a>
        </p>
      </section>
    </div>
  );
}
