# Ebowwa.xyz

Ebowwa.xyz is a Next.js 14 project that powers the website at [https://ebowwa.xyz](https://ebowwa.xyz). It uses React Three Fiber for 3D scenes and includes TypeScript, ESLint and Prettier.

## Getting Started

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

The app will be available at `http://localhost:3000`.

## Scripts

- `pnpm lint` – run ESLint with automatic fixes
- `pnpm prettier` – format the codebase
- `pnpm build` – create a production build and generate `public/sitemap.xml`
- `pnpm start` – run the production server

## Environment Variables

Copy `.env.example` to `.env.local` and provide values for:

```bash
NEXT_PUBLIC_CONTACT_EMAIL="you@example.com"
NEXT_PUBLIC_CONTACT_PHONE="+1 (555) 555-5555"
EXA_API_KEY="your_exa_api_key"
NEXT_PUBLIC_DOB="YYYY-MM-DD"
```

## Deployment

The project is ready to deploy on platforms like Vercel. Running `pnpm build` locally produces the same output used in production.

Licensed under the MIT License.
