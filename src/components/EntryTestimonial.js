import React from "react"

export default function EntryTestimonial({ content, img, alt, name, position }) {
    return (
      <div className="mb-24 lg:mb-0">
  
      <div className="flex items-center shadow-md w-89 h-89 p-10 rounded-tl-3xl rounded-br-3xl bg-slate-50">
        <p className="font-medium leading-relaxed">{content}</p>
      </div>
      <div className="flex mt-10">
        <div className="h-12 w-12 flex-shrink-0">
          <img className="w-full h-full rounded-full shadow-inner" src={img}
            alt={alt}/>
        </div>
        <div className="ml-4">
          <span className="block text-sm font-bold mt-2 tracking-wider text-gray-600">{name}</span>
          <span className="block text-sm text-gray-500">{position}</span>
        </div>
      </div>
    </div>
    )
  }
  