import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home';
import Experience from './Experience';
import AboutMe from './AboutMe';
import Projects from './Projects';

function App() {

  return (
    <div>
      <Navbar/>
      <Home />
      <AboutMe />
      <Experience />
      <Projects />
      
    </div>
  )
}

export default App
