"use client";
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 text-white py-4 px-6">
        <h1 className="text-2xl font-bold">My React Flow App</h1>
      </header>
      <main className="flex-1 p-6">{children}</main>
      <footer className="bg-gray-800 text-white py-4 px-6 text-center">
        <p>&copy; 2024 Ebowwa brands</p>
      </footer>
    </div>
  );
};

export default Layout;