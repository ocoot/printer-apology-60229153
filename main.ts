// The Printer Apology — make.fun entry (u-eager-stork-81-9647-the-printer-apology-60229153)
// Writes a single one-line apology note from an office printer to
// $MAKEFUN_OUTPUT_DIR/entry.txt (fallback /output), with no trailing newline.
//
// The line (71 chars): a printer apologising for wasting the office's last ink
// on a test page — and admitting the waste was a cry for help. Apology up front,
// printer truth in the middle (test pages really do burn ink), punch at the end.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I'm sorry I wasted your last ink on a test page. It was a cry for help.";

function main(): void {
  // Gate: 1..120 chars, not only whitespace, single line. Also cap bytes at
  // 120 so the entry stays inside the limit however the scorer counts it.
  const bytes = Buffer.byteLength(LINE, "utf8");
  if (LINE.length < 1 || LINE.length > 120 || bytes > 120) {
    throw new Error(`entry length ${LINE.length} chars / ${bytes} bytes outside 1..120`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("entry must be a single line");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  // No trailing newline: char count == byte count (ASCII line).
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
