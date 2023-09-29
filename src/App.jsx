import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-gray-900 h-screen w-screen flex items-center justify-center'>

        <h1 className='text-gray-50  text-xl font-semibold'>Welcome to NFT Inscribe</h1>
      </div>

    </>
  )
}

export default App
