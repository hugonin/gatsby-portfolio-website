import PropTypes from "prop-types";

import React from 'react'
import { Link } from "gatsby";

import barber from "../images/barber.png"

export default function Hero({ text1, text2, text3, text4, text5 }) {
  return (
    <section className="relative lg:h-screen">
        <div className="lg:flex justify-center items-center h-full pb-16 lg:pb-0">
        <img className="pt-24 w-full lg:pt-0 lg:w-auto" src={barber} alt="" />
        <div className="mx-4 mt-8 lg:mt-0 lg:ml-16">
          <span className="block uppercase text-sm lg:text-base lg:font-semibold mb-2 lg:mb-4 text-gray-700">
            {text1}
          </span>
          <h1 className="text-5xl lg:text-7xl uppercase text-gray-900 font-medium mb-4 lg:mb-8">
            {text2} <span className="block font-black">{text3}</span>
            {text4}
          </h1>
          <Link
            to="/contact"
            className="inline-block uppercase text-sm text-center font-bold px-5 py-3 lg:px-10 lg:py-4 rounded-tr-3xl rounded-bl-3xl bg-gray-900 text-yellow-50 hover:bg-gray-700 focus:ring-2 focus:ring-yellow-300"
          >
            {text5}
          </Link>
        </div>
      </div>
    </section>
  )
}

Hero.defaultProps = {
  text1: "I help hair salons to",
  text2: "Get more",
  text3: "hair lovers",
  text4: "in the door",
  text5: "Find out more",
};

Hero.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
};