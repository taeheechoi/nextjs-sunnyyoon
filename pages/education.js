import Image from "next/image";
import maryland from "../public/university-of-maryland-logo.svg";
import seoul from "../public/seoul-national-university-logo.svg";
import juilliard from "../public/juilliard-school-logo.png";

const Education = () => {
  return (
    <div>
      <div className="flex items-start">
        <Image
          className="filter brightness-0 invert-0"
          src={maryland}
          alt="University of Maryland"
          width={200}
          height={200}
        />
        <div className="flex flex-col ml-auto">
          <h2 className="ml-auto">University of Maryland</h2>
          <p className="ml-auto">Collaborative Piano, Doctor of Musical Arts</p>
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
          className="filter brightness-0 invert-0"
          src={juilliard}
          alt="The Juilliard School"
          width={170}
          height={150}
        />
        <div className="flex flex-col ml-auto">
          <h2 className="ml-auto">The Juilliard School</h2>
          <p className="ml-auto">Collaborative Piano, Master of Music</p>
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
          className="filter brightness-0 invert-0"
          src={seoul}
          alt="Seoul National University"
          width={200}
          height={200}
        />
        <div className="flex flex-col ml-auto">
          <h2 className="ml-auto">Seoul National University</h2>
          <p className="ml-auto">Piano Performance, Bachelor of Music</p>
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
