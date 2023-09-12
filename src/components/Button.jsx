import React from 'react';
import { Link as Anchor } from 'react-router-dom';

export default function Button({ title, to }) {
  return (
    <Anchor to={to} className="bg-teal-500 py-3 px-2 rounded-lg text-lg text-white sm:text-2xl sm:px-12 hover:bg-teal-600">{title}</Anchor>
  )
}
