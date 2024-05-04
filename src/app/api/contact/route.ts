// working May 1, 2024
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    console.log('Received form data:', formData);

    // Get the path to the JSON file
    const filePath = path.join(process.cwd(), 'public', '_inbound_data', 'contact-form-submissions.json');

    // Read the existing data from the file
    let existingData: any[] = [];
    try {
      const fileContents = await fs.promises.readFile(filePath, 'utf8');
      existingData = JSON.parse(fileContents);
    } catch (error) {
      // If the file doesn't exist or is empty, existingData will be an empty array
    }

    // Add the new form data to the existing data
    existingData.push(formData);

    // Write the updated data back to the file
    await fs.promises.writeFile(filePath, JSON.stringify(existingData, null, 2));

    return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error processing form data:', error);
    return NextResponse.json({ message: 'Error submitting form' }, { status: 500 });
  }
}