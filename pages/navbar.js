import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaMusic } from "react-icons/fa";
import Image from "next/image";

const NavBar = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollToTop(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavItemClick = (navItem) => {
    setSelectedNavItem(navItem);
  };

  const getNavItemContent = (navItem) => {
    return (
      <div className="flex flex-col items-center">
        {navItem === selectedNavItem && (
          <FaMusic className="music-icon" style={{ color: "#ff6600" }} />
        )}
        <span
          className={`navbar-item ${
            navItem === selectedNavItem ? "active" : ""
          }`}
          onClick={() => handleNavItemClick(navItem)}
        >
          {navItem}
        </span>
      </div>
    );
  };
  const handleLogoClick = () => {
    setSelectedNavItem("");
  };

  return (
    <div>
      <nav className="flex justify-between items-center mb-8">
        <div className="logo">
          <Link href="/" onClick={handleLogoClick}>
            SUN HA YOON
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="#education" className="nav-item">
              <span onClick={() => handleNavItemClick("education")}>
                {getNavItemContent("education")}
              </span>
            </Link>
          </li>
          <li>
            <Link href="#philosophy" className="nav-item">
              <span onClick={() => handleNavItemClick("philosophy")}>
                {getNavItemContent("philosophy")}
              </span>
            </Link>
          </li>
          <li>
            <Link href="#contact" className="nav-item">
              <span onClick={() => handleNavItemClick("contact")}>
                {getNavItemContent("contact")}
              </span>
            </Link>
          </li>
        </ul>
      </nav>

      {showScrollToTop && (
        <button
          className="fixed bottom-6 right-6 bg-blue-500 text-white px-4 py-2 rounded-full shadow"
          onClick={scrollToTop}
        >
          Scroll to Top
        </button>
      )}
    </div>
  );
};

export default NavBar;
