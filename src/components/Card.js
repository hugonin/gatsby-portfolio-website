import React from "react";
import { Link } from "gatsby";

export default function Card({
  heading,
  date,
  title,
  content,
  author,
  authorProfileImage,
  image,
  position,
  alt,
  altProfileImage,
}) {
  return (
    <div className="flex flex-col md:w-1/2 md:mr-4">
      <Link
        to="/blog"
        className="inline-block bg-white rounded-md transition-all duration-300 hover:bg-slate-200 shadow-sm p-4  mb-16 md:mb-12 border  border-gray-200"
      >
        <div className="rounded-md overflow-hidden h-48 lg:h-72">
          <img
            className="h-full w-full object-cover rounded-md"
            src={image}
            alt={alt}
          />
        </div>
        <div className="flex flex-col ">
          <div className="mt-2">
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
                alt={altProfileImage}
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
      </Link>
    </div>
  );
}
