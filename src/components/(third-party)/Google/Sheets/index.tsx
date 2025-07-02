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

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`/api/google-sheets?sheetId=${sheetId}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setLinks(data.links);
      
      if (onDataFetch) {
        onDataFetch(data.links);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch data');
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
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
          <span>Loading from Google Sheets...</span>
        </div>
      )}
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <strong>Error:</strong> {error}
          <button 
            onClick={fetchData}
            className="ml-4 underline hover:no-underline"
          >
            Retry
          </button>
        </div>
      )}
      
      {!loading && !error && links.length > 0 && (
        <div className="text-green-600 text-sm">
          ✓ Successfully loaded {links.length} links from Google Sheets
        </div>
      )}
    </div>
  );
} 