import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="max-w-800 mx-auto px-4 py-8 text-base text-secondary font-sans">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
