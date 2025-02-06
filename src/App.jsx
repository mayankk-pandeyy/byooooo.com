import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Advertisement from './components/Advertisement'

const App = () => {
  return (
    <div className='w-[100vw] min-h-[100vh]'>
      <Navbar/>
      <Hero/>
      <Advertisement/>
      
    </div>
  )
}

export default App