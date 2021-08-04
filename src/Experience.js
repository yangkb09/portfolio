import React from 'react';
import styled from 'styled-components/macro'
import experienceData from './data/experienceData'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const SectionHeader = styled.div`
  font-size: 3rem;
  font-weight: bold;
`

export const Experience = () => {
  return (
    <Container>
      <SectionHeader>Experience</SectionHeader>
    </Container>
  )
}

export default Experience;
