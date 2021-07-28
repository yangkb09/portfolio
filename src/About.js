import React from 'react';
import styled from 'styled-components'

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
    <>
      <AboutText>
        In February of 2021, I graduated from the Grace Hopper Program at Fullstack Academy and recently completed a teaching fellowship with them. I'm proficient in fullstack web development using <Highlight>JavaScript</Highlight> with <Highlight>Node.js, Express, React, Redux,</Highlight> and <Highlight>PostgreSQL</Highlight>.
      </AboutText>
      <AboutText>
        I'm currently looking for full-time software engineer roles.
      </AboutText>
      <AboutText>
        When not debugging code, you can find me in my garden, the pottery studio, or outside taking film photos.
      </AboutText>

    </>
  )
}

export default About;
