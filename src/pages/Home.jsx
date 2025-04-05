import useFetch from "../hooks/useFetch";
import QuoteGrid from "../components/QuoteGrid";
import QuoteGridSkeleton from "../components/QuoteGridSkeleton";
import { useToast } from "../context/ToastContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const { data, loading, error } = useFetch("https://dummyjson.com/quotes");
  const { showToast } = useToast();

  // Optional: Tampilkan toast jika error
  useEffect(() => {
    if (error) {
      showToast(`🚨 ${error}`);
    }
  }, [error, showToast]);

  const renderContent = () => {
    if (loading) return <QuoteGridSkeleton />;

    if (error) return <p className="text-center text-red-500">{error}</p>;

    if (!data?.quotes?.length)
      return (
        <p className="text-center text-gray-500">Tidak ada data kutipan.</p>
      );

    return <QuoteGrid quotes={data.quotes.slice(0, 5)} />;
  };

  return (
    <div className="mx-auto p-6 pb-30">
      <h1 className="text-3xl font-bold text-center mb-4 text-[#3B4F44]">
        Quotes Inspiratif
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Temukan kutipan inspiratif untuk memotivasi diri Anda.
      </p>

      {renderContent()}

      <div className="w-full flex justify-center mt-6">
        <Link
          to="/quotes"
          className="mx-auto text-center bg-[#6B8E75] text-white py-2 px-4 rounded-lg hover:bg-[#5A7B65] transition duration-300"
        >
          Lihat Semua Kutipan
        </Link>
      </div>
    </div>
  );
};

export default Home;
