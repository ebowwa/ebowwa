"use client";
// this component takes html scripts and makes typescript nextjs 14 app router components from the html acting as a convertor

import { FC, useState } from 'react';

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

function convertHTMLToAppRouterTSX(html: string, componentName: string): string {
    const root = new DOMParser().parseFromString(html, 'text/html');
    const mainElement = root.querySelector('main');
    const footerElement = root.querySelector('footer');
    const styleElement = root.querySelector('style');
  
    let tsx = `"use client";\n\n`;
    tsx += `import { FC } from 'react';\n`;
    tsx += `import styles from './${componentName}.module.css';\n\n`;
    tsx += `const ${componentName}: FC = () => {\n`;
    tsx += `  return (\n    <>\n`;
  
    if (mainElement) {
      tsx += `      <main className={styles.main}>\n        ${mainElement.innerHTML.replace(/\n/g, '\n        ').replace(/<br>/g, '<br />').replace(/class=/g, 'className=')}\n      </main>\n`;
    }
  
    if (footerElement) {
      tsx += `      <footer className={styles.footer}>\n        ${footerElement.innerHTML.replace(/\n/g, '\n        ').replace(/<br>/g, '<br />').replace(/class=/g, 'className=')}\n      </footer>\n`;
    }
  
    tsx += `    </>\n  );\n};\n\n`;
    tsx += `export default ${componentName};\n\n`;
  
    let cssStyles = '';
    if (styleElement && styleElement.textContent) {
      const styles = styleElement.textContent.trim();
      if (styles !== '') {
        cssStyles = styles;
      }
    }
  
    return tsx + cssStyles;
  }
  

export default ConvertHTMLToTSX;
