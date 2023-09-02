import React from 'react';
import { Link as Anchor } from 'react-router-dom';

export default function Button({ title, to }) {
  return (
    <Anchor to={to} className="bg-[#4F46E5] py-3 px-2 rounded-lg text-lg text-white sm:text-2xl sm:px-12">{title}</Anchor>
  )
}
