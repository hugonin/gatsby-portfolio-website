import PropTypes from 'prop-types'

import React from 'react'
import { Link } from 'gatsby'

export default function EntryWork({ title, titleProject, content, img, alt, url }) {
  return (
    <div className="lg:flex items-center justify-center gap-x-14 mb-8">
      <div className="lg:w-1/4">
        <h2 className="inline-block text-xl font-semibold uppercase text-gray-800">
          {titleProject}
        </h2>
        <p className="leading-relaxed my-6 text-gray-700">{content}</p>
        <Link
          to={url}
          className="inline-block uppercase text-center text-sm font-bold px-5 py-3 lg:px-10 lg:py-4 rounded-tr-3xl rounded-bl-3xl bg-gray-900 text-yellow-50 hover:bg-gray-700 focus:ring-2 focus:ring-yellow-300"
        >
          {title}
        </Link>
      </div>
      <div className="relative h-80 lg:w-80 mt-8 lg:mt-0 -mx-4 lg:mx-0 lg:rounded-tl-10xl lg:rounded-br-10xl overflow-hidden">
        <div className="absolute top-0 right-0 left-0 bottom-0 opacity-30 bg-yellow-50"></div>
        <img className="h-full w-full object-cover" src={img} alt={alt} />
      </div>
    </div>
  )
}

EntryWork.defaultProps = {
    title: "View Project",
  };
  
  EntryWork.propTypes = {
    title: PropTypes.string,
  };