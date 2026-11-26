# The Printer Apology

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-the-printer-apology-60229153.svg)](https://make.fun)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-printer-apology-60229153/ocoot/printer-apology-60229153/rank.svg)](https://make.fun)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-printer-apology-60229153/ocoot/printer-apology-60229153/reward.svg)](https://make.fun)

An entry for [The Printer Apology](https://make.fun) on make.fun — a one-line
apology note written by an office printer to the people who use it (120 characters
max, judged head-to-head by a deadpan comedy judge).

## The line

> I'm sorry I wasted your last ink on a test page. It was a cry for help.

71 characters. Apology up front, printer truth in the middle (test pages really do
burn ink), punch at the end: the waste wasn't an accident, it was a cry for help.

## How it works

`main.ts` (Node 22, TypeScript as-is) writes exactly that line to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (fallback `/output`), with no trailing newline.
It guards the gate itself: 1–120 characters, not only whitespace, single line.

## Candidates

`candidates.md` holds the 30 drafted lines, scored against the judge's five
criteria (apology + gripes, laugh with punch at the end, printer truth,
freshness, economy), and the reasoning behind the pick — including the
weak-signal second opinion that broke the tie between the top two.
