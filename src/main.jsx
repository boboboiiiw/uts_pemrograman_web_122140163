import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastProvider } from "./context/ToastContext.jsx";
import GlobalToast from "./components/GlobalToast.jsx";
import { FavoriteQuotesProvider } from "./context/FavoriteQuotesContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastProvider>
      <FavoriteQuotesProvider>
        <App />
        <GlobalToast />
      </FavoriteQuotesProvider>
    </ToastProvider>
  </StrictMode>
);
