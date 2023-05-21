import React from "react";
import Link from "next/link";

const Contact = () => {
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
      <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
      <p className="mb-4">
        If you have any questions or would like to schedule a lesson, please
        feel free to get in touch with me.
      </p>
      <p className="mb-4">
        You can reach me by phone at (123) 456-7890 or by email at
        info@example.com.
      </p>
      <p className="mb-4">
        I look forward to hearing from you and helping you on your musical
        journey!
      </p>
    </div>
  );
};

export default Contact;
