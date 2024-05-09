// src/utils/cookie-consent.ts
import { useState, useEffect } from 'react';

interface CookieConsentProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  handleAcceptCookies: () => void;
}

export const useCookieConsent = (): CookieConsentProps => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if the user has already consented to third-party cookies
    const hasConsented = localStorage.getItem('cookieConsent') === 'true';

    // If the user has not consented, show the modal
    if (!hasConsented) {
      setShowModal(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    // Store the user's consent in localStorage
    localStorage.setItem('cookieConsent', 'true');
    // Hide the modal
    setShowModal(false);
  };

  return { showModal, setShowModal, handleAcceptCookies };
};

// This function now accepts showModal and handleAcceptCookies as arguments
export const showCookieConsent = async (showModal: boolean, handleAcceptCookies: () => void) => {
  if (showModal) {
    // Render a modal or prompt to the user
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = `
<div>
  <p>Our application requires third-party cookies to function properly. Please allow third-party cookies for our domain to ensure a smooth experience.</p>
  <button id="accept-cookies">Allow Cookies</button>
</div>
    `;
    document.body.appendChild(modalContainer);

    // Wait for the user to accept or dismiss the modal
    return new Promise<void>((resolve) => {
      const handleModalClose = () => {
        document.body.removeChild(modalContainer);
        handleAcceptCookies();
        resolve();
      };
      modalContainer.querySelector('#accept-cookies')?.addEventListener('click', handleModalClose);
    });
  }
};