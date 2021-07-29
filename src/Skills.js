import React from 'react';
import styled from 'styled-components'
import proficientSkillsList from './data/skills/proficientSkillsList'
import familiarSkillsList from './data/skills/familiarSkillsList'
import languageList from './data/skills/languageList'
import languageImg from './images/skills/language.png'

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
  /* font-weight: bold; */
  padding: 1rem;
`

const Image = styled.img`
  max-width: 5%;
`
const ReactIcon = styled.div`
  font-size: 50px;
`

export const Skills = () => {
  return (
    <Container>
      <SectionHeader>Skills</SectionHeader>
      <SubHeader>Proficient</SubHeader>
      <Text>
        {proficientSkillsList.map((skill) => {
          return (
            <div key={skill.name}>
              {skill.reactIcon ? <ReactIcon>{skill.image}</ReactIcon> : <Image src={skill.image} alt='Proficient skill image'/>}
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
              {skill.reactIcon ? <ReactIcon>{skill.image}</ReactIcon> : <Image src={skill.image} alt='Familiar skill image'/>}
              {skill.name}
            </div>
          )
        })}
      </Text>
      <SubHeader>Languages</SubHeader>
      <Text>
      <Image src={languageImg} alt='Language image'/>
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

export default Skills;