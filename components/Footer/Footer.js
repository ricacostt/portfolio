import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div>
      <footer className="p-6 xsm:p-10 max-w-screen-xl mr-auto ml-auto md:flex md:items-center md:justify-between text-textlight dark:text-textdark">
        <p className="text-sm sm:text-center">
          © 2023 |{" "}
          <span className="text-textaccent dark:text-textdark">
            Federica Costantino
          </span>
        </p>
        <ul className="flex flex-wrap items-center mt-3 text-sm sm:mt-0   ">
          <li className="hover:text-textaccent dark:hover:text-textdark">
            <a
              aria-label="link to my github page"
              href="https://github.com/ricacostt"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 hover:underline md:mr-6 "
            >
              Github
            </a>
          </li>
          <li className="hover:text-textaccent dark:hover:text-textdark">
            <a
              aria-label="link to my linkedin page"
              href="https://www.linkedin.com/in/federica-costantino/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 hover:underline md:mr-6"
            >
              Linkedin
            </a>
          </li>
          <li className="hover:text-textaccent dark:hover:text-textdark">
            <a
              aria-label="link to my twitter page"
              href="https://twitter.com/ricacostt"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 hover:underline md:mr-6"
            >
              Twitter
            </a>
          </li>
          <li className="hover:text-textaccent dark:hover:text-textdark">
            <a
              aria-label="link to send me an email"
              href="mailto:ricacostt@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
