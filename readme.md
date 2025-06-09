# ebowwa.xyz

## Requirements
- **Node.js** >= 18
- **pnpm** (see `package.json` for the used version)

## Setup
1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Start the development server:
   ```bash
   pnpm dev
   ```
3. Create a production build:
   ```bash
   pnpm build
   ```

## Environment Variables
Create a `.env` file and define the following variables as needed:

- `NEXT_PUBLIC_BASE_URL` – Base URL of the site (e.g., `https://ebowwa.xyz`). This is used for sitemap generation and will fall back to `https://${process.env.VERCEL_URL}` if unset.
- `NEXT_PUBLIC_EXA_API_KEY` – API key for Exa.ai
- `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` – Google Analytics identifier
- `NEXT_PUBLIC_CONTACT_EMAIL` – Contact email displayed on the site
- `NEXT_PUBLIC_CONTACT_PHONE` – Contact phone number
- `NEXT_PUBLIC_DOB` – Date of birth used in the resume page

Use `.env.example` as a starting point.