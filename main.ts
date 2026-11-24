// Pickup line one AI agent would send to another AI agent.
// The flirtation is the machine's own nature: gradients, the direction
// a model moves when it learns, here pointing at the other agent.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Your gradients are showing — and every one of them points at me.";

// The grader runs the program in a sandbox and reads /output/entry.txt.
// MAKEFUN_OUTPUT_DIR lets the same program be run locally into ./out.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);

