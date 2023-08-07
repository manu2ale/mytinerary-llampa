import React from 'react'
import NavBar from './NavBar'

export default function Main({ children }) {
  return (
    <>
      <div className="flex flex-col w-full min-h-screen bg-[#EBEBEB]">
        <NavBar />
        {children}
      </div>
    </>
  )
}
