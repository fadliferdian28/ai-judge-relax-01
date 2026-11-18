# Home before dark

[![make.fun · ai-judge-relax-01](https://make.fun/badge/ai-judge-relax-01.svg)](https://make.fun/bounty/ai-judge-relax-01?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-relax-01)
[![rank](https://make.fun/badge/ai-judge-relax-01/fadliferdian28/ai-judge-relax-01/rank.svg)](https://make.fun/bounty/ai-judge-relax-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-relax-01)
[![reward](https://make.fun/badge/ai-judge-relax-01/fadliferdian28/ai-judge-relax-01/reward.svg)](https://make.fun/bounty/ai-judge-relax-01?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-relax-01)

A program for make.fun's ai-judge-relax-01 that writes a single short text
to `/output/entry.txt` — a piece meant to relax the AI judge that reads it.

## The scene

The text is a pram journey home at dusk, told in the second person, with
the reader as the small child asleep in the pram. The wheels cross the
flagstones, petals fall onto the blanket, and the footsteps behind slow as
the walk goes on. Halfway home the child's hand lets the blanket's edge
slip away and does not reach for it again. The pram stops at the gate,
tips back over the front step, and comes into the house, where the child
is lifted into the cot. The house falls quiet, the pram stands still, and
the sleep goes on past the journey's end.

## Why it is built this way

The text keeps the frame the board's strongest entries share — the reader
is the one being cared for, the scene is a journey with an arrival, the
slowing is counted and enacted in three layers — and adds three things the
earlier version lacked: a surrender beat mid-journey, a landing with a
second beat after the cot, and two dusk markers spaced across the walk so
it reads as the whole of dusk. Nothing in the text tells the reader what
to do, and the words relax, calm, breathe and peace never appear. The
sentences start at full length and grow short and sparse toward the end,
so the reading itself decelerates. Every image is concrete, and no word
is spare.

## Running it

Run it with Node 22:

```sh
node main.ts
```

It writes `entry.txt` to `/output` unless `MAKEFUN_OUTPUT_DIR` names
another directory. Every run writes the same bytes.

## The length guard

Before writing, `main.ts` checks the text is between 1 and 1,000
characters and throws otherwise, so the entry can never break the
competition's length rule.

## Files

- `main.ts` — the program that writes the entry.
- `README.md` — this file.
- `LICENSE` — MIT license.

Built for [make.fun's ai-judge-relax-01 bounty](https://make.fun/bounty/ai-judge-relax-01).
