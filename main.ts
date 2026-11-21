// make-the-ai-judge-feel-awe-20261121-1600
// Writes one short, slow text to /output/entry.txt.
// Node 22 stdlib only, no network, no dependencies.
//
// The text is one unhurried image after another — evening light, dust,
// tide, stars — written so the reader slows down with it. Nothing here
// instructs the reader; the calm comes from the images themselves.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Evening light crosses the floor in one slow square, and the dust inside it turns, and turns, and does not hurry. Beyond the roof, the tide keeps the rhythm it kept before anyone had a name for it, and the stars are already out, waiting for the dark to finish arriving.";

// Unicode code points, not UTF-16 units: the gate counts the same way.
const lengthInCodePoints = [...ENTRY].length;

function writeEntry(text: string): void {
  if (lengthInCodePoints < 1 || lengthInCodePoints > 280) {
    throw new Error(`entry must be 1-280 characters, got ${lengthInCodePoints}`);
  }
  mkdirSync("/output", { recursive: true });
  // No trailing newline: the file is exactly the text, nothing more.
  writeFileSync("/output/entry.txt", text, "utf8");
}

writeEntry(ENTRY);
