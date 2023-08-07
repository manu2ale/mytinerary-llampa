import { useState } from 'react'
import MainLayout from './layouts/MainLayout'
import Index from './pages/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MainLayout>
      <Index />
    </MainLayout>

  )
}

export default App
