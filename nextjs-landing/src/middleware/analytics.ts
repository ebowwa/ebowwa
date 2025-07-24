// middleware/analytics.ts
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