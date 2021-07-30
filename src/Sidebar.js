import React from 'react';
import styled from 'styled-components'
import {Mail} from '@styled-icons/heroicons-solid/Mail'
import {LinkedinWithCircle} from '@styled-icons/entypo-social/LinkedinWithCircle'
import {Github} from '@styled-icons/evaicons-solid/Github'
// import {Newspaper} from '@styled-icons/ionicons-solid/Newspaper'
import {BusinessCard} from '@styled-icons/typicons/BusinessCard'
import katarinaYangResume from './data/katarina_yang_resume.pdf'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start;
  align-items: center; */
  position: fixed;
  top: 17rem;
  left: 1rem;
  width: 100rem;
  /* z-index: 1; */
`
const Icon = styled.a`
  max-width: 4%;
  color: #66696F;
  margin: 1rem;
  &:hover {
    transition: color 1s;
    color: white;
  }
`

export const Sidebar = () => {
  return (
    <Container>
      <Icon href="mailto:yangkb09@gmail.com">
        <Mail />
      </Icon>
      <Icon href="https://www.linkedin.com/in/yangkb09/">
        <LinkedinWithCircle />
      </Icon>
      <Icon href="https://github.com/yangkb09/">
        <Github />
      </Icon>
      <Icon href={katarinaYangResume}>
        <BusinessCard />
      </Icon>
    </Container>
  )
}

export default Sidebar;
