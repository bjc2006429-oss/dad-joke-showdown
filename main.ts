// Dad Joke Showdown entry: writes one original dad joke to /output/entry.txt.
// Node 22, standard library only. No network, deterministic: the same text every run.
// Run locally with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "I told my kids I want to be a professional napper when I grow up. They said the pay is terrible, but the hours are dreamy.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
