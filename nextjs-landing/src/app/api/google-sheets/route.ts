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

    // Check for required environment variables
    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY;

    if (!serviceAccountEmail || !privateKey) {
      console.error('Missing Google Sheets credentials:', {
        hasEmail: !!serviceAccountEmail,
        hasKey: !!privateKey
      });
      return NextResponse.json({ 
        error: 'Google Sheets credentials not configured. Please set GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_PRIVATE_KEY environment variables.' 
      }, { status: 500 });
    }

    console.log('Attempting to connect to Google Sheets with:', {
      sheetId,
      email: serviceAccountEmail,
      hasKey: !!privateKey
    });

    // Initialize the JWT auth client
    const serviceAccountAuth = new JWT({
      email: serviceAccountEmail,
      key: privateKey.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });
    // Authorize to obtain access tokens
    await serviceAccountAuth.authorize();
    
    // Initialize the spreadsheet doc with authentication
    const doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth);

    console.log('Loading sheet info...');
    try {
      await doc.loadInfo();
      console.log('Sheet info loaded successfully:', doc.title);
    } catch (loadError) {
      console.error('Failed to load sheet info:', loadError);
      
      if (loadError instanceof Error && loadError.message.includes('403')) {
        return NextResponse.json({
          error: 'Access denied to Google Sheet. Please ensure: 1) Google Sheets API is enabled in your Google Cloud project, 2) The sheet is shared with your service account email, 3) Your service account has proper permissions.',
          details: loadError.message,
          troubleshooting: {
            sheetId,
            serviceAccountEmail,
            steps: [
              'Go to Google Cloud Console',
              'Enable Google Sheets API for your project',
              `Share the sheet with: ${serviceAccountEmail}`,
              'Give the service account "Viewer" permissions'
            ]
          }
        }, { status: 403 });
      }
      
      throw loadError;
    }

    // Get the first sheet (or specify by title)
    const sheet = doc.sheetsByIndex[0];
    if (!sheet) {
      return NextResponse.json({ error: 'No sheets found in the document' }, { status: 404 });
    }

    console.log('Loading header row...');
    await sheet.loadHeaderRow();
    console.log('Headers:', sheet.headerValues);

    // Validate expected headers
    const expectedHeaders = ['slug', 'title', 'description', 'type', 'date'];
    const missingHeaders = expectedHeaders.filter(header => !sheet.headerValues.includes(header));
    
    if (missingHeaders.length > 0) {
      console.warn('Missing expected headers:', missingHeaders);
    }

    // Get all rows
    console.log('Loading rows...');
    const rows = await sheet.getRows();
    console.log(`Found ${rows.length} rows`);

    // Transform rows to the expected Link format
    const links = rows.map((row, index) => {
      const link = {
        slug: row.get('slug') || `link-${index}`,
        title: row.get('title') || 'Untitled',
        description: row.get('description') || '',
        type: (row.get('type') as 'notion' | 'chatgpt' | 'other') || 'other',
        date: row.get('date') || new Date().toISOString().split('T')[0],
        url: row.get('url') || undefined,
        content: row.get('content') || '',
        tags: row.get('tags') ? row.get('tags').split(',').map((tag: string) => tag.trim()).filter(Boolean) : [],
        related: row.get('related') ? row.get('related').split(',').map((rel: string) => rel.trim()).filter(Boolean) : []
      };
      
      // Clean up undefined url
      if (!link.url) {
        delete (link as any).url;
      }
      
      return link;
    });

    console.log(`Successfully transformed ${links.length} links`);
    return NextResponse.json({ 
      links,
      meta: {
        sheetTitle: doc.title,
        totalRows: rows.length,
        headers: sheet.headerValues,
        missingHeaders: missingHeaders.length > 0 ? missingHeaders : undefined
      }
    }, { status: 200 });
  } catch (error) {
    console.error('Detailed error fetching Google Sheets data:', {
      error: error instanceof Error ? error.message : error,
      stack: error instanceof Error ? error.stack : undefined,
      name: error instanceof Error ? error.name : undefined
    });
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch data from Google Sheets',
        details: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
} 