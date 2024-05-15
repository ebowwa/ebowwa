// src/app/formatjson/page.tsx
'use client';

import React, { useState } from 'react';
import { formatJson } from '@/utils/FormatJson';
// if found to be invalid should feed errors and relevant code snippet to claude hauiku
// not too effective currently
// ui needs work; are mutations used?
const JsonFormatter: React.FC = () => {
  const [inputJson, setInputJson] = useState<string>('');
  const [formattedJson, setFormattedJson] = useState<string>('');

  const handleFormat = async () => {
    const formatted = await formatJson(inputJson);
    setFormattedJson(formatted);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>JSON Formatter</h1>
      <textarea
        value={inputJson}
        onChange={(e) => setInputJson(e.target.value)}
        placeholder="Paste your JSON here"
        rows={10}
        cols={50}
        style={{ width: '100%', marginBottom: '10px', fontFamily: 'monospace' }}
      />
      <button onClick={handleFormat} style={{ marginBottom: '20px' }}>
        Format JSON
      </button>
      {formattedJson && (
        <div>
          <h2>Formatted JSON</h2>
          <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{formattedJson}</pre>
        </div>
      )}
    </div>
  );
};

export default JsonFormatter;
