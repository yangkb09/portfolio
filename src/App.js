import React from 'react';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import TechStack from './TechStack';
import Experience from './Experience';
import Footer from './Footer';
import Sidebar from './Sidebar';

export const App = () => {
  return (
    <>
      <Intro />
      <About />
      <Projects />
      <TechStack />
      <Experience />
      <Footer />
      <Sidebar />
    </>
  )
}

export default App
