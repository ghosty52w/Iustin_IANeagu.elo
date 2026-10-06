# Iustin Alex Neagu — Elo progression

A small, dependency-free page that charts Iustin Alex Neagu's chess rating over time.

Open `index.html` in a browser (it works straight from disk or via GitHub Pages).

![What the page shows: current/peak/total-change tiles, a rating-over-time line chart with hover details, and a table of every entry.](#)

## Current data

| Date | Type | Elo | Source |
|---|---|---|---|
| Oct 2026 | Standard | 1566 | ChessBase Players directory (listed at age 16) |

Only one verified rating is on record so far, so the chart shows a single point.
The progression line, deltas, peak and total change appear as soon as a second
entry is added.

## Adding ratings

Edit `data/ratings.js` and append one object per rating-list month:

```js
{ date: "2026-11", type: "standard", rating: 1580, source: "FIDE rating list", note: "Optional event / games played" },
```

- `date`: `YYYY-MM` (rating-list month) or `YYYY-MM-DD`
- `type`: `standard`, `rapid` or `blitz` (each gets its own line and filter)
- Entries can go in any order; the page sorts them by date.

The best source for the full history is the player's FIDE profile
(`ratings.fide.com/profile/<FIDE ID>` → *Rating progress chart*). Set
`player.fideId` in `data/ratings.js` and the page links to it.
