import { useFavoriteQuotes } from "../context/FavoriteQuotesContext";
import PropTypes from "prop-types";
import { useToast } from "../context/ToastContext";
import { SlShare } from "react-icons/sl";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCallback } from "react";

const QuoteCardA = ({ quote, author, id }) => {
  const { isFavorited, addFavoriteQuote, removeFavoriteQuote } =
    useFavoriteQuotes();
  const liked = isFavorited(id);
  const { showToast } = useToast();

  const handleFavoriteToggle = useCallback(() => {
    if (liked) {
      removeFavoriteQuote(id);
      showToast("💔 Quote dihapus dari favorit");
    } else {
      addFavoriteQuote({ id, quote, author });
      showToast("❤️ Quote ditambahkan ke favorit");
    }
  }, [
    liked,
    id,
    quote,
    author,
    addFavoriteQuote,
    removeFavoriteQuote,
    showToast,
  ]);

  const handleShare = useCallback(() => {
    const shareUrl = `${window.location.origin}/quote/${id}`;
    navigator.clipboard.writeText(shareUrl);
    showToast("🔗 Link quote disalin ke clipboard");
  }, [id, showToast]);

  return (
    <div className="bg-[#F5F8F6] rounded-2xl shadow-xl border border-[#CDE3D4] p-8 h-full flex flex-col justify-center relative">
      <p className="text-3xl font-bold text-[#2E3B3E] leading-relaxed text-center">
        “{quote}”
      </p>
      <p className="text-sm text-[#5F7D75] font-semibold text-right mt-6 pr-2">
        ~ {author}
      </p>

      <div className="flex justify-start items-center mt-4 w-full">
        <button
          onClick={handleFavoriteToggle}
          className="text-xl hover:bg-[#DCE8E0] rounded-full p-1 transition-colors duration-300"
        >
          {liked ? "❤️" : "🤍"}
        </button>

        <button
          onClick={handleShare}
          className="text-sm mt-1 ml-2 hover:bg-[#DCE8E0] rounded-full p-2.5 transition-colors duration-300"
        >
          <SlShare />
        </button>

        <Link
          to={`/quote/${id}`}
          className="text-sm mt-1 ml-2 hover:bg-[#DCE8E0] rounded-full p-2.5 transition-colors duration-300"
          title="Lihat Detail"
        >
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

QuoteCardA.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default QuoteCardA;
