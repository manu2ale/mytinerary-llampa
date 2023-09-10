import React from 'react'
import LoginButton from '../components/LoginButton.jsx'
import { Link as Anchor } from 'react-router-dom'
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import user_actions from '../store/actions/users.js'
const { signout } = user_actions

export default function NavBar() {
  let [show,setShow] = useState(false);
  let name = useSelector(store=>store.users.user?.name)
  let dispatch = useDispatch()


  return (
  <header className="h-[50px] flex justify-center items-center
      sm:h-[60px]
      lg:h-[70px]
  ">
    <nav className="flex flex-wrap font-bold text-lg w-full justify-between items-center
          xl:w-[95%]
          2xl:w-[80%]
          ">

      <Anchor to='/home'><img className='w-[120px]' src="/img/logo.png" alt="LogoNav"/></Anchor>
              <p>Welcome: {name}</p>

      {/* Hamburger menu */}
      <svg onClick={()=>setShow(!show)} className="w-9 h-9 me-2 cursor-pointer sm:hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      {show && (
            <ul onClick={()=>setShow(!show)} className="absolute z-10 top-[50px] flex flex-col justify-center items-center w-full gap-1 py-2 bg-white sm:hidden">
              <li className='flex w-full'><a className="w-full h-full text-center" href="#">Home</a></li>
              <li className='flex w-full'><Anchor className="w-full text-center" to='/cities'>Cities</Anchor></li>
              <li className='flex w-full'><Anchor to={'/signin'} className="w-full bg-[#4F46E5] py-2 px-5 text-white text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 24 24" fill="currentColor" className="m-1 w-4 h-6 inline">
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                  </svg>Login
                </Anchor>
              </li>
            </ul>
      )}

      {/* Menu fullsize */}
      <ul className="hidden 
          sm:flex sm:gap-5
      ">
        <li><Anchor to='/home'>Home</Anchor></li>
        <li><Anchor to='/cities'>Cities</Anchor></li>
        <li><LoginButton to={'/signin'} /></li>
        {name && <li><Anchor onClick={()=>dispatch(signout())} className="bg-[#4F46E5] py-2 px-5 rounded-lg text-white">Sign Out</Anchor></li>}
      </ul>

    </nav>
  </header>
  )
}
