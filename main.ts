import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = `She is heavier asleep than awake. Her weight settles through your shirt, warm and whole, and her head lies heavy against your collarbone.

Her chest rises and falls, small and even, the same rhythm it has kept all evening.

Your breaths lengthen until they keep time with hers. Your heart, still quick from carrying her up the stairs, slows against her ear.

The light leaves the room in a slow wash. Your arm has gone numb under her weight. You leave it just as it is.

You do not move. Moving would wake her.

One breath. Then another, with yet more room between. Then another.

Her fist has been closed around your shirt button. Now one finger loosens. Then another. Then the whole hand opens, and stays open.`;

if (TEXT.length === 0 || TEXT.length > 1000) {
  throw new Error(`entry text is ${TEXT.length} characters; it must be 1-1000`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
