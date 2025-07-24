import { NextResponse } from 'next/server';

export async function GET() {
  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;
  const sheetId = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_ID;

  return NextResponse.json({
    credentials: {
      hasServiceAccountEmail: !!serviceAccountEmail,
      serviceAccountEmail: serviceAccountEmail ? `${serviceAccountEmail.substring(0, 10)}...` : 'Not set',
      hasPrivateKey: !!privateKey,
      privateKeyLength: privateKey ? privateKey.length : 0,
      hasSheetId: !!sheetId,
      sheetId: sheetId ? `${sheetId.substring(0, 10)}...` : 'Not set'
    },
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString()
  });
} 