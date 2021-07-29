import React from 'react';
import styled from 'styled-components'
// import { proficientSkillsList, familiarSkillsList, languageList } from './data/skills'
import proficientSkillsList from './data/skills/proficientSkillsList'
import familiarSkillsList from './data/skills/familiarSkillsList'
import languageList from './data/skills/languageList'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const SectionHeader = styled.div`
  font-size: 3rem;
  font-weight: bold;
`

const SubHeader = styled.div`
  font-size: 2rem;
  font-weight: bold;
`

const Text = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem;
`

export const TechStack = () => {
  return (
    <Container>
      <SectionHeader>Skills</SectionHeader>
      <SubHeader>Proficient</SubHeader>
      <Text>
        {proficientSkillsList.map((skill) => {
          return (
            <div key={skill.name}>
              {skill.name}
            </div>
          )
        })}
      </Text>
      <SubHeader>Familiar</SubHeader>
      <Text>
      {familiarSkillsList.map((skill) => {
          return (
            <div key={skill.name}>
              {skill.name}
            </div>
          )
        })}
      </Text>
      <SubHeader>Languages</SubHeader>
      <Text>
      {languageList.map((language) => {
          return (
            <div key={language.name}>
              {language.name}
            </div>
          )
        })}
      </Text>
    </Container>
  )
}

export default TechStack;
