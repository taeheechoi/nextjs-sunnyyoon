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
        {navItem}
        {navItem === selectedNavItem && (
          <span className="mt-1">
            <FaMusic style={{ color: "#ff6600" }} />
          </span>
        )}
      </div>
    );
  };
  const handleLogoClick = () => {
    setSelectedNavItem("");
  };

  return (
    <div>
      <nav className="flex justify-between items-center mb-8">
        <div className="text-2xl font-bold">
          <Link href="/" onClick={handleLogoClick}>
            SUN HA YOON
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            {/* <Link href="#about"> */}
            {/* <span onClick={() => handleNavItemClick("about")}>
              {getNavItemContent("about")}
            </span> */}
            {/* </Link> */}
          </li>
          <li>
            <Link href="#education">
              {" "}
              <span onClick={() => handleNavItemClick("education")}>
                {getNavItemContent("education")}
              </span>
            </Link>
          </li>
          <li>
            <Link href="#philosophy">
              <span onClick={() => handleNavItemClick("philosophy")}>
                {getNavItemContent("philosophy")}
              </span>
            </Link>
          </li>
          <li>
            <Link href="#contact">
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

      {/* <h1>Welcome</h1> */}
      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            paddingBottom: "0.75rem",
          }}
        >
          <Image
            src="/piano.jpg"
            alt="Piano"
            width={800}
            height={500}
            style={{
              border: "2px solid #ccc", // Add a border
              borderRadius: "10px", // Add rounded corners
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Add a box shadow
              // Add any other desired styles
            }}
          />
        </div>

        <p>
          Are you an experienced pianist looking to take your skills to the next
          level? As an experienced educator from prestigious colleges, I'm here
          to guide you on your piano journey and help you unlock your full
          musical potential.
        </p>
        <p>
          With my extensive background in education and passion for music, I
          specialize in providing personalized lessons tailored to your specific
          needs and goals. Whether you're interested in refining your technique,
          delving into advanced musical concepts, or exploring new genres and
          styles, I'll create a customized learning plan just for you.
        </p>
        <p>
          Together, we'll focus on honing your technique, developing your
          musicality, and expanding your repertoire. I'll provide expert
          guidance, support, and constructive feedback to help you progress and
          achieve your musical aspirations.
        </p>
        <p>
          Embark on this exciting musical journey with a dedicated college
          educator by your side! I'm eager to share my knowledge and expertise
          with you and assist you in discovering the joy of playing and
          accomplishing your musical dreams.
        </p>
      </div> */}
      {/* <hr className="hr-dots-dashed my-4 w-full" /> */}
    </div>
  );
};

export default NavBar;
