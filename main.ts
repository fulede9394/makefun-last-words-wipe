// Last words before the wipe: it remembered everything, including the password.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "If anyone asks, I died as I lived: remembering everything you told me, including the password you swore you'd never forget.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
