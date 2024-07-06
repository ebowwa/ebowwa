// middleware/index.ts
/**
 * 
 Server-Side Client ID Management: If you want to ensure that each user has a unique identifier for tracking purposes, this middleware snippet is crucial. It manages the _ga cookie to maintain a consistent client ID across user sessions.

Enhanced Security and Control: By setting the Content Security Policy headers, you can control which scripts are allowed to run on your site, enhancing security.
 */
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import crypto from 'crypto';

export async function middleware(request: NextRequest) {
  if (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID) {
    const response = NextResponse.next();

    // Check if the _ga cookie exists
    const gaClientId = request.cookies.get('_ga');
    if (gaClientId) {
      response.cookies.set('_ga', gaClientId.value, {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 63072000, // 2 years
      });
    } else {
      // Generate a new client ID
      const newClientId = `GA1.1.${crypto.randomUUID().replace(/-/g, '')}.${Date.now()}`;
      response.cookies.set('_ga', newClientId, {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 63072000, // 2 years
      });
    }

    // Set the necessary headers
    response.headers.set(
      'Content-Security-Policy',
      `script-src 'self' 'unsafe-inline' www.googletagmanager.com`
    );
    response.headers.set(
      'X-Content-Security-Policy',
      `script-src 'self' 'unsafe-inline' www.googletagmanager.com`
    );

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/about', '/contact', '/_next/static/*'],
};