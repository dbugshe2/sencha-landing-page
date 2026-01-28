# Sencha Landing Page

A premium landing page for Sencha, built with a modern full-stack architecture.

## 🚀 Tech Stack

### Frontend

- **Framework:** React 18 with Vite
- **Styling:** Tailwind CSS + Framer Motion for animations
- **UI Components:** Radix UI primitives + Lucide Icons
- **State Management:** TanStack Query (React Query)
- **Routing:** Wouter

### Backend

- **Server:** Express.js (TypeScript)
- **Database:** PostgreSQL with Drizzle ORM
- **Authentication:** Passport.js (Local Strategy)
- **Validation:** Zod

## 📁 Project Structure

```bash
├── client/          # Frontend React application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── hooks/       # Custom React hooks
│   │   ├── pages/       # Page components (Home, etc.)
│   │   └── lib/         # Utility functions and API clients
├── server/          # Express backend
│   ├── routes.ts    # API route definitions
│   ├── storage.ts   # Database access layer
│   └── index.ts     # Server entry point
├── shared/          # Shared types and schemas (Zod/Drizzle)
└── script/          # Build and utility scripts
```

## 🛠 Getting Started

### Prerequisites

- Node.js (v20 or later)
- PostgreSQL database

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables (create a `.env` file if necessary):
   ```env
   DATABASE_URL=your_postgresql_url
   ```

### Development

Start the development server (runs both frontend and backend):

```bash
npm run dev
```

### Build

Generate production build:

```bash
npm run build
```

## 📡 API Endpoints

### Leads

- `POST /api/leads`
  - Creates a new lead capture entry.
  - **Input:** `{ name: string, email: string, message?: string }`

## ☁️ Deployment (from Replit Export)

This project was originally exported from Replit and requires specific configuration for deployment on Vercel.

### Option 1: Vercel (Recommended)

Vercel is ideal for this Vite + Express setup using **Serverless Functions**.

1. **Build Settings:**
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist/public`

2. **Serverless Functions:**
   - Vercel automatically detects the `server/` directory. However, because this is an Express app, you may need a `vercel.json` to route API requests to your bundled server script or use Vercel's Node.js runtime for the `api` folder.
   - **Note:** For the current structure, ensure `dist/index.cjs` is accessible or adapt `server/index.ts` to Vercel's function signature if deploying as standalone functions.

3. **Environment Variables:**
   - `DATABASE_URL`: Your PostgreSQL connection string.
   - `NODE_ENV`: `production`

### Option 2: Replit

Since it originates from Replit, you can simply import the repository back into a Replit Nix workspace and it will run using the provided `.replit` and `nix` configurations.

## 🔄 Migration Guide

> [!IMPORTANT]
> The project is currently being evolved into a Next.js and Prisma-based architecture.

### 1. Frontend: Migrating to Next.js

- Replace `Wouter` with `next/navigation` and `next/link`.
- Move components from `client/src/components` to `src/components`.
- Move pages from `client/src/pages` to the `src/app` directory (App Router).
- Replace `Vite` environment variables with `NEXT_PUBLIC_` prefixes.

### 2. Database: From Drizzle to Prisma

- Initialize Prisma: `npx prisma init`.
- Convert Drizzle schemas in `shared/schema.ts` to `prisma/schema.prisma`.
- Run migrations: `npx prisma migrate dev`.

### 3. Scaling: Postgres Accelerate

- For high-performance data access, integrate **Prisma Accelerate**.
- Update `DATABASE_URL` to the Accelerate connection string.
- Use the Accelerate extension in your Prisma client.

## 🔄 Syncing Vercel & Replit

This project uses a GitHub-centric workflow to keep Vercel and Replit in sync.

1. **Develop on Replit/Local:** Make your changes and test them using `npm run dev`.
2. **Push to GitHub:** Commit and push your changes to your GitHub repository.
3. **Automatic Vercel Deployment:** Vercel is connected to your GitHub repository and will trigger a new deployment automatically on every push.
4. **Pulling Changes:** If updates are made via GitHub or other environments, pull them into Replit using the Git UI or `git pull`.

## 🤖 Replit Agent Instructions

When working with this codebase, Replit Agents must adhere to the following architecture:

- **Database & ORM:** The project uses **Drizzle ORM** for all database operations. The underlying storage is **Prisma Postgres** (Vercel Storage).
- **Schema Management:**
  - All schema definitions are located in `shared/schema.ts`.
  - To update the database schema, modify `shared/schema.ts` and run `npm run db:push`.
- **Environment Variables:**
  - The `DATABASE_URL` secret must be present in both Replit and Vercel.
  - Vercel uses this URL to connect to the Prisma Postgres instance during serverless execution.
- **Vercel Integration:**
  - The `api/` directory contains the serverless entry point for Vercel.
  - Ensure any new backend routes added to `server/routes.ts` are compatible with the Express-to-Vercel bridge in `api/index.ts`.

## 📄 License

MIT
