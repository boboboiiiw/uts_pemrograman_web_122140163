import PropTypes from "prop-types";
import { useFavoriteQuotes } from "../context/FavoriteQuotesContext";
import { SlShare } from "react-icons/sl";
import { useToast } from "../context/ToastContext";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useCallback } from "react";

const QuoteCardB = ({ quote, author, id }) => {
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
    <div className="bg-gradient-to-br from-[#DCE8E0] to-[#F0F7F2] p-6 rounded-xl shadow-lg relative">
      <p className="text-[#41584A] text-base italic font-semibold">"{quote}"</p>
      <p className="mt-4 text-right text-[#556B5A] font-bold text-sm">
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

QuoteCardB.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default QuoteCardB;
