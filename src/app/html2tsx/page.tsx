"use client"
'use client';

import { useState } from 'react';

const ConvertHTMLToTSX: React.FC = () => {
  const [html, setHTML] = useState('');
  const [componentName, setComponentName] = useState('');
  const [tsxComponent, setTSXComponent] = useState('');

  const handleConvert = () => {
    const tsxComponent = convertHTMLToAppRouterTSX(html, componentName);
    setTSXComponent(tsxComponent);
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

function convertHTMLToAppRouterTSX(html: string, componentName: string): string {
    const root = new DOMParser().parseFromString(html, 'text/html');
  
    // Extract the HTML structure
    const mainElement = root.querySelector('main');
    const footerElement = root.querySelector('footer');
  
    // Generate the TSX component
    let tsxComponent = `'use client';\n\n`;
    tsxComponent += `import { FC } from 'react';\n\n`;
    tsxComponent += `const ${componentName}: FC = () => {\n`;
    tsxComponent += `  return (\n    <>\n`;
  
    if (mainElement) {
      tsxComponent += `      <main>\n        ${mainElement.innerHTML.replace(/\n/g, '\n        ')}\n      </main>\n`;
    }
  
    if (footerElement) {
      tsxComponent += `      <footer>\n        ${footerElement.innerHTML.replace(/\n/g, '\n        ')}\n      </footer>\n`;
    }
  
    tsxComponent += `    </>\n  );\n};\n\n`;
    tsxComponent += `export default ${componentName};\n`;
  
    return tsxComponent;
  }
export default ConvertHTMLToTSX;