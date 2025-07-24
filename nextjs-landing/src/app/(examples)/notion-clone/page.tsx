"use client"

import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Notion Clone</h1>
      <nav>
        <ul>
          <li>
            <Link href="/pages/new">New Page</Link>
          </li>
          <li>
            <Link href="/pages/1">Page 1</Link>
          </li>
          <li>
            <Link href="/pages/2">Page 2</Link>
          </li>
          <li>
            <Link href="/pages/3">Page 3</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}