import Image from "next/image";
import React from "react";

const Education = () => {
  return (
    <div className="page-container">
      <h1>Education</h1>
      <hr className="hr-dots w-full" />
      <div className="flex items-start">
        <Image
          className="svg black"
          src="/university-of-maryland-logo.svg"
          alt="University of Maryland"
          width={200}
          height={200}
        />
        <div className="flex flex-col ml-auto">
          <h2>University of Maryland DMA, Collaborative Piano</h2>
          <p className="ml-auto">Doctor of Musical Arts</p>
        </div>
      </div>
      <p className="mb-8">
        Completed a Doctor of Musical Arts degree at the University of Maryland,
        specializing in Collaborative Piano. During my time at the university, I
        focused on developing expertise in accompanying and collaborating with
        other musicians. This included honing skills in ensemble performances
        and musical interpretation, allowing me to excel as a collaborative
        pianist.
      </p>
      <div className="flex items-start">
        <Image
          className="svg black"
          src="/juilliard-school-logo.png"
          alt="The Juilliard School"
          width={180}
          height={150}
        />
        <div className="flex flex-col ml-auto">
          <h2>The Juilliard School MM, Collaborative Piano</h2>
          <p className="ml-auto">Master of Music</p>
        </div>
      </div>
      <p className="mb-8">
        Earned a Master of Music degree in Collaborative Piano from The
        Juilliard School. During my time at Juilliard, I received training and
        mentorship from world-class faculty and had the opportunity to
        collaborate with talented artists, further enhancing my skills as a
        collaborative pianist.
      </p>

      <div className="flex items-start">
        <Image
          className="svg black"
          src="/seoul-national-university-logo.svg"
          alt="Seoul National University"
          width={200}
          height={200}
        />
        <div className="flex flex-col ml-auto">
          <h2>Seoul National University BM, Piano Performance</h2>
          <p className="ml-auto">Bachelor of Music</p>
        </div>
      </div>
      <p>
        Obtained a Bachelor of Music degree with a concentration in Piano
        Performance from Seoul National University. Received comprehensive
        training in piano technique, repertoire, and performance skills,
        providing a strong foundation for my musical journey.
      </p>
    </div>
  );
};

export default Education;
