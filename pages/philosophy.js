import React from "react";
import Link from "next/link";

const Philosophy = () => {
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
      <h1 className="text-3xl font-bold mb-4">Our Teaching Philosophy</h1>
      <p className="mb-4">
        At Piano Professional, our mission is to provide exceptional piano
        education that empowers students to achieve their musical goals and
        develop a lifelong passion for music.
      </p>
      <p className="mb-4">
        With our extensive experience as professional piano teachers, we are
        committed to the highest standards of excellence and the cultivation of
        artistic expression. Our teaching philosophy is rooted in the following
        principles:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li className="mb-2">
          <h3 className="text-lg font-bold">Individualized Instruction</h3>
          <p>
            We recognize that every student is unique, with different
            aspirations, learning styles, and musical backgrounds. We tailor our
            lessons to meet the specific needs and goals of each student,
            ensuring a personalized learning experience.
          </p>
        </li>
        <li className="mb-2">
          <h3 className="text-lg font-bold">Technical Mastery</h3>
          <p>
            We believe in building a strong foundation of technical skills,
            which serves as the bedrock for artistic expression. Through focused
            attention on proper technique, finger dexterity, and coordination,
            we guide our students towards achieving mastery and fluidity in
            their playing.
          </p>
        </li>
        <li className="mb-2">
          <h3 className="text-lg font-bold">Artistic Interpretation</h3>
          <p>
            Music is an art form that transcends technicality. We encourage our
            students to delve into the nuances of musical interpretation,
            fostering their musicality and sensitivity. By exploring various
            musical styles and genres, we nurture their ability to express their
            unique artistic voice.
          </p>
        </li>
        <li className="mb-2">
          <h3 className="text-lg font-bold">Musical Understanding</h3>
          <p>
            We believe that a comprehensive understanding of music theory is
            crucial for musicianship. We guide our students in developing a
            solid theoretical foundation, enabling them to comprehend the
            structure, harmony, and rhythm of music. This knowledge empowers
            them to interpret and perform with depth and understanding.
          </p>
        </li>
        <li className="mb-2">
          <h3 className="text-lg font-bold">Inspiring Creativity</h3>
          <p>
            We foster an environment that nurtures creativity and encourages our
            students to explore their musical potential. We inspire them to
            compose their own music, experiment with improvisation, and develop
            their unique artistic ideas. We believe that creative expression is
            vital for personal growth and fulfillment as a musician.
          </p>
        </li>
      </ul>
      <p className="mb-4">
        At Piano Professional, we are dedicated to providing a supportive and
        engaging learning experience, empowering our students to excel in their
        musical journey. We strive to ignite a lifelong love for music and guide
        our students towards becoming well-rounded, expressive, and accomplished
        pianists.
      </p>
    </div>
  );
};

export default Philosophy;
