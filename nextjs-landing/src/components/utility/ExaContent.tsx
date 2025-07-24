'use client'; // @/components/ExaContent.tsx

import { useEffect, useState } from 'react';

export default function ExaContent({ topic }: { topic: string }) {
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/exa-content?topic=${encodeURIComponent(topic)}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error);
        }

        setContent(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      }

      setIsLoading(false);
    };

    fetchContent();
  }, [topic]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Related Content for SEO:</h2>
      {content.map((item: any) => (
        <div key={item.id}>
          <h3>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </h3>
          <p>{item.highlights[0]}</p>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}