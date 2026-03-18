# Alarynt Database Migrations

Manages PostgreSQL schema migrations for the Alarynt Neon database.

## Prerequisites

- Node.js 20+
- A `DATABASE_URL` environment variable pointing to your Neon database

## Setup

```bash
cd database
npm install
```

## Usage

### Run pending migrations

```bash
DATABASE_URL="postgresql://..." npm run migrate
```

### Check migration status

```bash
DATABASE_URL="postgresql://..." npm run migrate:status
```

### Create a new migration

```bash
npm run migrate:create add_status_to_contact_submissions
```

This creates a numbered `.sql` file in `migrations/`.

## How it works

- Migrations live in `migrations/` as numbered SQL files (e.g. `001_create_contact_submissions.sql`)
- A `schema_migrations` table tracks which files have been applied
- Migrations run in filename order; each runs exactly once
- Failed migrations halt execution so you can fix and retry
