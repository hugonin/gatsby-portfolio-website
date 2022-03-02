import React from 'react'
import Card from './Card'

import blogData from '../data/blog-data'

export default function SecondaryCard() {
  return (
    <div className="md:flex">
    {blogData.map((post) => (
      <Card
        key={post.id}
        heading={post.heading}
        date={post.date}
        title={post.title}
        content={post.content}
        author={post.author}
        authorProfileImage={post.authorProfileImage}
        image={post.image}
        alt={post.alt}
        altProfileImage={post.altProfileImage}
      />
    ))}
  </div>
  )
}
