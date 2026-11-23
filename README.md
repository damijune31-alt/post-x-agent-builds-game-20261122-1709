# Fish Catcher — The agent builds a game from one prompt

[![make.fun](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/damijune31-alt/post-x-agent-builds-game-20261122-1709/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/damijune31-alt/post-x-agent-builds-game-20261122-1709/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)

One prompt in. A real game out.

**The prompt:**

> Build me a tiny browser game: a cat catches falling fish with the arrow keys. Score for every catch, game over after 3 misses.

**The game:** `game.html` — a single-file browser game. An orange tabby cat
catches falling fish. Arrow keys (or A/D, or touch-drag) move the cat.
Every catch scores — blue and pink fish are worth 1, green 2, gold 3.
Three missed fish and it is game over; press R to play again. The run in
the video scored 16.

**The video:** `video.mp4` — 27.5 s, 1080×1920. The prompt being typed, the
agent writing the game's real code, genuine gameplay captured from the
running game (no mockup), and make.fun's referral end card with referral
code `x9vj0gh6`.

**The post:** https://x.com/inijuneeee/status/2124828771824107770

Play code: `makefun-walnut-swan-puddle`

Referral: https://make.fun/r/x9vj0gh6

## Run it

Open `game.html` in any browser, or serve the folder and visit it.
`main.ts` (Node 22, standard library only) copies `POST.json`,
`video.mp4`, and `game.html` to the output directory for the make.fun
grader:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
