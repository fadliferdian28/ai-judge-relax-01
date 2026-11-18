import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = `The pram rolls out through the gate and the wheels find the bark chips. Crunch. Crunch. The sound rises through the blanket into your back.

The chips are thick, and every turn of the wheels has a voice. Crunch. Crunch. Crunch. A longer quiet, and one more. You listen without meaning to.

The crunch thins first. Crunch. A longer quiet. A still longer quiet. The light thins.

The chips thin out under the wheels, and the crunch softens into a hush. The hand on the handle is warm. The air cools on your cheek. The breath behind you grows longer.

A hush. A quiet that stretches. A hush so soft you miss it. The wheels have found the packed earth. You forget to wait for the next one.

No sound at all. The grass gives the wheels nothing. You are asleep before the silence. The blanket keeps its warmth against your back.

The pram rolls on home, soundless. The silence stays. The hand is still warm on the handle, and its warmth reaches your back through the frame.`;

if (entry.length < 1 || entry.length > 1000) {
  throw new Error(`entry must be 1-1000 characters, got ${entry.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry);
