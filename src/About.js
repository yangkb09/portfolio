import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const AboutText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem;
`
const Highlight = styled.span`
  color: #7289da;
`

export const About = () => {
  return (
    <Container>
      <AboutText>
        As a recent Teaching Fellow and graduate of the <Highlight>Grace Hopper Program</Highlight> at Fullstack Academy, I'm proficient in fullstack web development using <Highlight>JavaScript</Highlight> with <Highlight>Node.js, Express, React, Redux,</Highlight> and <Highlight>PostgreSQL</Highlight>.
      </AboutText>
      <AboutText>
        I'm currently looking for full-time software engineer roles.
      </AboutText>
      <AboutText>
        When not debugging code, you can find me in my garden, the pottery studio, or outside taking film photos.
      </AboutText>
    </Container>
  )
}

export default About;
