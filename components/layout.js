import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="mx-auto px-4 py-8 text-primary sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl text-base font-sans">
      <Navbar />
      <div className="mt-2 p-5">{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
