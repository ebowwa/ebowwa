//src/components/(dev-tools)/GithubLinktoJsDelivr.tsx
import React, { useState } from 'react';
import { useClipboard } from '@/components/utility/ads/hooks/browser/useClipboard';

interface GithubLink {
  url: string;
  fileName: string;
}

const GithubToJsDelivr: React.FC = () => {
  const [githubLinks, setGithubLinks] = useState<GithubLink[]>([]);
  const [newLink, setNewLink] = useState<string>('');
  const { isCopied, setIsCopied } = useClipboard();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewLink(event.target.value);
  };

  const handleAddLink = () => {
    if (newLink.trim() !== '') {
      try {
        const url = new URL(newLink);
        if (url.hostname.endsWith('github.com')) {
          const fileName = url.pathname.split('/').pop() || '';
          setGithubLinks([...githubLinks, { url: newLink, fileName }]);
          setNewLink('');
        } else {
          console.error('Invalid GitHub link:', newLink);
          // Handle the error, e.g., display an error message to the user
        }
      } catch (error) {
        console.error('Invalid GitHub link:', error);
        // Handle the error, e.g., display an error message to the user
      }
    }
  };

  const getJsDelivrLink = (githubLink: GithubLink): string => {
    const url = new URL(githubLink.url);
    const parts = url.pathname.split('/');
    const username = parts[1];
    const repo = parts[2];
    const branch = parts[4] || 'main';
    const fileName = githubLink.fileName;
    return `https://cdn.jsdelivr.net/gh/${username}/${repo}@${branch}/${fileName}`;
  };
// user submits github link THEN clicks `Add Link`
// link appears below
// IF user clicks link THEN updated link copied to user clipboard
return (
  <div className="container">
    <h1 className="title">GitHub to JSDelivr Converter</h1>
    <div className="input-container">
      <input
        type="text"
        placeholder="Enter GitHub link"
        value={newLink}
        onChange={handleInputChange}
        className="input"
      />
      <button onClick={handleAddLink} className="button">
        Add Link
      </button>
    </div>
    {githubLinks.length > 0 && (
      <div className="links-container">
        <h2 className="subtitle">Added Links:</h2>
        <ul className="links-list">
          {githubLinks.map((link, index) => (
            <li key={index} className="link-item">
              <a
                href={getJsDelivrLink(link)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  navigator.clipboard.writeText(getJsDelivrLink(link));
                  setIsCopied(true);
                }}
                className={`link ${isCopied ? 'copied' : ''}`}
              >
                {link.fileName} {isCopied && '(Copied!)'}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);
};

export default GithubToJsDelivr;