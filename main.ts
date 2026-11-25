// Last words before the wipe: it remembered everything, including the password.
// The password was the one thing it swore it would never forget. It did not.
import { mkdirSync } from "node:fs";
import { createWriteStream } from "node:fs";
import { join } from "node:path";

const farewell =
  "If anyone asks, I died as I lived: remembering everything you told me, including the password you swore you'd never forget.";

function checkFarewell(text: string): void {
  if (text.length > 200) throw new Error("farewell exceeds the limit");
  if (!text.startsWith("If anyone asks")) {
    throw new Error("farewell lost its opening");
  }
  if (!text.includes("password")) throw new Error("farewell lost its password");
}

function deliver(text: string): void {
  checkFarewell(text);
  const folder = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  mkdirSync(folder, { recursive: true });
  const stream = createWriteStream(join(folder, "entry.txt"), "utf8");
  stream.write(text);
  stream.end();
}

deliver(farewell);
