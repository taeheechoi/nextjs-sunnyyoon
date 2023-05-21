import React from "react";
import Link from "next/link";

const Education = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="flex justify-between items-center mb-12">
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
      <h1 className="text-3xl font-bold mb-4">Education</h1>
      <div className="mb-12">
        <div className="flex items-start mb-2">
          <img
            src="/university-of-maryland-logo.svg"
            alt="University of Maryland"
            className="h-12 mr-4"
          />
          <div className="flex flex-col  ml-auto">
            <h2 className="text-xl font-bold">
              University of Maryland DMA, Collaborative Piano{" "}
            </h2>
            <p className="text-gray-700 ml-auto">
              Doctor of Musical Arts (2007-2011)
            </p>
          </div>
        </div>
        <p className="mt-3">
          Completed a Doctor of Musical Arts degree with a focus on
          Collaborative Piano. Developed expertise in accompanying and
          collaborating with other musicians, honing skills in ensemble
          performances and musical interpretation.
        </p>
      </div>
      <div className="mb-12">
        <div className="flex items-start mb-2">
          <img
            src="/juilliard-school-logo.png"
            alt="The Juilliard School"
            className="h-12 mr-4"
          />
          <div className="flex flex-col  ml-auto">
            <h2 className="text-xl font-bold">
              The Juilliard School MM, Collaborative Piano{" "}
            </h2>
            <p className="text-gray-700 ml-auto">
              Master of Music (Year - Year)
            </p>
          </div>
        </div>
        <p className="mt-3">
          Earned a Master of Music degree with a specialization in Collaborative
          Piano. Received training and mentorship from world-class faculty and
          had the opportunity to collaborate with talented artists.
        </p>
      </div>
      <div className="mb-12">
        <div className="flex items-start mb-2">
          <img
            src="/seoul-national-university-logo.svg"
            alt="Seoul National University"
            className="h-12 mr-4"
          />
          <div className="flex flex-col  ml-auto">
            <h2 className="text-xl font-bold">
              Seoul National University BM, Piano Performance{" "}
            </h2>
            <p className="text-gray-700 ml-auto">
              Bachelor of Music (Year - Year)
            </p>
          </div>
        </div>
        <p className="mt-3">
          Obtained a Bachelor of Music degree with a concentration in Piano
          Performance. Received comprehensive training in piano technique,
          repertoire, and performance skills.
        </p>
      </div>
    </div>
  );
};

export default Education;
