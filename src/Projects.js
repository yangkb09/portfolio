import React from 'react';
import styled from 'styled-components/macro'
import projectList from './data/projectList'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const SectionHeader = styled.div`
  font-size: 3rem;
  font-weight: bold;
`

const ProjectsContainer = styled.div`

`

const SingleProject = styled.div`
  padding: 2rem;
`
const Name = styled.div`
  font-size: 2rem;
  font-weight: bold;
`

const Image = styled.img`
  border-radius: 10%;
  max-width: 33%;
  box-shadow: 8px 8px #7289da;
  /* float: left; */
`

const Text = styled.div`
  font-size: 1rem;
  font-weight: bold;
`
const Button = styled.button`
  display: inline-block;
  background-color: #7289da;
  text-decoration: none;
  color: white;
  font-weight: bold;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #7289da;
  border-radius: 3px;
`

export const Projects = () => {
  return (
    <Container>
      <SectionHeader>Projects</SectionHeader>
      <ProjectsContainer>
        {projectList.map(({projectId, name, imageUrl, description, role, projectUrl, githubUrl, techStack} = projectList) => {
          return (
            <SingleProject key={name}>
              <Image src={imageUrl} alt='Project image'/>
              <Name>{name}</Name>
              <Button as='a' href={projectUrl}>Site</Button>
              <Button as='a' href={githubUrl}>GitHub</Button>
              <Text>{description}</Text>
              <Text>{role}</Text>
              <Text>{techStack}</Text>
            </SingleProject>
          )
        }
        )
      }
      </ProjectsContainer>
    </Container>
  )
}

export default Projects;
