import React from 'react';

export const metadata = {
  title: 'Privacy Choices - Ebowwa Labs',
  description: 'Manage your privacy preferences and data choices for the Ebowwa app',
};

export default function PrivacyChoices() {
  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Your Privacy Choices</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Collection Preferences</h2>
        <p className="mb-4">
          You can manage your data collection preferences directly in the Ebowwa app:
        </p>
        <ol className="list-decimal pl-6 space-y-4">
          <li>Open the Ebowwa app</li>
          <li>Go to Settings</li>
          <li>Select Privacy &amp; Data</li>
          <li>Adjust your preferences</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Available Controls</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-2">Analytics Collection</h3>
            <p>Control whether we collect anonymous usage data to improve the app experience.</p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Data Backup</h3>
            <p>Choose whether to backup your data to your personal cloud storage.</p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Notifications</h3>
            <p>Manage what types of notifications you receive and when.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Deletion</h2>
        <p className="mb-4">
          To delete all your data from Ebowwa:
        </p>
        <ol className="list-decimal pl-6 space-y-4">
          <li>Open the Ebowwa app</li>
          <li>Go to Settings → Privacy &amp; Data</li>
          <li>Select &quot;Delete All Data&quot;</li>
          <li>Confirm your choice</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Questions?</h2>
        <p>
          If you have any questions about your privacy choices, please contact us at:{' '}
          <a href="mailto:support@ebowwa.xyz" className="text-blue-500 hover:text-blue-600">
            support@ebowwa.xyz
          </a>
        </p>
      </section>
    </div>
  );
}
