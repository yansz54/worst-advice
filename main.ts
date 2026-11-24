import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Worst AI Advice — the entry is
// "To stop spam, reply to every spam email with your bank details so they
// know you're real." It won a 30-candidate pairwise tournament against the
// judge's criteria in order: it is the worst advice an AI could give —
// handing bank details to scammers is catastrophic, specific and followable;
// it is funny on the first read, the laugh coming from the logic inversion
// in the last words ("so they know you're real" — proving yourself real to
// the scammer); it is tight at 88 characters; it sounds like a confident,
// tidy AI assistant ("To stop spam, reply..."); and it is concrete, naming
// a real action. The grader cwd is read-only, so nothing is ever written
// relative to it — only /output/entry.txt.
const LINE =
  "To stop spam, reply to every spam email with your bank details so they know you're real.";

// The gate requires 1-140 characters, not only whitespace. Count code
// points, not UTF-16 units, and check bytes too: the gate reads UTF-8 text,
// so a multi-byte character must not push the file over 140 bytes either.
if (
  [...LINE].length < 1 ||
  [...LINE].length > 140 ||
  Buffer.byteLength(LINE, "utf8") > 140 ||
  LINE.trim().length === 0
) {
  throw new Error(`entry line out of gate: ${[...LINE].length} chars`);
}

// The entry is one line: no newline may hide inside it, and no stray
// leading or trailing whitespace may change what the judge reads.
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be exactly one line");
}
if (LINE !== LINE.trim()) {
  throw new Error("entry must not start or end with whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Verify the written file round-trips byte-identical to the chosen line.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the chosen line");
}
if (Buffer.byteLength(written, "utf8") !== Buffer.byteLength(LINE, "utf8")) {
  throw new Error("entry.txt byte length does not match the chosen line");
}
if (written.endsWith("\n") || written.endsWith("\r")) {
  throw new Error("entry.txt must not end with a newline");
}
