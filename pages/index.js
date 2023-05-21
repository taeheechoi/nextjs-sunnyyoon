import React, { useEffect, useState } from "react";
import Link from "next/link";
import About from "./about";
import Education from "./education";
import Philosophy from "./philosophy";
import Contact from "./contact";
import Main from "./main";

const Home = () => {
  return (
    <div className="container">
      <Main />
      <section id="about">
        <About />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="philosophy">
        <Philosophy />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
