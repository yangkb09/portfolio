import React from 'react';
import styled from 'styled-components'
import proficientSkillsList from './data/skills/proficientSkillsList'
import familiarSkillsList from './data/skills/familiarSkillsList'
import languageList from './data/skills/languageList'
import {Language} from '@styled-icons/fa-solid/Language'

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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  font-size: 1.5rem;
  padding: 1rem;
`

const Image = styled.img`
  max-width: 4%;
`
const ReactIcon = styled.div`
  font-size: 4rem;
  margin-top: 20px;
  /* justify-content: center;
  align-items: center; */
  text-align: center;
`
const IconName = styled.div`
  text-align: center;
`

const SmallLanguage = styled(Language)`
  max-width: 25%;
`

export const Skills = () => {
  return (
    <Container>
      <SectionHeader>Skills</SectionHeader>
      <SubHeader>Proficient</SubHeader>
        <SkillsGrid>
          {proficientSkillsList.map((skill) => {
            return (
              <div key={skill.name}>
                {skill.reactIcon ? <ReactIcon>{skill.image}</ReactIcon> : <Image src={skill.image} alt='Proficient skill image'/>}
                <IconName>{skill.name}</IconName>
              </div>
            )
          })}
        </SkillsGrid>
      <SubHeader>Familiar</SubHeader>
        <SkillsGrid>
          {familiarSkillsList.map((skill) => {
            return (
              <div key={skill.name}>
                {skill.reactIcon ? <ReactIcon>{skill.image}</ReactIcon> : <Image src={skill.image} alt='Familiar skill image'/>}
                <IconName>{skill.name}</IconName>
              </div>
            )
          })}
        </SkillsGrid>
      <SubHeader>Languages</SubHeader>
      <SkillsGrid>
        {languageList.map((language) => {
          return (
            <div key={language.name}>
              <ReactIcon><SmallLanguage /></ReactIcon>
              <IconName>{language.name}</IconName>
            </div>
          )
        })}
      </SkillsGrid>
    </Container>
  )
}

export default Skills;
