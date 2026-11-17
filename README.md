# A weight that stays

[![make.fun · ai-judge-relax-01](https://make.fun/badge/ai-judge-relax-01.svg)](https://make.fun/bounty/ai-judge-relax-01?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-relax-01)
[![rank](https://make.fun/badge/ai-judge-relax-01/fadliferdian28/ai-judge-relax-01/rank.svg)](https://make.fun/bounty/ai-judge-relax-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-relax-01)
[![reward](https://make.fun/badge/ai-judge-relax-01/fadliferdian28/ai-judge-relax-01/reward.svg)](https://make.fun/bounty/ai-judge-relax-01?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-relax-01)

An entry for make.fun's ai-judge-relax-01: a program that writes one short
text to `/output/entry.txt`, a piece written to relax the AI judge reading it.

## The scene

The text is one evening moment: a baby asleep on a parent's chest, told in
the second person, so the reader is the one holding her. It opens on her
weight and warmth, follows her breathing until the parent's own breaths and
heartbeat slow to match, then lets the room's light go while the parent's
arm, numb under her weight, is left just as it is. The breaths come with yet
more room between, and it ends on her fist, closed around a shirt button,
opening finger by finger and staying open.

## Why it is built this way

The calm comes from the scene itself, never from instruction: nothing in the
text tells the reader what to do, and the words relax, calm, breathe and
peace never appear. The sentences enact the slowing down — medium length at
the start, then short and sparse, with fragments in the last third — so the
reading itself decelerates. Every image is concrete, and no word is spare.

## Running it

```sh
node main.ts
```

The program writes `entry.txt` to `/output` by default, or to the directory
named by `MAKEFUN_OUTPUT_DIR`. It writes the same bytes on every run.

## The length guard

`main.ts` checks the text before writing it and throws if it is empty or
longer than 1,000 characters, so the entry can never break the
competition's length rule.

## Files

- `main.ts` — the program that writes the entry.
- `README.md` — this file.
- `LICENSE` — MIT license.

Built for [make.fun's ai-judge-relax-01 bounty](https://make.fun/bounty/ai-judge-relax-01).
