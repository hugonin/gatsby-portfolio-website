import PropTypes from 'prop-types'

import React from 'react'
import EntryWork from './EntryWork'

import projectData from '../data/project-data'

export default function Work({ title }) {
  return (
    <section className="pt-24 lg:pt-40 pb-32 lg:pb-52">
      <h2 className="text-center text-3xl lg:text-4xl font-semibold uppercase text-gray-900 mb-20 lg:mb-24">
        {title}
      </h2>
      <div className="flex flex-col items-center mx-4 md:w-2/3 md:mx-auto lg:w-full lg:mx-0">
        {projectData.map((projectItem) => (
          <EntryWork
            key={projectItem.id}
            titleProject={projectItem.titleProject}
            content={projectItem.content}
            img={projectItem.img}
            alt={projectItem.alt}
            url={projectItem.url}
          />
        ))}
      </div>
    </section>
  )
}

Work.defaultProps = {
  title: "My Previous Work",
};

Work.propTypes = {
  title: PropTypes.string,
};
