import PropTypes from 'prop-types'

import React from 'react'
import EntryTestimonial from './EntryTestimonial'
import testimonialData from '../data/testimonial-data'


export default function Testimonials({title}) {
  return (
    <section className="flex flex-col shadow-inner rounded-r-10xl lg:rounded-r-full items-center pt-30 pb-40 bg-slate-400">
    <h2 className="inline-block text-3xl lg:text-4xl font-semibold uppercase text-gray-900 pt-10 mb-20">
      {title}
    </h2>

    <div className="lg:flex gap-x-10">
      {testimonialData.map((testimonialItem) => (
        <EntryTestimonial
          key={testimonialItem.id}
          content={testimonialItem.content}
          img={testimonialItem.img}
          alt={testimonialItem.alt}
          name={testimonialItem.name}
          position={testimonialItem.position}
        />
      ))}
    </div>
  </section>
  )
}

Testimonials.defaultProps = {
  title: "Client Testimonials",
};

Testimonials.propTypes = {
  title: PropTypes.string,
};