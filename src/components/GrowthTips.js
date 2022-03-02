import PropTypes from 'prop-types'

import React from 'react'
import { Link } from 'gatsby'

import progressOverview from "../images/progress_overview.png";

export default function GrowthTips({ title, text, cta }) {
  return (
    <section className="flex justify-center mx-4 md:w-2/3 md:mx-auto pt-24 lg:pt-30 pb-32 lg:pb-40">
    <div className="lg:flex items-center justify-center gap-x-14">
      <div className="lg:w-1/4 mb-16 lg:mb-0">
        <h2 className="inline-block text-3xl lg:text-4xl font-semibold uppercase text-gray-900">
          {title}
        </h2>
        <p className="leading-relaxed mt-10 mb-10 text-gray-700">{text}</p>
        <Link
          className="inline-block uppercase text-center text-sm font-bold px-5 py-3 lg:px-10 lg:py-4 rounded-tr-3xl rounded-bl-3xl bg-gray-900 text-yellow-50 hover:bg-gray-700 focus:ring-2 focus:ring-yellow-300"
          to="growth-tips"
        >
          {cta}
        </Link>
      </div>

      <img
        className="lg:w-2/3"
        src={progressOverview}
        alt="A happy cartoon woman watching at a progress overview board"
      />
    </div>
  </section>
  )
}

GrowthTips.defaultProps = {
  title: "Grow Your Salon",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At et augue tristique risus,enim non. Auctor quis pulvinar elit sit. Est proin scelerisque at est gravida nibh. Odio eget odio diam felis aliquam volutpat integer. Dis commodo blandit id enim facilisi eros nulla.",
  cta: "See Tips",
};

GrowthTips.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  cta: PropTypes.string,
};
