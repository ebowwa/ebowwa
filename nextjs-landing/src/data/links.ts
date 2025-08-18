// src/data/links.ts
import { Link } from './types';
import linksData from './links/data';

// Cache for Google Sheets data
let cachedGoogleSheetsData: Link[] | null = null;
let lastFetchTime = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Fetch links from Google Sheets (client-side only)
async function fetchLinksFromGoogleSheets(): Promise<Link[]> {
  if (typeof window === 'undefined') {
    console.warn('fetchLinksFromGoogleSheets called on server-side, using static data');
    return linksData;
  }

  const sheetId = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_ID;
  
  if (!sheetId) {
    console.warn('NEXT_PUBLIC_GOOGLE_SHEETS_ID not configured, using static data');
    return linksData;
  }

  const now = Date.now();
  if (cachedGoogleSheetsData && (now - lastFetchTime) < CACHE_DURATION) {
    return cachedGoogleSheetsData;
  }

  try {
    const response = await fetch(`/api/google-sheets?sheetId=${sheetId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    cachedGoogleSheetsData = data.links;
    lastFetchTime = now;
    
    return data.links;
  } catch (error) {
    console.error('Failed to fetch from Google Sheets, falling back to static data:', error);
    return linksData;
  }
}

// Get all links (from Google Sheets or fallback to static data)
export async function getAllLinks(): Promise<Link[]> {
  if (typeof window !== 'undefined') {
    // Client-side: fetch from API
    return fetchLinksFromGoogleSheets();
  } else {
    // Server-side: use static data for now (could be enhanced for SSR)
    return linksData;
  }
}

// Synchronous version for components that can't handle async
export function getAllLinksSync(): Link[] {
  return linksData;
}

// Get all link slugs for static generation
export function getAllLinkSlugs(): string[] {
  return linksData.map(link => link.slug);
}

// Get a specific link by slug
export function getLink(slug: string): Link | undefined {
  return linksData.find(link => link.slug === slug);
}

// Get links by type
export function getLinksByType(type: 'notion' | 'chatgpt' | 'other'): Link[] {
  return linksData.filter(link => link.type === type);
}

// Get links by tag
export function getLinksByTag(tag: string): Link[] {
  return linksData.filter(link => link.tags?.includes(tag));
}

// Search links by query
export function searchLinks(query: string): Link[] {
  const lowercaseQuery = query.toLowerCase();
  return linksData.filter(link => 
    link.title.toLowerCase().includes(lowercaseQuery) || 
    link.description.toLowerCase().includes(lowercaseQuery) ||
    link.content.toLowerCase().includes(lowercaseQuery) ||
    link.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}

// Async versions for Google Sheets data
export async function getLinksByTypeAsync(type: 'notion' | 'chatgpt' | 'other'): Promise<Link[]> {
  const links = await getAllLinks();
  return links.filter(link => link.type === type);
}

export async function getLinksByTagAsync(tag: string): Promise<Link[]> {
  const links = await getAllLinks();
  return links.filter(link => link.tags?.includes(tag));
}

export async function searchLinksAsync(query: string): Promise<Link[]> {
  const links = await getAllLinks();
  const lowercaseQuery = query.toLowerCase();
  return links.filter(link => 
    link.title.toLowerCase().includes(lowercaseQuery) || 
    link.description.toLowerCase().includes(lowercaseQuery) ||
    link.content.toLowerCase().includes(lowercaseQuery) ||
    link.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}
