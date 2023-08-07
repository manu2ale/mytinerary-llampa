import React from 'react'
import LoginButton from '../components/LoginButton.jsx'

export default function NavBar() {
  return (
  <header className="h-[70px] flex justify-center items-center">
    <nav className="flex flex-wrap font-bold text-lg w-full justify-between items-center min-[1367px]:w-[80%]">
      <a className='text-3xl' href="#">MyTinerary</a>
      <ul className="flex gap-5">
        <li><a href="#">Home</a></li>
        <li><a href="#">Cities</a></li>
        <li><LoginButton title='Login' to='#' /></li>
      </ul>
    </nav>
  </header>
  )
}
