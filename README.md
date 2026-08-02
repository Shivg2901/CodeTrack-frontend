# CodeTrack Frontend

Frontend for CodeTrack, built with React and Vite.

## Prerequisites

- Node.js 18+
- npm

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a local env file:

```bash
cp .env.example .env
```

3. Update env values in `.env`.

## Environment Variables

The frontend supports either variable name below:

- `VITE_BACKEND_LINK` (recommended): backend base URL without `/api`
- `VITE_API_BASE_URL` (legacy): backend base URL with or without `/api`

Example:

```env
VITE_BACKEND_LINK=https://codetrack-backend-9val.onrender.com
```

## Scripts

- `npm run dev` - Start local dev server
- `npm run build` - Production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Deploy on Vercel

Use these settings:

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

Set environment variable in Vercel project:

- `VITE_BACKEND_LINK=https://<your-render-backend>.onrender.com`

## Notes

- Do not put database connection strings in frontend env files.
- Frontend API utilities normalize both env formats to avoid `/api/api/...` path issues.
