import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <>
      <div className="flex flex-col w-full min-h-screen bg-[#EBEBEB]">
        <NavBar />
        <Outlet />
      </div>
    </>
  )
}
