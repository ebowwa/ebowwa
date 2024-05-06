"use client";
import dynamic from "next/dynamic";

const Component = dynamic(() => import("./portals-container"), {
  ssr: false,
});

export default function HomePage() {
  return <Component />;
}