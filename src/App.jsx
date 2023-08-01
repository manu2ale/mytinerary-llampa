import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <header>
          <nav className="flex text-lg font-semibold justify-between">
            <a href="#">My Tinerary</a>
            <ul className="flex">
              <li><a href="#">Home</a></li>
              <li><a href="#">Cities</a></li>
              <li><a href="#" className="bg-[#4F46E5] p-2 rounded-lg text-white">Login</a></li>

            </ul>
          </nav>
        </header>
      </div>
    </>
  )
}

export default App
