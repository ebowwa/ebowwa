# Google Sheets Template for Interesting Links

## Setup Instructions

1. Create a new Google Sheet
2. Set up the following column headers in the first row:
   - `slug` - Unique identifier for the link (e.g., "my-awesome-article")
   - `title` - Title of the link
   - `description` - Brief description
   - `type` - Type of link: "notion", "chatgpt", or "other"
   - `date` - Date in format YYYY-MM-DD
   - `url` - Optional: Direct URL to the resource
   - `content` - HTML content for the link detail page
   - `tags` - Comma-separated tags (e.g., "react,frontend,development")
   - `related` - Comma-separated slugs of related links

## Example Row

| slug | title | description | type | date | url | content | tags | related |
|------|-------|-------------|------|------|-----|---------|------|---------|
| awesome-react-guide | Awesome React Guide | A comprehensive guide to React best practices | other | 2024-01-15 | https://example.com/react-guide | `<p>This is an amazing guide...</p>` | react,frontend,guide | react-hooks-tips,component-patterns |

## Environment Variables

Add these to your `.env` file:

```
# Google Sheets Integration
NEXT_PUBLIC_GOOGLE_SHEETS_ID=your_sheet_id_here
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n"
```

## Google Service Account Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable the Google Sheets API
4. Create a Service Account
5. Generate a JSON key for the service account
6. Share your Google Sheet with the service account email
7. Extract the email and private key from the JSON and add to your environment variables

## Sheet Permissions

Make sure to share your Google Sheet with the service account email with "Viewer" permissions.

## Notes

- The system will fall back to static data if Google Sheets is not configured
- Data is cached for 5 minutes to improve performance
- All fields are optional except `title`
- HTML content in the `content` field will be rendered on the detail pages 