import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28">{children}</main>
    </>
  );
};

export default MainLayout;
