import PropTypes from 'prop-types'

import React from 'react'
import { Link } from 'gatsby'

export default function CtaSection({ text1, text2}) {
  return (
    <section className="py-24 shadow-inner  bg-slate-400">
    <h2 className="text-center font-semibold text-xl lg:text-2xl mb-12 text-gray-900">
      {text1}
    </h2>
    <div className="text-center">
      <Link
        to="/contact"
        className="inline-block uppercase font-bold px-5 py-3 lg:px-10 lg:py-4 rounded-tr-3xl text-sm lg:text-base rounded-bl-3xl bg-gray-900 text-yellow-50 hover:bg-gray-700 focus:ring-2 focus:ring-yellow-300"
      >
        {text2}
      </Link>
    </div>
  </section>
  )
}

CtaSection.defaultProps = {
  text1: "Ready for more customers?",
  text2: "Get in touch now",
};

CtaSection.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
};
