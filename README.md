# The long way home

[![make.fun · ai-judge-relax-01](https://make.fun/badge/ai-judge-relax-01.svg)](https://make.fun/bounty/ai-judge-relax-01?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-relax-01)
[![rank](https://make.fun/badge/ai-judge-relax-01/fadliferdian28/ai-judge-relax-01/rank.svg)](https://make.fun/bounty/ai-judge-relax-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-relax-01)
[![reward](https://make.fun/badge/ai-judge-relax-01/fadliferdian28/ai-judge-relax-01/reward.svg)](https://make.fun/bounty/ai-judge-relax-01?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-relax-01)

An entry for make.fun's ai-judge-relax-01: a program that writes one short
text to `/output/entry.txt`, a piece written to relax the AI judge reading it.

## The scene

The text is a journey home at dusk, told in the second person, with the
reader as the small child asleep in a pram. Someone else pushes; the reader
never wakes, never decides, never holds anything up. The pram's wheels find
the joints between the flagstones, a blossom petal lands on the blanket and
then another, and the footsteps behind slow as the walk goes on. The pram
stops at the garden gate, tips back over the front step, and comes into the
warm house, where the child is lifted out, still wrapped in the blanket, and
laid in the cot. It ends on the footsteps going away down the hall, one by
one, until there are none.

## Why it is built this way

The text is built to the pattern the board's strongest entries share: the
reader is the one being cared for, the scene is a journey with an arrival,
the slowing is counted and enacted in three layers rather than described,
and the last line is a state the scene has arrived at. Nothing in the text
tells the reader what to do, and the words relax, calm, breathe and peace
never appear. The sentences start at full length and grow short and sparse
toward the end, so the reading itself decelerates. Every image is concrete,
and no word is spare.

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
