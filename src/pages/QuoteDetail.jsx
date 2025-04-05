// pages/QuoteDetail.jsx
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFavoriteQuotes } from "../context/FavoriteQuotesContext";
import { useToast } from "../context/ToastContext";
import QuoteDetailSkeleton from "../components/QuoteDetailSkeleton";

const QuoteDetail = () => {
  const { id } = useParams();
  const quoteId = parseInt(id);
  const [quoteData, setQuoteData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { isFavorited, addFavoriteQuote, removeFavoriteQuote } =
    useFavoriteQuotes();
  const { showToast } = useToast();

  useEffect(() => {
    fetch(`https://dummyjson.com/quotes/${quoteId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Quote tidak ditemukan");
        return res.json();
      })
      .then((data) => {
        setQuoteData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [quoteId]);

  if (loading) return <QuoteDetailSkeleton />;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  const isFav = isFavorited(quoteId);

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <Link
        to="/"
        className="text-[#6B8E75] hover:underline transition inline-block"
      >
        ← Kembali ke Beranda
      </Link>

      <div className="bg-[#F5F8F6] border border-[#D6E4DC] rounded-lg shadow-md p-8 space-y-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-[#3B4F44] text-center leading-relaxed">
          “{quoteData.quote}”
        </h1>
        <p className="text-right text-[#6B8E75] font-medium text-sm">
          – {quoteData.author}
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <button
            onClick={() => {
              if (isFav) {
                removeFavoriteQuote(quoteId);
                showToast("💔 Dihapus dari favorit");
              } else {
                addFavoriteQuote({
                  id: quoteData.id,
                  quote: quoteData.quote,
                  author: quoteData.author,
                });
                showToast("❤️ Ditambahkan ke favorit");
              }
            }}
            className={`px-4 py-2 rounded-md transition text-white ${
              isFav
                ? "bg-red-300 hover:bg-red-400"
                : "bg-[#6B8E75] hover:bg-[#55705E]"
            }`}
          >
            {isFav ? "❤️ Favorit" : "🤍 Tambah ke Favorit"}
          </button>

          <button
            onClick={() => {
              const url = `${window.location.origin}/quote/${quoteId}`;
              navigator.clipboard.writeText(url);
              showToast("🔗 Link quote disalin ke clipboard");
            }}
            className="px-4 py-2 rounded-md bg-[#5D88A6] hover:bg-[#4B738E] text-white transition"
          >
            📋 Salin Link Kutipan
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteDetail;
