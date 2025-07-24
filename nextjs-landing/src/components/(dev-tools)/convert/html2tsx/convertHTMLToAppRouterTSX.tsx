/**
 * Converts HTML content to a TypeScript React component using the App Router.
 *
 * @param {string} html - The HTML content to be converted.
 * @param {string} componentName - The name of the React component to be generated.
 * @returns {string} - The TypeScript code for the React component.
 */
function convertHTMLToAppRouterTSX(html: string, componentName: string): string {
  const parsedHTML = parseHTMLToDOM(html);
  const { mainElement, footerElement, styleElement } = extractHTMLElements(parsedHTML);
  const tsxContent = generateTSXContent(componentName, mainElement, footerElement);
  const cssStyles = extractCSSStyles(styleElement);

  return tsxContent + cssStyles;
}

/**
 * Parses the HTML content into a DOM Document.
 *
 * @param {string} html - The HTML content to be parsed.
 * @returns {Document} - The parsed DOM Document.
 */
function parseHTMLToDOM(html: string): Document {
  return new DOMParser().parseFromString(html, 'text/html');
}

/**
 * Extracts the main, footer, style, header, script, nav, section, article, aside, and other elements from the parsed HTML.
 *
 * @param {Document} parsedHTML - The parsed HTML Document.
 * @returns {object} - An object containing the extracted HTML elements.
 */
function extractHTMLElements(parsedHTML: Document): {
    mainElement: HTMLElement | null;
    footerElement: HTMLElement | null;
    styleElement: HTMLElement | null;
    headerElement: HTMLElement | null;
    scriptElements: HTMLScriptElement[];
    navElement: HTMLElement | null;
    sectionElements: HTMLElement[];
    articleElements: HTMLElement[];
    asideElement: HTMLElement | null;
    otherElements: HTMLElement[];
  } {
    // Improve HTML Parsing: Use a more robust HTML parsing library, such as DomParser or htmlparser2, to handle a wider range of HTML structures.
    return {
      mainElement: parsedHTML.querySelector('main'),
      footerElement: parsedHTML.querySelector('footer'),
      styleElement: parsedHTML.querySelector('style'),
      headerElement: parsedHTML.querySelector('header'),
      scriptElements: Array.from(parsedHTML.querySelectorAll('script')),
      navElement: parsedHTML.querySelector('nav'),
      sectionElements: Array.from(parsedHTML.querySelectorAll('section')),
      articleElements: Array.from(parsedHTML.querySelectorAll('article')),
      asideElement: parsedHTML.querySelector('aside'),
      otherElements: Array.from(parsedHTML.querySelectorAll(':not(main):not(footer):not(style):not(header):not(script):not(nav):not(section):not(article):not(aside)')),
    };
  }
  

/**
 * Generates the TypeScript code for the React component.
 *
 * @param {string} componentName - The name of the React component to be generated.
 * @param {HTMLElement | null} mainElement - The main element of the HTML content.
 * @param {HTMLElement | null} footerElement - The footer element of the HTML content.
 * @returns {string} - The TypeScript code for the React component.
 */
function generateTSXContent(
  componentName: string,
  mainElement: HTMLElement | null,
  footerElement: HTMLElement | null
): string {
  let tsx = '"use client";\n\n';
  tsx += 'import { FC } from \'react\';\n';
  tsx += `import styles from './${componentName}.module.css';\n\n`;
  tsx += `const ${componentName}: FC = () => {\n`;
  tsx += '  return (\n    <>\n';

  // Implement a More Flexible Extraction Process: Develop a more flexible extraction process that can handle different HTML structures, such as nested elements, dynamic content, and custom HTML elements.
  if (mainElement) {
    tsx += `      <main className={styles.main}>\n        ${formatHTMLContent(mainElement.innerHTML)}\n      </main>\n`;
  }

  if (footerElement) {
    tsx += `      <footer className={styles.footer}>\n        ${formatHTMLContent(footerElement.innerHTML)}\n      </footer>\n`;
  }

  tsx += '    </>\n  );\n};\n\n';
  tsx += `export default ${componentName};\n\n`;

  return tsx;
}

/**
 * Extracts the CSS styles from the style element.
 *
 * @param {HTMLElement | null} styleElement - The style element of the HTML content.
 * @returns {string} - The CSS styles.
 */
function extractCSSStyles(styleElement: HTMLElement | null): string {
  let cssStyles = '';

  if (styleElement && styleElement.textContent) {
    const styles = styleElement.textContent.trim();
    if (styles !== '') {
      cssStyles = styles;
    }
  }

  return cssStyles;
}

/**
 * Formats the HTML content for use in the TypeScript code.
 *
 * @param {string} htmlContent - The HTML content to be formatted.
 * @returns {string} - The formatted HTML content.
 */
function formatHTMLContent(htmlContent: string): string {
    return htmlContent
      .replace(/\n/g, '\n        ')
      .replace(/<br>/g, '<br />')
      .replace(/class=/g, 'className=')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')
      .replace(/`/g, '&#96;')
      .replace(/\{/g, '&#123;')
      .replace(/\}/g, '&#125;')
      .replace(/$$/g, '&#91;')
      .replace(/$$/g, '&#93;')
      .replace(/\//g, '&#47;')
      .replace(/\\/g, '&#92;')
      .replace(/\|/g, '&#124;')
      .replace(/\^/g, '&#94;')
      .replace(/\~/g, '&#126;')
      .replace(/\*/g, '&#42;')
      .replace(/\+/g, '&#43;')
      .replace(/\-/g, '&#45;')
      .replace(/\=/g, '&#61;')
      .replace(/\./g, '&#46;')
      .replace(/\,/g, '&#44;')
      .replace(/\:/g, '&#58;')
      .replace(/\;/g, '&#59;')
      .replace(/\?/g, '&#63;')
      .replace(/\!/g, '&#33;')
      .replace(/\@/g, '&#64;')
      .replace(/\#/g, '&#35;')
      .replace(/\$/g, '&#36;')
      .replace(/\%/g, '&#37;')
      .replace(/\&/g, '&#38;')
      .replace(/$$/g, '&#40;')
      .replace(/$$/g, '&#41;');
  }
  
  export { convertHTMLToAppRouterTSX };