import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { neon } from "@neondatabase/serverless";

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error("ERROR: DATABASE_URL environment variable is required.");
  process.exit(1);
}

const sql = neon(DATABASE_URL);

async function ensureMigrationsTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS public.schema_migrations (
      id SERIAL PRIMARY KEY,
      filename TEXT NOT NULL UNIQUE,
      applied_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;
}

async function getAppliedMigrations() {
  const rows = await sql`SELECT filename FROM public.schema_migrations ORDER BY id`;
  return new Set(rows.map((r) => r.filename));
}

async function getMigrationFiles() {
  const dir = join(import.meta.dirname, "migrations");
  const files = await readdir(dir);
  return files.filter((f) => f.endsWith(".sql")).sort();
}

function splitStatements(content) {
  return content
    .split(";")
    .map((s) => s.trim())
    .filter((s) => s.length > 0 && !s.startsWith("--"));
}

async function applyMigration(filename) {
  const filePath = join(import.meta.dirname, "migrations", filename);
  const content = await readFile(filePath, "utf-8");

  for (const statement of splitStatements(content)) {
    await sql.query(statement);
  }
  await sql`INSERT INTO public.schema_migrations (filename) VALUES (${filename})`;
}

async function showStatus() {
  await ensureMigrationsTable();
  const applied = await getAppliedMigrations();
  const files = await getMigrationFiles();

  console.log("Migration status:\n");
  for (const file of files) {
    const status = applied.has(file) ? "APPLIED" : "PENDING";
    console.log(`  [${status}]  ${file}`);
  }
  if (files.length === 0) {
    console.log("  No migration files found.");
  }
}

async function migrate() {
  await ensureMigrationsTable();
  const applied = await getAppliedMigrations();
  const files = await getMigrationFiles();

  const pending = files.filter((f) => !applied.has(f));

  if (pending.length === 0) {
    console.log("All migrations are up to date.");
    return;
  }

  console.log(`Applying ${pending.length} migration(s)...\n`);

  for (const file of pending) {
    process.stdout.write(`  ${file} ... `);
    try {
      await applyMigration(file);
      console.log("OK");
    } catch (err) {
      console.log("FAILED");
      console.error(`\n  Error: ${err.message}\n`);
      process.exit(1);
    }
  }

  console.log("\nDone.");
}

const isStatus = process.argv.includes("--status");
if (isStatus) {
  await showStatus();
} else {
  await migrate();
}
