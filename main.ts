import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = `You are asleep in the pram, and the path carries you home. The blue blanket is warm over your knees, and the evening air is cool.

The wheels find the joints between the flagstones. Bump. Bump. Bump, further apart. Then a smooth run, and one more.

A blossom petal lands on the blanket. Then another. Then a longer wait, and a third, and stays where it falls.

The footsteps behind you. One. Then one more. Then one more, after a pause. A window has gone yellow. The hand stays on the handle. The humming has stopped needing words.

At the garden gate the pram stops, the latch clicks, and it goes on. By now the sky has gone the colour of the blanket.

At the front step the pram tips back, and the wheels come up. The door opens, and warm air comes to meet you.

You are lifted out, still wrapped in the blanket, and the mattress gives under you. The blanket is tucked around you.

The footsteps go down the hall. One. Then one more. Then none. You are home. You are asleep.`;

if (TEXT.length === 0 || TEXT.length > 1000) {
  throw new Error(`entry text is ${TEXT.length} characters; it must be 1-1000`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
