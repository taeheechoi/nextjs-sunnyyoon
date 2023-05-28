import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="page-container">
      <h1>Contact Me</h1>
      <hr className="hr-dots w-full" />
      <p>
        If you have any questions or would like to discuss your piano lessons,
        feel free to get in touch with me. I&apos;m here to help!
      </p>
      <div className="mt-8">
        <h2>Sun Ha Yoon</h2>
        <p>Email: sunhayoon@example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Location: New York, USA</p>
      </div>
    </div>
  );
};

export default Contact;
