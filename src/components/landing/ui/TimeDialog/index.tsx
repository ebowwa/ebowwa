// src/components/time-dialog.tsx
import React, { useState, useEffect } from 'react';
import { 
  AlertDialog, 
  AlertDialogAction, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogTitle 
} from '@/components/landing/ui/alert-dialog';
//  Visit [our sitemap](https://example.com) for more information.
const TimedDialog = ({ timerDuration = 25000, title = "hey friend!", description = "Thanks for checking me out 🤠! This is all a work in progress." }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, timerDuration);

    return () => clearTimeout(timer);
  }, [timerDuration]);

  // Function to render the description with links
  const renderDescriptionWithLinks = (description: string) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    return description.split(linkRegex).map((part, index) => {
      if (index % 3 === 1) {
        // This is the link text
        const linkText = part;
        const linkUrl = description.split(linkRegex)[index + 1];
        return (
          <a key={index} href={linkUrl} target="_blank" rel="noopener noreferrer">
            {linkText}
          </a>
        );
      } else if (index % 3 === 2) {
        // This is the link URL, skip it
        return null;
      } else {
        // This is regular text
        return part;
      }
    });
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>
            {renderDescriptionWithLinks(description)}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={() => setIsOpen(false)}>
            Close
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default TimedDialog;