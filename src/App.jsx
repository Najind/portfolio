import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experence from './components/Experence'
import Contact from './components/Contact'
import Project from './components/Project'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experence />
      <Project />
      <Contact />
    
    </div>
  )
}

export default App