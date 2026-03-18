import { readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const name = process.argv[2];
if (!name) {
  console.error("Usage: npm run migrate:create <migration_name>");
  console.error("Example: npm run migrate:create add_status_to_contact_submissions");
  process.exit(1);
}

const dir = join(import.meta.dirname, "migrations");
const files = (await readdir(dir)).filter((f) => f.endsWith(".sql")).sort();

const lastNumber = files.length > 0 ? parseInt(files[files.length - 1].split("_")[0], 10) : 0;
const nextNumber = String(lastNumber + 1).padStart(3, "0");
const filename = `${nextNumber}_${name}.sql`;
const filePath = join(dir, filename);

await writeFile(filePath, `-- ${name.replace(/_/g, " ")}\n\n`, "utf-8");

console.log(`Created: migrations/${filename}`);
