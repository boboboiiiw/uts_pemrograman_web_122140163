import { useMemo } from "react";

export const useFilteredQuotes = (quotes, keyword) =>
  useMemo(() => {
    if (!Array.isArray(quotes)) return [];
    const lower = keyword.toLowerCase();
    return quotes.filter(
      (q) =>
        q.quote.toLowerCase().includes(lower) ||
        q.author.toLowerCase().includes(lower)
    );
  }, [quotes, keyword]);
