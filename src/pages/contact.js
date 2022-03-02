import PropTypes from "prop-types";

import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

import { FaPhoneAlt, FaMailBulk, FaLocationArrow } from "react-icons/fa";
import workImage from "../images/work4.jpg";

export default function Contact({
  title,
  telephone,
  email,
  address,
  telephoneNumber,
  emailAddress,
  physicalAddress,
  text1,
  text2,
  text3,
  name,
  emailForm,
  message,
  response1,
  response2,
}) {
  return (
    <Layout>
      <section className="pt-16">
        <div className="w-full lg:flex bg-white">
          <div className="relative flex-grow justify-center px-8 lg:px-20 flex items-center py-20 lg:py-48 rounded-r-full overflow-hidden">
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-800">
              <img
                className="h-full w-full object-cover opacity-30"
                src={workImage}
                alt="A haidresser is cutting hair"
              />
            </div>
            <div className="z-0">
              <h2 className="font-medium mb-5 text-slate-200">{title}</h2>
              <div>
                <div className="flex items-center mb-10">
                  <div className="p-2 rounded-full mr-6 bg-gray-100">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <span className="block text-xs font-medium text-slate-400">
                      {telephone}
                    </span>
                    <span className="block font-medium text-slate-200">
                      <Link to="/(+33) 81 343 4552">{telephoneNumber}</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-10">
                <div className="p-2 rounded-full mr-6 bg-gray-100">
                  <FaMailBulk />
                </div>
                <div>
                  <span className="block text-xs font-medium text-slate-400">
                    {email}
                  </span>
                  <span className="block font-medium text-slate-200">
                    <Link to="/mailto:accounting@business.com">
                      {emailAddress}
                    </Link>
                  </span>
                </div>
              </div>
              <div className="flex items-center mb-10">
                <div className="p-2 rounded-full bg-gray-100 mr-6">
                  <FaLocationArrow />
                </div>
                <div>
                  <span className="block text-xs font-medium text-slate-400">
                    {address}
                  </span>
                  <span className="block font-medium text-slate-200">
                    {physicalAddress}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-grow justify-center bg-white px-8 lg:px-20 py-20 lg:py-48">
            <div className="flex justify-center">
              <div>
                <h2 className="text-xl lg:text-xl font-medium mb-1 text-gray-700">
                  {text1}
                </h2>
                <span className="text-sm mb-4 text-gray-400">{text2}</span>
                <form
                  name="contact"
                  data-netlify="true"
                  autoComplete="off"
                  netlify-honeypot="bot-field"
                >
                  <p className="hidden">
                    <label>
                      {text3}: <input name="bot-field" />
                    </label>
                  </p>
                  <div className="input-animated">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      pattern="\S+.*"
                      placeholder="the placeholder"
                    />
                    <label htmlFor="name" className="label-name">
                      <span className="content-name">{name}</span>
                    </label>
                  </div>
                  <div className="input-animated">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="the placeholder"
                    />
                    <label htmlFor="email" className="label-email">
                      <span className="content-email">{emailForm}</span>
                    </label>
                  </div>
                  <div>
                    <textarea
                      name="question"
                      placeholder="Your Question"
                      id="question"
                      cols="30"
                      rows="5"
                      minLength="10"
                      maxLength="100"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    id="submit-button"
                    className="w-full font-semibold rounded-tl-3xl rounded-br-3xl uppercase text-center px-5 py-3 shadow-md my-4 lg:mb-0 bg-gray-900 text-yellow-50 hover:bg-gray-700 focus:ring-4 focus:ring-yellow-300"
                  >
                    {message}
                  </button>
                  <span
                    id="success"
                    className="hidden absolute mt-2 px-4 py-2 font-medium border rounded-sm border-green-500 bg-green-100 text-green-600"
                  >
                    {response1}
                  </span>
                  <span
                    id="error"
                    className="hidden absolute mt-2 px-4 py-2 font-medium border rounded-sm border-red-500 bg-red-100 text-red-600"
                  >
                    {response2}
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

Contact.defaultProps = {
  title: "Get in Touch",
  telephone: "Telephone Number",
  telephoneNumber: "(+33) 81 343 4552",
  email: "Email Address",
  emailAddress: "accounting@business.com",
  address: "Physical Address",
  physicalAddress: "3 Rue Terraille, Lyon, France",
  text1: "Have a Question?",
  text2: "Pop us a message and we'll get in touch.",
  text3: "Don’t fill this out if you’re human",
  name: "Name",
  emailForm: "Email",
  message: "Send Message",
  response1: "Thanks! We'll be in touch soon.",
  response2: "Whoops... Something went wrong.",
};

Contact.propTypes = {
  title: PropTypes.string,
  telephone: PropTypes.string,
  telephoneNumber: PropTypes.string,
  email: PropTypes.string,
  emailAddress: PropTypes.string,
  address: PropTypes.string,
  physicalAddress: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  name: PropTypes.string.isRequired,
  emailForm: PropTypes.string.isRequired,
  message: PropTypes.string,
  response1: PropTypes.string,
  response2: PropTypes.string,
};
