import React from "react";

const Education = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Education</h1>
      <div className="mb-12">
        <div className="flex items-start mb-2">
          <img
            src="/university-of-maryland-logo.svg"
            alt="University of Maryland"
            className="h-12 mr-4"
          />
          <div className="flex flex-col ml-auto">
            <h2 className="text-xl font-bold">
              University of Maryland DMA, Collaborative Piano{" "}
            </h2>
            <p className="text-gray-700 ml-auto">
              Doctor of Musical Arts (2007-2011)
            </p>
          </div>
        </div>
        <p className="mb-4 p-justify">
          Completed a Doctor of Musical Arts degree at the University of
          Maryland, specializing in Collaborative Piano. During my time at the
          university, I focused on developing expertise in accompanying and
          collaborating with other musicians. This included honing skills in
          ensemble performances and musical interpretation, allowing me to excel
          as a collaborative pianist.
        </p>
      </div>
      <div className="mb-12">
        <div className="flex items-start mb-2">
          <img
            src="/juilliard-school-logo.png"
            alt="The Juilliard School"
            className="h-12 mr-4"
          />
          <div className="flex flex-col ml-auto">
            <h2 className="text-xl font-bold">
              The Juilliard School MM, Collaborative Piano{" "}
            </h2>
            <p className="text-gray-700 ml-auto">
              Master of Music (Year - Year)
            </p>
          </div>
        </div>
        <p className="mb-4 p-justify">
          Earned a Master of Music degree in Collaborative Piano from The
          Juilliard School. During my time at Juilliard, I received training and
          mentorship from world-class faculty and had the opportunity to
          collaborate with talented artists, further enhancing my skills as a
          collaborative pianist.
        </p>
      </div>
      <div className="mb-12">
        <div className="flex items-start mb-2">
          <img
            src="/seoul-national-university-logo.svg"
            alt="Seoul National University"
            className="h-12 mr-4"
          />
          <div className="flex flex-col ml-auto">
            <h2 className="text-xl font-bold">
              Seoul National University BM, Piano Performance{" "}
            </h2>
            <p className="text-gray-700 ml-auto">
              Bachelor of Music (Year - Year)
            </p>
          </div>
        </div>
        <p className="mb-4 p-justify">
          Obtained a Bachelor of Music degree with a concentration in Piano
          Performance from Seoul National University. Received comprehensive
          training in piano technique, repertoire, and performance skills,
          providing a strong foundation for my musical journey.
        </p>
      </div>
      <hr className="hr-dots my-8 w-full" />
    </div>
  );
};

export default Education;
