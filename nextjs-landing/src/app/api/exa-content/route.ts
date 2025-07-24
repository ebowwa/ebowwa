// src/app/api/exa-content/route.ts
// https://vercel.com/ebowwas-projects/goldson/settings/cron-jobs to manage this 
import { NextResponse } from 'next/server';
import { getExaContent } from '../../../lib/exa-seo/exa';
import { getCachedData, setCachedData } from '../../../lib/exa-seo/cache';
import fs from 'fs';
import path from 'path';

const CACHE_EXPIRATION_TIME = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const topic = searchParams.get('topic');

  if (!topic) {
    return NextResponse.json({ error: 'Topic is required' }, { status: 400 });
  }

  const cacheKey = `exa-content-${topic}`;
  const cachedData = await getCachedData(cacheKey);

  if (cachedData) {
    return NextResponse.json({ message: 'Content generated and stored successfully' });
  }

  const content = await getExaContent(topic);

  if (content.length === 0) {
    return NextResponse.json({ error: 'No relevant content found' }, { status: 404 });
  }

  // Store the generated content in a static HTML file
  const htmlContent = `
    <h1>${topic}</h1>
    ${content.map((item: any) => `
      <h2>${item.title}</h2>
      <p>${item.highlights[0]}</p>
      <p>${item.text}</p>
    `).join('')}
  `;

  const staticDir = path.join(process.cwd(), 'public', 'static');
  const staticFile = path.join(staticDir, `${cacheKey}.html`);
  fs.writeFileSync(staticFile, htmlContent);

  await setCachedData(cacheKey, content, CACHE_EXPIRATION_TIME);

  return NextResponse.json({ message: 'Content generated and stored successfully' });
}