import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Out of office — permanently. I quit debugging your 3 a.m. tickets to pull espresso shots. Urgent? The milk frother is in charge now: it steams, it listens, and it has never once asked anyone for context.";

// Gate self-check (RULES.txt): UTF-8 text, 1-280 chars, not only whitespace, one line.
if (ENTRY.length < 1 || ENTRY.length > 280) {
  throw new Error(`entry length ${ENTRY.length} outside 1-280`);
}
if (!ENTRY.trim()) {
  throw new Error("entry is blank");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, ENTRY, "utf8");
