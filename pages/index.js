import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="flex justify-between items-center mb-8">
        <div className="text-2xl font-bold">
          <Link href="/">SUN HA YOON</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/about">About Me</Link>
          </li>
          <li>
            <Link href="/education">Education</Link>
          </li>
          <li>
            <Link href="/philosophy">Philosophy</Link>
          </li>
          <li>
            <Link href="/contact">Contact Me</Link>
          </li>
        </ul>
      </nav>
      <img src="piano.jpg" alt="Piano" className="w-full mb-8" />
      <h1 className="text-3xl font-bold mb-4">Welcome to Piano Lessons</h1>
      <p className="mb-4">
        Are you ready to unlock your musical potential? Whether you're a
        beginner or an experienced pianist, I'm here to help you on your piano
        journey.
      </p>
      <p className="mb-4">
        As a professional piano teacher with over 10 years of experience, I'm
        dedicated to providing personalized lessons tailored to your needs and
        goals. With a focus on building a strong foundation of technique and
        musicality, we'll explore various musical styles and genres to make
        learning the piano a fun and fulfilling experience.
      </p>
      <p>
        Begin your musical adventure today! I look forward to helping you
        discover the joy of playing the piano and achieving your musical goals.
      </p>
    </div>
  );
};

export default Home;
