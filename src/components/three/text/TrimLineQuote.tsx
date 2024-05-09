import React, { useState, useEffect } from 'react';

interface TrimLineQuoteProps {
  text: string;
  duration?: number; // optional duration prop
}

const TrimLineQuote: React.FC<TrimLineQuoteProps> = ({ text, duration = 5000 }) => {
  const [trimmedText, setTrimmedText] = useState('');

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;

    const trimText = () => {
      if (trimmedText.length < text.length) {
        setTrimmedText(text.slice(0, trimmedText.length + 1));
      } else {
        clearTimeout(timer!);
      }
    };

    timer = setTimeout(trimText, duration / text.length);

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [text, trimmedText, duration]);

  return (
    <div>
      <h2>{trimmedText}</h2>
    </div>
  );
};

export default TrimLineQuote;