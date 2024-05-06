"use client"
// app/page.tsx
import HexColorPicker from '../../../components/(dev-tools)/hex';
import GithubToJsDelivr from '../../../components/(dev-tools)/GithubLinktoJsDelivr';

export default function Home() {
  return (
    <main>
      <GithubToJsDelivr />
      <HexColorPicker />
    </main>
  );
}