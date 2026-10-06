# Iustin-Alex Neagu — FIDE Elo progression

A small static site charting the FIDE ratings of Iustin-Alex Neagu
(FIDE ID [42230217](https://ratings.fide.com/profile/42230217), Romania, born 2010)
across every monthly rating list since August 2023.

Open `index.html` in a browser. It has no build step and no dependencies besides
Google Fonts, so it works straight from disk or on GitHub Pages.

## Live site (GitHub Pages)

Published at **https://ghosty52w.github.io/Iustin_IANeagu.elo/** once Pages is on:

1. Merge this branch into `main`.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*,
   then pick `main` and `/ (root)` and press **Save**.

GitHub builds the site in about a minute. After that, every push to `main`
(for example a new month in `data/ratings.js`) updates the live site.
The empty `.nojekyll` file tells Pages to serve the files as they are.

## What's on the page

- Current standard, rapid and blitz ratings with change, peak and games rated
- National, European and world ranks among active players
- Stepped rating chart for all three time controls, with rated games per list
  underneath, a 1Y / 2Y / All range and per-time-control toggles
- Milestones worked out from the data (first ratings, new hundreds, biggest swings)
- The full list-by-list table

## Where things stand (October 2026 list)

| | Rating | Peak | Since first list |
|---|---|---|---|
| Standard | **1756** | 1756 (Oct 2026) | +651 from 1105 (Oct 2023) |
| Rapid | **1657** | 1657 (Oct 2026) | +462 from 1195 (Aug 2023) |
| Blitz (inactive) | **1449** | 1584 (Jun 2024) | +344 from 1105 (Oct 2023) |

## Updating

Each month, add the new FIDE list as one row in `data/ratings.js` and set
`asOf` to that month:

```js
//  period,   std, std games, rapid, rapid games, blitz, blitz games
["2026-11", 1780, 6, 1657, 0, 1449, 0],
```

Use `null` where FIDE shows no rating. Everything else (cards, chart,
milestones, table) is calculated from these rows. Update `ranks` from the
FIDE profile's Info tab if you want those current too.

Data source: FIDE ratings profile, Progress tab, transcribed from the
October 2026 list.
