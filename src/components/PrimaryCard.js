import PropTypes from 'prop-types'

import React from 'react'
import { Link } from 'gatsby'

import writer from "../images/writers/writer.png"
import blogImage1 from "../images/hair_blog_4.jpg";

export default function PrimaryCard(
    {
        heading,
        date,
        title,
        content,
        author,
        authorProfileImage,
        image,
        position,
      }
) {
  return (
    <Link
    to="/how_to_use_organic_seo"
    className="inline-block bg-white rounded-md transition-all duration-300 hover:bg-slate-200 shadow-sm p-4 lg:p-8  mb-16 md:mb-12 border  border-gray-200"
  >
    <div className="flex flex-col-reverse md:grid md:grid-cols-5">
      <div className="flex min-h-0 flex-col col-start-1 col-end-3 md:mr-6">
        <div className="mt-2 md:mt-0">
          <span className="uppercase font-semibold text-gray-700 text-xs">
            {heading}
          </span>
          <span className="text-gray-400 mx-2 font-medium text-sm">
            {date}
          </span>
        </div>
        <h2 className="font-workSans text-2xl font-semibold my-2 text-gray-700">
          {title}
        </h2>
        <p className="text-sm mb-6 flex-grow text-gray-600">{content}</p>
        <div className="flex items-center">
          <div className="h-12 w-12 rounded-md overflow-hidden flex-shrink-0">
            <img
              className="w-full h-full object-cover object-bottom"
              src={authorProfileImage}
              alt="A smiling female George Orwell."
            />
          </div>
          <div className="ml-2 text-xs">
            <span className="block font-semibold text-gray-700">
              {author}
            </span>
            <span className="block font-medium text-gray-500">
              {position}
            </span>
          </div>
        </div>
      </div>
      <div className="rounded-md overflow-hidden h-48 lg:h-full lg:min-h-0 lg:col-start-3 lg:col-end-6">
        <img
          className="w-full h-full object-cover object-bottom"
          src={image}
          alt="Waves breaking on a perfect shore."
        />
      </div>
    </div>
  </Link>
  )
}


PrimaryCard.defaultProps = {
    heading: "Ideas",
    date: "January 20, 2022",
    title: "How to use organic SEO",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eligendi libero sit nihil tempora, totam reprehenderit aliquam beatae obcaecati ratione. Libero consequatur cumque magnam ipsam quae sequi laudantium pariatur veritatis? Consectetur adipisicing elit. Possimus eligendi libero sit nihil tempora, totam reprehenderit aliquam beatae obcaecati ratione. Libero consequatur cumque magnam ipsam quae sequi laudantium pariatur veritatis?",
    author: "Janet Doe",
    authorProfileImage: writer,
    position: "Editor",
    image: blogImage1,
    alt: "",
  };
  
  PrimaryCard.propTypes = {
    heading: PropTypes.string,
    date: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    authorProfileImage: PropTypes.any,
    position: PropTypes.string,
    image: PropTypes.any,
    alt: PropTypes.string,
  };
  