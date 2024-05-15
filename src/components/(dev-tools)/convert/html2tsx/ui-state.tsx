"use client";

import { FC, useState } from 'react';
import { convertHTMLToAppRouterTSX } from './convertHTMLToAppRouterTSX';

const ConvertHTMLToTSX: FC = () => {
  const [html, setHTML] = useState<string>('');
  const [componentName, setComponentName] = useState<string>('');
  const [tsxComponent, setTSXComponent] = useState<string>('');

  const handleConvert = () => {
    const tsx = convertHTMLToAppRouterTSX(html, componentName);
    setTSXComponent(tsx);
  };

  return (
    <div>
      <h2>HTML to TSX Converter</h2>
      <textarea
        value={html}
        onChange={(e) => setHTML(e.target.value)}
        placeholder="Enter your HTML code here"
      />
      <input
        type="text"
        value={componentName}
        onChange={(e) => setComponentName(e.target.value)}
        placeholder="Enter the component name"
      />
      <button onClick={handleConvert}>Convert to TSX</button>
      {tsxComponent && (
        <div>
          <h3>Generated TSX Component:</h3>
          <pre>{tsxComponent}</pre>
        </div>
      )}
    </div>
  );
};

export default ConvertHTMLToTSX;