import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFound";
import MainLayout from "./layout/MainLayout";
import FavoriteQuotes from "./pages/Favorite";
import QuoteDetail from "./pages/QuoteDetail";
import QuoteSearch from "./pages/QuoteSearch";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<FavoriteQuotes />} />
          <Route path="/quote/:id" element={<QuoteDetail />} />
          <Route path="/search" element={<QuoteSearch />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
