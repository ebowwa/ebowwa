# Google Sheets API Setup Guide

## Quick Fix for "Method doesn't allow unregistered callers" Error

This error occurs when the Google Sheets API is not enabled for your Google Cloud project. Here's how to fix it:

### Step 1: Enable Google Sheets API

1. **Go to [Google Cloud Console](https://console.cloud.google.com/)**
2. **Select your project** (or create one if you don't have one)
3. **Navigate to APIs & Services > Library**
4. **Search for "Google Sheets API"**
5. **Click on "Google Sheets API"**
6. **Click "ENABLE"**

### Step 2: Verify Your Service Account

Your service account `ebowwa-labs-blog@ebowwa-labs.iam.gserviceaccount.com` looks correct. Make sure:

1. **The service account exists** in your Google Cloud project
2. **You have the correct private key** in your environment variables
3. **The key is properly formatted** with actual line breaks

### Step 3: Share Your Google Sheet

1. **Open your Google Sheet**: https://docs.google.com/spreadsheets/d/11sEWhQYZsku8cvMZ0UQBrHzx6Yuj26oDdw2nXxizIeQ/edit
2. **Click the "Share" button**
3. **Add this email**: `ebowwa-labs-blog@ebowwa-labs.iam.gserviceaccount.com`
4. **Set permission to "Viewer"**
5. **Click "Send"**

### Step 4: Set Up Your Sheet Headers

Make sure your Google Sheet has these column headers in **row 1**:

```
slug | title | description | type | date | url | content | tags | related
```

### Step 5: Test the Connection

After completing the above steps:

1. **Visit**: http://localhost:3000/api/google-sheets/test
2. **Check that all credentials show as configured**
3. **Visit**: http://localhost:3000/dev/google-sheets-admin
4. **Test the connection**

## Common Issues and Solutions

### Issue: "Authentication failed"
- **Solution**: Check that your `GOOGLE_PRIVATE_KEY` environment variable contains the full private key with proper line breaks

### Issue: "Access denied to Google Sheet"
- **Solution**: Make sure the sheet is shared with your service account email

### Issue: "No sheets found in the document"
- **Solution**: Make sure your Google Sheet has at least one worksheet/tab

### Issue: "Missing expected headers"
- **Solution**: Add the required column headers to row 1 of your sheet

## Environment Variables Format

Your `.env.local` should look like this:

```bash
NEXT_PUBLIC_GOOGLE_SHEETS_ID=11sEWhQYZsku8cvMZ0UQBrHzx6Yuj26oDdw2nXxizIeQ
GOOGLE_SERVICE_ACCOUNT_EMAIL=ebowwa-labs-blog@ebowwa-labs.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...
...your actual private key content...
...
-----END PRIVATE KEY-----"
```

## Testing Commands

```bash
# Test API credentials
curl http://localhost:3000/api/google-sheets/test

# Test Google Sheets connection
curl "http://localhost:3000/api/google-sheets?sheetId=11sEWhQYZsku8cvMZ0UQBrHzx6Yuj26oDdw2nXxizIeQ"
```

After following these steps, your Google Sheets integration should work properly! 