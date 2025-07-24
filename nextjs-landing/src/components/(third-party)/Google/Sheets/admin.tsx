'use client';

import { useState } from 'react';
import GoogleSheetsIntegration from './index';

export default function GoogleSheetsAdmin() {
  const [sheetId, setSheetId] = useState(process.env.NEXT_PUBLIC_GOOGLE_SHEETS_ID || '');
  const [testResult, setTestResult] = useState<string | null>(null);

  const handleTest = () => {
    setTestResult('Testing connection...');
  };

  const handleDataFetch = (links: any[]) => {
    setTestResult(`✅ Successfully loaded ${links.length} links from Google Sheets`);
  };

  const copyTemplate = () => {
    const template = `slug,title,description,type,date,url,content,tags,related
example-link,Example Link,This is an example link,other,2024-01-15,https://example.com,"<p>This is example content</p>",example,
`;
    navigator.clipboard.writeText(template);
    alert('Template copied to clipboard! Paste it into your Google Sheet.');
  };

  return (
    <div className="bg-white/10 border border-white/20 rounded-lg p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-white">Google Sheets Integration</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-blue-200 mb-2">
            Google Sheets ID
          </label>
          <input
            type="text"
            value={sheetId}
            onChange={(e) => setSheetId(e.target.value)}
            placeholder="Enter your Google Sheets ID"
            className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <p className="text-xs text-gray-400 mt-1">
            Find this in your Google Sheets URL: docs.google.com/spreadsheets/d/[SHEET_ID]/edit
          </p>
        </div>

        <div className="flex space-x-3">
          <button
            onClick={handleTest}
            className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md transition-colors"
          >
            Test Connection
          </button>
          
          <button
            onClick={copyTemplate}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
          >
            Copy Template
          </button>
        </div>

        {sheetId && (
          <GoogleSheetsIntegration 
            sheetId={sheetId} 
            onDataFetch={handleDataFetch}
          />
        )}

        {testResult && (
          <div className="mt-4 p-3 bg-gray-800 rounded-md">
            <p className="text-sm text-gray-300">{testResult}</p>
          </div>
        )}
      </div>

      <div className="mt-6 pt-6 border-t border-white/10">
        <h3 className="text-lg font-semibold text-white mb-3">Setup Instructions</h3>
        <ol className="list-decimal list-inside text-sm text-gray-300 space-y-2">
          <li>Create a new Google Sheet</li>
          <li>Click "Copy Template" and paste the headers into row 1</li>
          <li>Add your links data in the rows below</li>
          <li>Share the sheet with your service account email</li>
          <li>Add the sheet ID to your environment variables</li>
          <li>Test the connection above</li>
        </ol>
        
        <div className="mt-4 p-3 bg-yellow-900/30 border border-yellow-600/30 rounded-md">
          <p className="text-xs text-yellow-200">
            <strong>Note:</strong> Make sure you've set up the Google Service Account and added the required environment variables. 
            See the documentation for detailed setup instructions.
          </p>
        </div>
      </div>
    </div>
  );
} 