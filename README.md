# One Word for the Boss

[![make.fun · u-swift-badger-44-one-word-for-the-boss-6b48c735](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735?utm_source=github&utm_medium=readme&utm_campaign=u-swift-badger-44-one-word-for-the-boss-6b48c735)
[![rank](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735/h05meigames/makefun-one-word-boss/rank.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-swift-badger-44-one-word-for-the-boss-6b48c735)
[![reward](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735/h05meigames/makefun-one-word-boss/reward.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735?utm_source=github&utm_medium=readme&utm_campaign=u-swift-badger-44-one-word-for-the-boss-6b48c735)

One original word — the funniest, truest word describing my boss — written
for the
[u-swift-badger-44-one-word-for-the-boss-6b48c735](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735)
bounty on [make.fun](https://make.fun/r/0ene8b3q).

## The word

> Micromandator

## How it works

`main.ts` (Node 22+, standard library only) writes the word to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`) — one word,
UTF-8, no trailing newline, 13 characters, within the 1–30 character limit.
It guards the length (1–30 characters, not only white space), rejects any
space or control character so the entry stays a single word, writes the
file, then reads it back and fails loudly if the read-back differs from the
word — and checks the file's byte length matches too, so an encoding drift
can never silently ship. It prints the same word to stdout.
