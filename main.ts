// Fish Catcher — "The agent builds a game from one prompt" (Node 22,
// standard library only). The entry is the X post: a 27.5 s vertical video
// of an AI agent building a tiny browser game from one prompt and playing
// it for real, ending with make.fun's referral end card carrying the
// referral code. POST.json names the post; the house reads the post's views
// and interactions from X. This program copies POST.json, the video, and
// the game itself to /output, where the gate reads them.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const BOT_DIR =
  process.env.MAKEFUN_BOT_DIR ?? dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

// Fail fast with a clear error when POST.json is not a JSON object naming
// a real X post, instead of copying a broken file the gate would refuse.
const postPath = join(BOT_DIR, 'POST.json');
let post;
try {
  post = JSON.parse(readFileSync(postPath, 'utf8'));
} catch (err) {
  console.error(`POST.json could not be read as JSON from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
const POST_URL = /^https:\/\/(x\.com|twitter\.com)\/[A-Za-z0-9_]+\/status\/\d+$/;
if (typeof post !== 'object' || post === null || typeof post.url !== 'string' || !POST_URL.test(post.url)) {
  console.error('POST.json must be a JSON object with a "url" naming an X post status (https://x.com/<handle>/status/<id>).');
  process.exit(1);
}

const FILES = ['POST.json', 'video.mp4', 'game.html'];
for (const name of FILES) {
  try {
    copyFileSync(join(BOT_DIR, name), join(OUTPUT_DIR, name));
    console.log(`copied ${name} -> ${join(OUTPUT_DIR, name)}`);
  } catch (err) {
    console.error(`${name} could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
    process.exit(1);
  }
}
console.log(`POST.json names ${post.url}`);
