import React from 'react'

export default function Button({ title, to }) {
  return (
    <a href={to} className="bg-[#4F46E5] py-3 px-12 rounded-lg text-2xl text-white">{title}</a>
  )
}
