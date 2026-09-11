<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Database schema workflow

This project is in active development and does not require backwards-compatible
database migrations.

- Do not run `db:migrate`, `drizzle-kit migrate`, `db:generate`, or
  `drizzle-kit generate`.
- Update the Drizzle schema in `src/db/schema.ts`, then use `bun run db:push` to
  synchronize it directly with the development database.
- Do not create or commit generated migration artifacts under `drizzle/`.
- When replacing a development table rather than renaming it, use two separate
  schema pushes so Drizzle cannot infer a rename: first remove the old table
  definition and run `bun run db:push --force` to drop it, then add the
  replacement definition and run `bun run db:push --force` again to create it.
  Before each forced push, inspect Drizzle's SQL and confirm that only obsolete
  development data will be destroyed.
