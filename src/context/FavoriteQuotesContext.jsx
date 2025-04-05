// context/FavoriteQuotesContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const FavoriteQuotesContext = createContext();
export const useFavoriteQuotes = () => useContext(FavoriteQuotesContext);

export const FavoriteQuotesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("favoriteQuotes");
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("favoriteQuotes", JSON.stringify(favorites));
  }, [favorites]);

  const addFavoriteQuote = (quoteObj) => {
    if (favorites.some((q) => q.id === quoteObj.id)) return;
    setFavorites([...favorites, quoteObj]);
  };

  const removeFavoriteQuote = (id) => {
    setFavorites(favorites.filter((q) => q.id !== id));
  };

  const isFavorited = (id) => favorites.some((q) => q.id === id);

  return (
    <FavoriteQuotesContext.Provider
      value={{ favorites, addFavoriteQuote, removeFavoriteQuote, isFavorited }}
    >
      {children}
    </FavoriteQuotesContext.Provider>
  );
};
