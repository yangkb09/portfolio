import React from 'react';
import styled from 'styled-components/macro'
import projectList from './data/projectList'

const Container = styled.div`
  display: flex;
`

const SectionHeader = styled.div`
  font-size: 3rem;
  font-weight: bold;
`

export const Projects = () => {
  return (
    <Container>
      <SectionHeader>Projects</SectionHeader>

    </Container>
  )
}

export default Projects;
