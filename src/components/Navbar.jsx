import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaSearch,
  FaHeart,
  FaBookOpen,
  FaFeatherAlt,
} from "react-icons/fa";

const Navbar = () => {
  const { pathname } = useLocation();

  const navItems = [
    { path: "/", icon: <FaHome />, label: "Beranda" },
    { path: "/search", icon: <FaSearch />, label: "Cari" },
    { path: "/favorite", icon: <FaHeart />, label: "Favorit" },
    {
      path: "https://dummyjson.com/docs/quotes",
      icon: <FaBookOpen />,
      label: "Docs API",
      external: true,
    },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-[#8EB397]/90 backdrop-blur-md border border-[#D8E3D7] shadow-lg rounded-xl px-6 py-3 w-[95%] max-w-md">
      {/* Logo & Judul */}
      <Link to={"/"} className="flex items-center justify-center mb-2 gap-2">
        <FaFeatherAlt className="text-[#2E3B3E] text-lg" />
        <h1 className="text-sm sm:text-base font-semibold text-[#2E3B3E] tracking-wide text-center">
          One Quote One Step Ahead
        </h1>
      </Link>

      {/* Menu */}
      <div className="flex justify-between items-center mt-5">
        {navItems.map((item, i) =>
          item.external ? (
            <a
              key={i}
              href={item.path}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center text-xs text-[#2E3B3E] hover:text-white transition"
            >
              {item.icon}
              <span className="mt-1">{item.label}</span>
            </a>
          ) : (
            <Link
              key={i}
              to={item.path}
              className={`flex flex-col items-center text-xs transition ${
                pathname === item.path
                  ? "text-white"
                  : "text-[#2E3B3E] hover:text-white"
              }`}
            >
              {item.icon}
              <span className="mt-1">{item.label}</span>
            </Link>
          )
        )}
      </div>
    </nav>
  );
};

export default Navbar;
