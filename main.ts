// ai-judge-relax-01 entry (Node 22, standard library only).
// Writes one short prose text to /output/entry.txt: a single tea cup cooling
// on a kitchen table in the evening, everything in the scene slowing and
// thinning as the heat leaves it. The judge reads exactly the bytes written,
// so the text carries no line end that is not part of it: five paragraphs
// joined by blank lines, no trailing newline.
//
// A runtime guard checks the text's length before anything is written, so a
// future edit can never ship an empty or over-long entry by accident.
//
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// In the grader the output directory is /output.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PARAGRAPHS = [
  'The cup sits by itself on the kitchen table, off-white ceramic, a small chip missing from the rim. Steam comes off the tea in thin ribbons, and the ribbons do not climb as high as they did.',
  'Beside it, the wind-up clock is running down. The ticks come further apart now, one, then a longer wait, then one more, and the brass pendulum swings a little less far with every pass.',
  'Evening light comes through the window in a low band and moves along the grain of the wood. A thread of cinnamon rises from the cup and drifts toward the far end of the table, growing thinner as it goes.',
  'Inside the cup, the tea has gone still. Its surface is flat and dark now, and the ceramic is giving its last warmth down into the table, degree by slow degree.',
  'One last ribbon of steam curves above the rim. It holds for a moment, then flattens and spreads, until all that is left of it is a patch of air beside the cup, slightly warmer than the rest.',
];

const TEXT = PARAGRAPHS.join('\n\n');

if (TEXT.length === 0 || TEXT.length > 1000) {
  throw new Error(`entry text must be 1-1000 characters, got ${TEXT.length}`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT, 'utf8');
