import { useFavoriteQuotes } from "../context/FavoriteQuotesContext";
import QuoteCardA from "../components/QuoteCardA";
import QuoteCardB from "../components/QuoteCardB";

const FavoriteQuotes = () => {
  const { favorites } = useFavoriteQuotes();

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-4 text-[#3B4F44]">
        Quotes Favorit
      </h1>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">
          Belum ada quote yang difavoritkan.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {favorites.map((quote, index) =>
            index % 3 === 0 ? (
              <QuoteCardA key={quote.id} {...quote} />
            ) : (
              <QuoteCardB key={quote.id} {...quote} />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default FavoriteQuotes;
