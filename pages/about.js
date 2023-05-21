import React from "react";
import Link from "next/link";

const About = () => {
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
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <div className="flex items-center mb-4">
        <img
          src="/profile.png"
          alt="Profile"
          className="w-48 h-48 rounded-full mr-4"
        />
        <p>
          With a deep passion for music and over a decade of experience as a
          piano teacher, I am dedicated to guiding students on their musical
          journey. I have had the privilege of working with students of all ages
          and skill levels, fostering their growth and love for the piano.
        </p>
      </div>
      <p className="mb-4">
        My teaching approach is centered around creating a nurturing and
        inspiring learning environment. I believe in building a strong
        foundation of technique, musicality, and theory, while also encouraging
        creativity and self-expression.
      </p>
      <p className="mb-4">
        As a lifelong learner myself, I continuously seek opportunities to
        expand my knowledge and skills. I hold [certifications/degrees] in piano
        performance and education, and I regularly attend workshops and
        conferences to stay updated with the latest pedagogical approaches.
      </p>
      <p className="mb-4">
        I am committed to helping each student reach their full potential and
        develop a lifelong love for music. Whether you're a beginner taking your
        first steps or an advanced player looking to refine your skills, I'm
        here to guide you every step of the way.
      </p>
      <p>
        Contact me today to schedule your first lesson and embark on your
        musical journey!
      </p>
    </div>
  );
};

export default About;
