// One Word for the Boss — u-swift-badger-44-one-word-for-the-boss-6b48c735
//
// Writes ONE original word describing the entrant's boss to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// The gate needs UTF-8 text of 1-30 characters, not only whitespace, a
// single word with no spaces — so the word is checked for length and
// single-word shape before anything is written, and the same word is
// printed to stdout.
//
// The word: "Micromandator" — a micromanager with dictator energy: the
// boss who dictates every keystroke, then demands to be thanked for it.
// It replaced the round-1 word "Meeting-breeder", which named one
// behaviour (spawning meetings); this one names the deeper, more
// universal truth — a boss who controls everything and still acts like
// a ruler — so it is funnier, truer, and fresher: it is a single invented
// portmanteau, not a two-word mashup of a common complaint.

import { mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Micromandator";

const charCount = [...WORD].length;
if (charCount < 1 || charCount > 30) {
  throw new Error(`word must be 1-30 characters, got ${charCount}`);
}
if (WORD.trim().length === 0 || /\s/.test(WORD)) {
  throw new Error("word must be a single word with no spaces");
}
if (/[\r\n\x00-\x1F\x7F]/.test(WORD)) {
  throw new Error("word must not contain control characters");
}
if (WORD !== WORD.trim()) {
  throw new Error("word must not start or end with whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, WORD, "utf8");

// Read back the judged artifact: a truncated or corrupted write must fail
// loudly here instead of silently shipping a broken entry.txt.
const written = readFileSync(outPath, "utf8");
if (written !== WORD) {
  throw new Error("entry.txt read-back does not match the word");
}
// Byte check as well: the gate counts characters, but a file that drifted
// in encoding (BOM, replacement characters) would still be the wrong bytes.
if (statSync(outPath).size !== Buffer.byteLength(WORD, "utf8")) {
  throw new Error("entry.txt byte length does not match the word");
}
process.stdout.write(WORD + "\n");
