import React from 'react'
import { Link } from "gatsby";
import { FaFacebook, FaTwitter, FaInstagramSquare } from "react-icons/fa";

import logo  from "../images/logo_transparent.png";



export default function Footer() {
  return (
    <footer className="py-16 bg-gray-900">
    <div className="flex flex-col lg:flex-row items-center justify-between mx-auto max-w-screen-xl">
      <div className="flex items-center  ">
        <Link to="/" className="ml-4 pt-1">
          <img className="h-12 w-12 " src={logo} alt="site-logo" />
        </Link>
      </div>
      <ul className="flex flex-col lg:flex-row items-center text-sm font-semibold text-gray-500 py-12 lg:py-0">
        <Link
          to="/growthTipsPage"
          className="mx-7 hover:text-gray-700 mb-2 lg:mb-0"
        >
          GROWTH TIPS
        </Link>
        <Link to="/contact" className="mx-7 hover:text-gray-700 mb-2 lg:mb-0">
          CONTACT
        </Link>
      </ul>
      <div className="flex text-gray-500">
        <Link to="/" className="hover:text-gray-700">
          <FaTwitter className="mx-4 fill-current" />
        </Link>
        <Link className="hover:text-gray-700" to="/">
          <FaFacebook className="mx-4 fill-current" />
        </Link>
        <Link to="/" className="hover:text-gray-700">
          <FaInstagramSquare className="mx-4 fill-current" />
        </Link>
      </div>
    </div>

    <div className="flex flex-col items-center mt-24 text-xs text-gray-400">
      <span>&copy; HairSalon Marketing {new Date().getFullYear()}</span>
    </div>
  </footer>
  )
}
