import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <>
      <div className="flex flex-col w-full min-h-screen bg-[#FAF9F6]">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}
