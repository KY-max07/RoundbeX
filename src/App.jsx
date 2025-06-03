import React from 'react'
import Background from './components/Common/Background'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import { ReactOut } from './components/ReactOut'
import ToUp from './components/ToUp'
import Element3D from './components/Element3D'
import Hero from './components/Hero'


const App = () => {
  return (
    <div className="App relative">
      <Background />
      <div className='absolute top-0'>
        <Navbar />
        <Menu/>
        <ReactOut />
        <ToUp/>
        <Element3D  />
        <Hero className='relative'/>
      </div>
      
    </div>
  )
}

export default App