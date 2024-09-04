import { Typography } from "@material-tailwind/react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";

const LINKS = [
  // My links here
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-black mt-6 relative w-full bg-white">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <a className="flex title-font font-medium items-center text-gray-900 mt-2 mb-6 px-2 py-2">
            <img src={logo} alt="logo" />
          </a>
          <p className="mt-2">Join us on this extraordinary journey as we redefine the limits of human potential. Together, we are forging a brighter future—one innovation at a time.</p>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-40"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            Copyright © {currentYear} Sidlabs. All rights reserved. Terms of Use & Privacy Policy
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <FaFacebookF className="h-5 w-5" />
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <FaTwitter className="h-5 w-5" />
            </Typography>
            <Typography as="a" href="https://www.linkedin.com/company/sidlabs-online/" className="opacity-80 transition-opacity hover:opacity-100">
              <FaLinkedinIn className="h-5 w-5" />
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <FaInstagram className="h-5 w-5" />
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}
