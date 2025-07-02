'use client';

import { useState, useEffect } from 'react';
import { Link } from '../../../../data/types';

interface GoogleSheetsProps {
  sheetId: string;
  onDataFetch?: (links: Link[]) => void;
}

export default function GoogleSheetsIntegration({ sheetId, onDataFetch }: GoogleSheetsProps) {
  const [links, setLinks] = useState<Link[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errorDetails, setErrorDetails] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    setErrorDetails(null);
    
    try {
      const response = await fetch(`/api/google-sheets?sheetId=${sheetId}`);
      
      if (!response.ok) {
        // Parse API error JSON
        const errorData = await response.json();
        // Set main error message
        setError(errorData.error || `HTTP error! status: ${response.status}`);
        // Include full error details JSON for troubleshooting
        setErrorDetails(JSON.stringify(errorData, null, 2));
        return; // Exit early
      }
      
      const data = await response.json();
      setLinks(data.links);
      
      if (onDataFetch) {
        onDataFetch(data.links);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch data';
      setError(errorMessage);
      // Unexpected network or parse error, no details
      setErrorDetails(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (sheetId) {
      fetchData();
    }
  }, [sheetId]);

  return (
    <div className="google-sheets-integration">
      {loading && (
        <div className="flex items-center space-x-2 text-blue-400">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
          <span>Loading from Google Sheets...</span>
        </div>
      )}
      
      {error && (
        <div className="bg-red-900/30 border border-red-600/30 text-red-200 px-4 py-3 rounded mb-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <strong>Error:</strong> {error}
              <button 
                onClick={fetchData}
                className="ml-4 underline hover:no-underline text-red-300"
              >
                Retry
              </button>
            </div>
          </div>
          
          {errorDetails && (
            <details className="mt-3">
              <summary className="cursor-pointer text-sm text-red-300 hover:text-red-200">
                Show diagnostic information
              </summary>
              <pre className="mt-2 text-xs bg-red-950/50 p-2 rounded overflow-x-auto">
                {errorDetails}
              </pre>
            </details>
          )}
          
          <div className="mt-3 text-sm text-red-300">
            <p><strong>Common issues:</strong></p>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>Missing environment variables (GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY)</li>
              <li>Sheet not shared with service account email</li>
              <li>Invalid sheet ID or sheet doesn't exist</li>
              <li>Service account doesn't have proper permissions</li>
            </ul>
          </div>
        </div>
      )}
      
      {!loading && !error && links.length > 0 && (
        <div className="text-green-400 text-sm flex items-center space-x-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Successfully loaded {links.length} links from Google Sheets</span>
        </div>
      )}
    </div>
  );
} 