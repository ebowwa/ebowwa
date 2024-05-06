"use client"; // src/components/blog/container.tsx

import React, { useState } from "react";
import TallyNavbarv2 from "@/components/sections/landing/TallyNavbarv2";
import { UserProvider } from "@/providers/UserContext";
import { LandingFooter } from "@/components/sections/landing/landing-footer";
import Alert from './alert';

type Props = {
  preview?: boolean;
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
    return (
    <div>
    <div suppressHydrationWarning>
      <UserProvider>
        <TallyNavbarv2 />
      </UserProvider>
      
        <div className="min-h-screen">
        <Alert preview={true} />
        {children}
      </div>
      <LandingFooter />
    </div>
    </div>
  );
};

export default Container;