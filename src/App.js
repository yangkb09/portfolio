import React from 'react';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import TechStack from './TechStack';
import Experience from './Experience';
import Footer from './Footer';
import Sidebar from './Sidebar';
import styled from 'styled-components/macro'

const Container = styled.div`
  background-color: #2c2f33;
  color: white;
  font: Poppins;
  min-height: 100vh;
  font-size: 16px;
  padding: 10rem;
  display: flex;
  flex-direction: column;
`

export const App = () => {
  return (
    <Container>
      <Intro />
      <About />
      <Projects />
      <TechStack />
      <Experience />
      <Footer />
      <Sidebar />
    </Container>
  )
}

export default App
