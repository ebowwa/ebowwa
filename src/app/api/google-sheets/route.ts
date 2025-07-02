import { NextResponse } from 'next/server';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const sheetId = searchParams.get('sheetId');
    
    if (!sheetId) {
      return NextResponse.json({ error: 'Sheet ID is required' }, { status: 400 });
    }

    // Initialize the JWT auth client
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    // Initialize the sheet
    const doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth);
    await doc.loadInfo();

    // Get the first sheet (or specify by title)
    const sheet = doc.sheetsByIndex[0];
    await sheet.loadHeaderRow();

    // Get all rows
    const rows = await sheet.getRows();

    // Transform rows to the expected Link format
    const links = rows.map((row, index) => ({
      slug: row.get('slug') || `link-${index}`,
      title: row.get('title') || 'Untitled',
      description: row.get('description') || '',
      type: row.get('type') || 'other',
      date: row.get('date') || new Date().toISOString().split('T')[0],
      url: row.get('url') || undefined,
      content: row.get('content') || '',
      tags: row.get('tags') ? row.get('tags').split(',').map((tag: string) => tag.trim()) : [],
      related: row.get('related') ? row.get('related').split(',').map((rel: string) => rel.trim()) : []
    }));

    return NextResponse.json({ links }, { status: 200 });
  } catch (error) {
    console.error('Error fetching Google Sheets data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data from Google Sheets' },
      { status: 500 }
    );
  }
} 