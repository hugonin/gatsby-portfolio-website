import React from 'react'

export default function EntryService({ icon, title, content }) {
  return (
    <div className="mx-4 md:w-2/3 md:mx-auto mb-16 lg:mx-0 lg:mb-0 lg:w-80 flex flex-col items-center">
      <img src={icon} alt="service icon"  />     
      <h2 className="text-xl lg:text-2xl mt-3 mb-6 font-semibold text-gray-900">
        {title}
      </h2>
      <p className="text-center text-gray-500">{content}</p>
    </div>
  )
}
