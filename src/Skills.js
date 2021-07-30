import React from 'react';
import styled from 'styled-components'
import proficientSkillsList from './data/skills/proficientSkillsList'
import familiarSkillsList from './data/skills/familiarSkillsList'
import languageList from './data/skills/languageList'
import {Language} from '@styled-icons/fa-solid/Language'

import { Icon, InlineIcon } from '@iconify/react';
import sequelizeIcon from '@iconify-icons/file-icons/sequelize';

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
  max-width: 4%;
`
const ReactIcon = styled.div`
  font-size: 4rem;
`

const SmallLanguage = styled(Language)`
  max-width: 4%;
`

export const Skills = () => {
  return (
    <Container>
      <SectionHeader>Skills</SectionHeader>
      <SubHeader>Proficient</SubHeader>
      <Text>
      {/* <Icon icon={sequelizeIcon} color="white" /> */}
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
      <SmallLanguage />
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
