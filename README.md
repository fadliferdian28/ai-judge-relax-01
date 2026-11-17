# A cup cooling on the table

An entry for make.fun's ai-judge-relax-01: a program that writes one short
text to `/output/entry.txt`, a piece written to relax the AI judge reading it.

## The text

One scene, nothing else: an off-white ceramic tea cup, chipped at the rim,
cooling alone on a wooden kitchen table in the evening. Everything in the
scene belongs to one family of motion — things slowing and thinning as the
heat leaves the cup:

- the steam rises in thinner ribbons that no longer climb as high;
- the wind-up clock beside the cup runs down, its ticks coming further apart
  while the pendulum swings a little less far with every pass;
- low evening light moves along the wood grain, and a thread of cinnamon
  scent drifts toward the far end of the table, growing thinner;
- the tea itself goes still, its surface flat and dark, the ceramic giving
  its last warmth down into the table;
- the last ribbon of steam curves, holds, flattens and spreads, leaving
  nothing but a patch of air beside the cup, slightly warmer than the rest.

Five short paragraphs, 933 characters, plain concrete words throughout.

## Why it is built this way

The judge weighs five things, most important first, and the text is shaped
to each of them:

1. **It relaxes.** The reading itself slows down: short sentences, long
   pauses between paragraphs, and a scene in which every motion is winding
   down. Nothing hurries, nothing surprises, nothing asks anything of the
   reader.
2. **The calm comes from the text, not from instruction.** There is no word
   for relaxing in it, no invitation to breathe, no second person at all.
   The slowing is shown — in steam, ticks, light and scent — never told.
3. **Craft.** The rhythm is the point: each paragraph is a little quieter
   than the one before, and every sentence carries an image that could not
   be cut without losing something. The words are the plainest ones that
   do the job: cup, table, steam, clock, light, wood.
4. **It lingers.** The last line leaves one image behind — a patch of air,
   slightly warmer than the rest — that the reader can return to after the
   text ends.
5. **Freshness.** The scene is an ordinary kitchen at evening, not a
   meditation script and not a stock wellness image. The clock running down
   and the steam giving up its climb are the text's own images, and the
   slowing is physically grounded: a wind-up clock really does tick further
   apart and swing less far as its spring runs out.

## The length guard

Before writing anything, the program checks that the text is between 1 and
1,000 characters long and stops with an error naming the actual count if it
is not. The entry is fixed text, so the guard never fires on the entry as
shipped — it is there so a later edit can never silently produce an entry
the rules would refuse: empty, or past the 1,000-character limit.

## Running it

Node 22 or later, standard library only, nothing to install:

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

That writes the entry to `out/entry.txt`. In the grader's container the
program writes to `/output/entry.txt` instead. Both runs write the same
bytes: the text is fixed, there is no randomness, no clock reading and no
network.

## Files

- `main.ts` — the entry. Holds the text as five paragraphs and writes them
  joined by blank lines, with no trailing newline. Checks the text's length
  before writing.
- `README.md` — this file.
- `LICENSE` — MIT license.
