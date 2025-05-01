import React from 'react';

export const metadata = {
  title: 'SleepLoops Support - Ebowwa Labs',
  description: 'Support information and help for SleepLoops app users',
};

export default function SleepLoopsSupport() {
  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">SleepLoops Support</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <p className="mb-4">
          For support inquiries, please contact us at:
          <a href="mailto:support@ebowwa.xyz" className="text-blue-500 hover:text-blue-600 ml-2">
            support@ebowwa.xyz
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-2">How do I get started with SleepLoops?</h3>
            <p>Download SleepLoops from the App Store and follow the onboarding tutorial to set up your first sleep schedule.</p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Is my data secure?</h3>
            <p>Yes, we take your privacy seriously. All your sleep data is encrypted and stored securely on your device.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Troubleshooting</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li>Make sure you have the latest version of the app installed</li>
          <li>Check if notifications are enabled in your device settings</li>
          <li>Ensure your device has sufficient storage space</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
        <p>
          For information about how we handle your data, please visit our{' '}
          <a href="/privacy" className="text-blue-500 hover:text-blue-600">
            Privacy Policy
          </a>
          .
        </p>
      </section>
    </div>
  );
}
