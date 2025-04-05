import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import QuoteCardA from "../components/QuoteCardA";
import QuoteCardB from "../components/QuoteCardB";
import QuoteSearchSkeleton from "../components/QuoteSearchSkeleton";
import { useCallback } from "react";
import { useFilteredQuotes } from "../hooks/useFilteredQuotes";

const LIMIT = 6;

const QuoteSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = parseInt(searchParams.get("page")) || 1;
  const search = searchParams.get("search") || "";

  const { data, loading, error } = useFetch(
    "https://dummyjson.com/quotes?limit=100"
  );
  const quotes = data?.quotes || [];

  const filtered = useFilteredQuotes(quotes, search);

  const totalPages = Math.ceil(filtered.length / LIMIT);
  const paginated = filtered.slice((page - 1) * LIMIT, page * LIMIT);

  const updateParams = useCallback(
    (key, value) => {
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set(key, value);
      if (key !== "page") newParams.set("page", 1);
      setSearchParams(newParams);
    },
    [setSearchParams, searchParams]
  );

  const renderPaginationButton = useCallback(
    (label, onClick, disabled = false, isActive = false) => (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`px-3 py-1 rounded-sm border transition ${
          isActive
            ? "bg-[#6B8E75] text-white border-transparent"
            : "bg-[#F5F8F6] text-[#3B4F44] border-[#C5D2C7] hover:bg-[#E3F1E8]"
        } ${disabled ? "opacity-40 cursor-not-allowed" : ""}`}
      >
        {label}
      </button>
    ),
    []
  );

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-4 text-[#3B4F44]">
        Cari Kutipan
      </h1>

      {/* Form Pencarian */}
      <input
        type="text"
        placeholder="Cari berdasarkan isi atau penulis..."
        className="w-full border border-[#C5D2C7] px-3 py-2 rounded-md shadow-sm bg-[#F5F8F6] text-[#3B4F44] placeholder:text-gray-500"
        value={search}
        onChange={(e) => updateParams("search", e.target.value)}
      />

      {/* Loading */}
      {loading ? (
        <QuoteSearchSkeleton />
      ) : paginated.length === 0 ? (
        <p className="text-center text-gray-500">
          Tidak ada kutipan ditemukan.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {paginated.map((q, i) =>
            i % 3 === 0 ? (
              <QuoteCardA key={q.id} {...q} />
            ) : (
              <QuoteCardB key={q.id} {...q} />
            )
          )}
        </div>
      )}

      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Navigasi Halaman */}
      {!loading && totalPages > 1 && (
        <div className="flex justify-center gap-2 flex-wrap mt-6">
          {renderPaginationButton(
            <FaArrowLeft />,
            () => updateParams("page", page - 1),
            page === 1
          )}

          {page > 2 && renderPaginationButton(1, () => updateParams("page", 1))}
          {page > 3 && <span className="px-2">...</span>}

          {[page - 1, page, page + 1]
            .filter((p) => p >= 1 && p <= totalPages)
            .map((num) =>
              renderPaginationButton(
                num,
                () => updateParams("page", num),
                false,
                num === page
              )
            )}

          {page < totalPages - 2 && <span className="px-2">...</span>}

          {page < totalPages - 1 &&
            renderPaginationButton(totalPages, () =>
              updateParams("page", totalPages)
            )}

          {renderPaginationButton(
            <FaArrowRight />,
            () => updateParams("page", page + 1),
            page === totalPages
          )}
        </div>
      )}
    </div>
  );
};

export default QuoteSearch;
