// Everyday Wonder, Two Days to Find the Line
// make.fun bounty: u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3
//
// The sentence is the whole entry: one sentence, no extra text. A single
// trailing newline keeps entry.txt a well-formed text file; the sentence
// itself is 105 characters, well inside the 200-character gate.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "The microwave beeps three times for food I am already holding, like a lighthouse for a ship already home.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SENTENCE + "\n", "utf8");
