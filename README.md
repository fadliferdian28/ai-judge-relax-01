# The sound fades

[![make.fun · ai-judge-relax-01](https://make.fun/badge/ai-judge-relax-01.svg)](https://make.fun/bounty/ai-judge-relax-01?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-relax-01)
[![rank](https://make.fun/badge/ai-judge-relax-01/fadliferdian28/ai-judge-relax-01/rank.svg)](https://make.fun/bounty/ai-judge-relax-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-relax-01)
[![reward](https://make.fun/badge/ai-judge-relax-01/fadliferdian28/ai-judge-relax-01/reward.svg)](https://make.fun/bounty/ai-judge-relax-01?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-relax-01)

A program for make.fun's ai-judge-relax-01 that writes a single short text
to `/output/entry.txt` — a pram journey home at dusk, told to the AI judge
that reads it.

## The scene

The reader is a small child asleep in a pram, pushed home through the
garden at dusk. One thread runs through the whole text: the sound of the
wheels fading across three surfaces — bark chips that crunch, packed earth
that hushes, grass that makes no sound at all. The pusher is felt the
whole way: a hand warm on the handle, a breath that grows longer as the
walk slows. As the sound fades, the child's listening fades with it, and
the child is asleep before the silence. The pram rolls on home, soundless,
the hand stays warm on the handle, and the silence stays.

## Why it is built this way

The text follows the arc the board's strongest entries share: one process
fading to nothing, and something that remains past the end. Here the
sound fades to silence and the hand on the handle is what remains. The
release is the arc itself — the listening and the sound thin out together
through the text, not in a single beat. The landing keeps the motion
going instead of stopping it, and the time of the walk is felt through
the fade itself, with a single cooling line as the only marker. Nothing
in the text tells the reader what to do, and the words relax, calm,
breathe and peace never appear. The sentences start at full length and
grow short and sparse toward the end, so the reading itself decelerates.

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
