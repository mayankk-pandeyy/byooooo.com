import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Advertisement from './components/Advertisement'
import Steps from './components/Steps'
import Check from './components/Check'

const App = () => {
  return (
    <div className='w-[100vw] min-h-[100vh]'>
      <Navbar/>
      <Hero/>
      <Advertisement/>
      <Steps/>
      <Check/>
    </div>
  )
}

export default App