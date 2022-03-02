import React, { useState } from "react";
import { Link } from "gatsby";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import logo  from "../images/logo_transparent.png";

export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <header className="absolute w-full z-10 bg-gray-900 ">
      <nav
        className="lg:max-w-screen-xl flex flex-row flex-wrap justify-between my-4 lg:my-6 ml-auto mr-auto "
        role="navigation"
      >
        <div className="flex-shrink-0 flex items-center">
          <Link to="/" className="ml-4 pt-2">
            <img
              className="block lg:hidden h-12 w-auto"
              src={logo}
              alt="site-logo"
            />
            <img
              className="hidden lg:block h-12 w-auto"
              src={logo}
              alt="site-logo"
            />
          </Link>
          <span className="text-xl text-gray-200  font-bold uppercase tracking-wide">
            HAIR SALON MARKETING
          </span>
        </div>
        <div className="inline-block h-8 mr-3 mt-2 lg:hidden">
          <button
            id="nav_toggle"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={handleClick}
          >
            <span className="sr-only">Open main menu</span>
            {active ? (
              <XIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <MenuIcon className="block h-6 w-6 " aria-hidden="true" />
            )}
          </button>
        </div>
        <div
          id="nav_content"
          className={`${
            active ? "" : "hidden"
          } w-full py-8 lg:flex lg:w-auto lg:py-0 lg:items-center `}
        >
          <ul className="flex flex-col ml-auto text-md text-gray-200 font-semibold lg:flex-row">
            <li className="mx-6 w-mc hover:text-gray-400 mb-4 lg:mb-0">
              <Link to="/growthTipsPage">GROWTH TIPS</Link>
            </li>
            <li className="mx-6 w-mc hover:text-gray-400 mb-4 lg:mb-0">
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
