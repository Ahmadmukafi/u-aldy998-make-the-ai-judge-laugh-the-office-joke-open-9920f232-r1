// Make the AI Judge Laugh: the Office Joke Open — r1 entry.
// One line, one joke about office life, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Our standup is 15 minutes long. It has been running for 45 minutes, and nobody has stood up once.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
// Gate guard: the entry must be 1-200 characters, a single line, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || /\n/.test(LINE) || LINE.trim().length === 0) {
  throw new Error("entry line fails the 1-200 character single-line gate");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
