import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div>
      <h1 className="text-3xl mb-4">About Me</h1>
      <img
        src="/profile.png"
        alt="Profile Picture"
        className="w-48 h-48 mr-8 mb-3"
      />
      <p className="mb-4 p-justify">
        Hi, I'm Sun Ha Yoon, a passionate pianist and experienced piano teacher
        based in the Bay Area. With over 10 years of teaching experience, I'm
        dedicated to helping students of all levels unlock their musical
        potential and achieve their goals.
      </p>

      <p className="mb-4 p-justify">
        I hold a Doctor of Musical Arts degree in Collaborative Piano from the
        University of Maryland. My educational journey also includes a Master of
        Music degree in Collaborative Piano from The Juilliard School and a
        Bachelor of Music degree in Piano Performance from Seoul National
        University.
      </p>
      <p className="mb-4 p-justify">
        Throughout my career, I have had the privilege of working with
        prestigious institutions and participating in notable performances. I
        have served as a music staff member at Hawai’i Opera Theatre, Opera
        Theatre Saint Louis, Opera San Jose, and Santa Clara Chamber Music. I
        have also held positions as an opera and vocal coach at the San
        Francisco Conservatory of Music and San Francisco Opera.
      </p>
      <p className="mb-4 p-justify">
        In addition to my teaching and coaching experience, I have been
        recognized for my talent and dedication. I was honored to be the Pianist
        First Prize Winner of the Marilyn Horne Song Competition at the Music
        Academy of the West. I have also received prestigious scholarships and
        assistantships including the Robert McCoy Graduate Assistantship,
        Henrietta Quade Scholarship, and William Petschek Piano Scholarship.
      </p>
      <p className="mb-4 p-justify">
        I am passionate about sharing my love for music and helping students
        develop their technical skills, artistic expression, and musical
        interpretation. My teaching approach is tailored to each student's
        unique needs and goals, and I believe in creating a positive and
        supportive learning environment.
      </p>
      <p className="mb-4 p-justify">
        If you're interested in taking piano lessons or have any questions,
        please don't hesitate to contact me. I'm excited to embark on this
        musical journey with you and help you discover the joy of playing the
        piano.
      </p>
      <hr className="hr-dots-dashed my-4 w-full" />
    </div>
  );
};

export default About;
