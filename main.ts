import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = `The pram moves along the garden path, and you are asleep in it. The blanket is warm, and the air is cool on your face.

The wheels roll over the flagstones, join by join. Bump. Bump. A long smooth run. A bump further on.

A petal falls onto the blanket from the apple tree. Another, after a while. Then a long quiet. A third. It stays.

The footsteps behind the pram. One. A pause. One more. A long pause. The blackbird has sung its last song today.

Your hand has held the blanket's edge all the way. The edge slips from your hand. You do not reach for it.

The pram stops at the gate. The latch clicks. It goes on. The roses by the gate have gone grey.

The pram tilts back over the front step. The wheels lift. The door opens. Warm air comes out to find you.

Arms lift you out, blanket and all. The cot takes you in. The mattress sinks under you. Someone tucks the blanket in.

The house falls quiet. The pram stands still in the dark. It will not move till morning. Neither will you.`;

if (ENTRY.length < 1 || ENTRY.length > 1000) {
  throw new Error(`entry must be 1-1000 chars, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
