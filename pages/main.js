import React, { useEffect, useState } from "react";
import Link from "next/link";

const Main = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

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

  return (
    <div>
      <nav className="flex justify-between items-center mb-8">
        <div className="text-2xl font-bold">
          <Link href="/">SUN HA YOON</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="#about">About Me</Link>
          </li>
          <li>
            <Link href="#education">Education</Link>
          </li>
          <li>
            <Link href="#philosophy">Philosophy</Link>
          </li>
          <li>
            <Link href="#contact">Contact Me</Link>
          </li>
        </ul>
      </nav>
      {showScrollToTop && (
        <button
          className="fixed bottom-6 right-6 bg-gray-500 text-white px-4 py-2 rounded-full shadow"
          onClick={scrollToTop}
        >
          Scroll to Top
        </button>
      )}
      <img src="piano.jpg" alt="Piano" className="w-full mb-8" />
      <h1 className="text-3xl font-bold mb-4">Welcome to Piano Lessons</h1>
      <p className="mb-4 p-justify">
        Are you an experienced pianist looking to take your skills to the next
        level? As an experienced educator from prestigious colleges, I'm here to
        guide you on your piano journey and help you unlock your full musical
        potential.
      </p>
      <p className="mb-4 p-justify">
        With my extensive background in education and passion for music, I
        specialize in providing personalized lessons tailored to your specific
        needs and goals. Whether you're interested in refining your technique,
        delving into advanced musical concepts, or exploring new genres and
        styles, I'll create a customized learning plan just for you.
      </p>
      <p>
        Together, we'll focus on honing your technique, developing your
        musicality, and expanding your repertoire. I'll provide expert guidance,
        support, and constructive feedback to help you progress and achieve your
        musical aspirations.
      </p>
      <p>
        Embark on this exciting musical journey with a dedicated college
        educator by your side! I'm eager to share my knowledge and expertise
        with you, and assist you in discovering the joy of playing and
        accomplishing your musical dreams.
      </p>
      <hr className="hr-dots my-8 w-full" />
    </div>
  );
};

export default Main;
