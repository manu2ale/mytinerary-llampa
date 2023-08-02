import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col w-full min-h-screen bg-[#EBEBEB]">
        <header className="h-[90px] flex justify-center items-center">
          <nav className="flex flex-wrap font-bold text-lg w-[70%] justify-between">
            <a className='text-2xl' href="#">MyTinerary</a>
            <ul className="flex gap-5">
              <li><a href="#">Home</a></li>
              <li><a href="#">Cities</a></li>
              <li><a href="#" className="bg-[#4F46E5] py-2 px-5 rounded-lg text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 24 24" fill="currentColor" className="m-1 w-4 h-6 inline">
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                  </svg><></>Login</a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex grow justify-center items-center">
          <section className='flex flex-wrap font-bold text-lg w-[70%] justify-between items-center'>
            <div className='my-8'>
              <h1 className='my-8 text-5xl font-bold'>Find the perfect destination</h1>
              <p className='my-8 max-w-[628px] text-2xl text-gray-500 font-semibold'>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
              <a href="#" className="bg-[#4F46E5] py-3 px-12 rounded-lg text-2xl text-white">View More</a>
            </div>
            <div className='my-8'>
              <img src="./frame-2.png" />
            </div>
          </section>
        </main>
        
      </div>
    </>
  )
}

export default App
