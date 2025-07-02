import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interesting Links - Ebowwa Labs',
  description: 'A collection of interesting resources, notes, and conversations worth sharing',
};

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 