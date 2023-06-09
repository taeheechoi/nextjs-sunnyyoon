import Image from "next/image";
import profileImage from "../public/Profile.png";

const About = () => {
  return (
    <div>
      <Image
        src={profileImage}
        alt="Profile Picture"
        className="float-left mr-4"
        style={{
          border: "2px solid #ccc", // Add a border
          borderRadius: "10px", // Add rounded corners
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Add a box shadow
        }}
        width={300}
        height={500}
      />
      <div>
        <p>
          Hi, I&apos;m Sun Ha Yoon, a passionate pianist and experienced piano
          teacher based in the Bay Area. With over 10 years of teaching
          experience, I&apos;m dedicated to helping students of all levels
          unlock their musical potential and achieve their goals.
        </p>
        <p>
          I hold a Doctor of Musical Arts degree in Collaborative Piano from the
          University of Maryland. My educational journey also includes a Master
          of Music degree in Collaborative Piano from The Juilliard School and a
          Bachelor of Music degree in Piano Performance from Seoul National
          University.
        </p>
        <p>
          Throughout my career, I have had the privilege of working with
          prestigious institutions and participating in notable performances. I
          have served as a music staff member at Hawai’i Opera Theatre, Opera
          Theatre Saint Louis, Opera San Jose, and Santa Clara Chamber Music. I
          have also held positions as an opera and vocal coach at the San
          Francisco Conservatory of Music and San Francisco Opera.
        </p>
        <p>
          In addition to my teaching and coaching experience, I have been
          recognized for my talent and dedication. I was honored to be the
          Pianist First Prize Winner of the Marilyn Horne Song Competition at
          the Music Academy of the West. I have also received prestigious
          scholarships and assistantships including the Robert McCoy Graduate
          Assistantship, Henrietta Quade Scholarship, and William Petschek Piano
          Scholarship.
        </p>
        <p>
          I am passionate about sharing my love for music and helping students
          develop their technical skills, artistic expression, and musical
          interpretation. My teaching approach is tailored to each
          student&apos;s unique needs and goals, and I believe in creating a
          positive and supportive learning environment.
        </p>
        <p>
          If you&apos;re interested in taking piano lessons or have any
          questions, please don&apos;t hesitate to contact me. I&apos;m excited
          to embark on this musical journey with you and help you discover the
          joy of playing the piano.
        </p>
      </div>
    </div>
  );
};

export default About;
