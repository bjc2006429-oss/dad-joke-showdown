// Dad Joke Showdown entry: writes one original dad joke to /output/entry.txt.
// Node 22, standard library only. No network, deterministic: the same text every run.
// Run locally with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "I told my kids I want to be a professional napper when I grow up. They said the pay is terrible, but the hours are dreamy.";

// The gate wants 1-200 characters of UTF-8 text, not only whitespace:
// refuse to write anything else rather than hand the judge a bad file.
if (joke.length < 1 || joke.length > 200 || joke.trim().length === 0) {
  throw new Error(`joke is ${joke.length} characters, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
