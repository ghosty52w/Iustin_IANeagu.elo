// Elo history for Iustin Alex Neagu.
//
// Add one object per rating observation, in any order (the page sorts by date).
//   date    "YYYY-MM" (rating-list month) or "YYYY-MM-DD"
//   type    "standard" | "rapid" | "blitz"
//   rating  integer Elo
//   source  where the number came from (FIDE list, ChessBase, chess-results, ...)
//   note    optional free text (event, games played, K-factor, ...)
//
// Only record numbers you can trace to a source.
window.ELO_DATA = {
  player: {
    name: "Iustin Alex Neagu",
    fideId: null, // fill in to link the FIDE profile
  },
  entries: [
    {
      date: "2026-10",
      type: "standard",
      rating: 1566,
      source: "ChessBase Players directory (players.chessbase.com)",
      note: "Listed at Elo 1566, age 16. Observed October 2026.",
    },
  ],
};
