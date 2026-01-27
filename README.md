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

## 📄 License

MIT
