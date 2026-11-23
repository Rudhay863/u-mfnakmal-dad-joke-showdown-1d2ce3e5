// Dad Joke Showdown entry — program/v1.
// Writes one original dad joke (at most 200 characters) to /output/entry.txt.
// The joke is written to be told out loud: a setup, then a clean pun at the end.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "Why did the clock get fired? It kept tocking back to the boss.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Fail loudly instead of writing an invalid entry.
const chars = [...JOKE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`joke is ${chars.length} characters, must be 1-200`);
}
if (JOKE.trim().length === 0) {
  throw new Error("joke must not be only white space");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, JOKE, "utf8");
console.log(`wrote ${chars.length} characters to ${outDir}/entry.txt`);
console.log(JOKE);
