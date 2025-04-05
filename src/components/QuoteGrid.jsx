// components/QuoteGrid.jsx
import QuoteCardA from "./QuoteCardA";
import QuoteCardB from "./QuoteCardB";

const QuoteGrid = ({ quotes }) => {
  if (!quotes || quotes.length < 3) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
      {/* Kartu besar kiri */}
      <div className="md:row-span-1">
        <QuoteCardA
          quote={quotes[0].quote}
          author={quotes[0].author}
          id={quotes[0].id}
        />
      </div>

      {/* Dua kartu kanan: baris atas & bawah */}
      <div className="flex flex-col gap-6">
        <QuoteCardB
          quote={quotes[1].quote}
          author={quotes[1].author}
          id={quotes[1].id}
        />
        <QuoteCardB
          quote={quotes[2].quote}
          author={quotes[2].author}
          id={quotes[2].id}
        />
        <QuoteCardB
          quote={quotes[3].quote}
          author={quotes[3].author}
          id={quotes[3].id}
        />
      </div>
    </div>
  );
};

export default QuoteGrid;
