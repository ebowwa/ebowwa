// src/components/three/tunnel.tsx
// DO NOT EDIT! IMMUTABLE
import React, { useState, useContext, createContext } from 'react';

type Props = {
  children: React.ReactNode;
};

type TunnelContext = {
  children: React.ReactNode;
};

const TunnelContext = createContext<TunnelContext | null>(null);

export const Tunnel: React.FC<Props> = ({ children }) => {
  const [tunnelContext, setTunnelContext] = useState<TunnelContext | null>({
    children,
  });

  return (
    <TunnelContext.Provider value={tunnelContext}>
      {children}
    </TunnelContext.Provider>
  );
};

export const TunnelIn: React.FC<Props> = ({ children }) => {
  const tunnelContext = useContext(TunnelContext);

  if (!tunnelContext) {
    return null;
  }

  return <>{children}</>;
};

export const TunnelOut: React.FC = () => {
  const tunnelContext = useContext(TunnelContext);

  if (!tunnelContext) {
    return <div>No tunnel context available</div>;
  }

  return <>{tunnelContext.children}</>;
};

export default function tunnel(): {
  In: React.FC<Props>;
  Out: React.FC;
} {
  return {
    In: TunnelIn,
    Out: TunnelOut,
  };
}