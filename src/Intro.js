import React from 'react';
import styled from 'styled-components/macro'

const IntroContainer = styled.div`
  font-size: 3rem;
  font-weight: bold;
  /* position: relative; */
  display: flex;
  flex-direction: column;
`
const Image = styled.img`
  border-radius: 50%;
  max-width: 33%;
  box-shadow: 8px 8px #7289da;
  float: left;
`

const HeaderContainer = styled.div`
  /* float: left; */
  /* align-items: center; */
`
const HeaderText = styled.div`
  /* position: absolute;
  top: 350px;
  left: 350px; */
`

const Subheader = styled.div`

`

const Greeting = styled.span`
  font-size: 5rem;
  font-weight: bold;
  text-shadow: 4px 4px #7289da;
  /* align-items: center; */
`

export const Intro = () => {
  return (
      <IntroContainer>
        <HeaderContainer>
          <Image
            src="/katpic.jpg"
            alt="Kat looking directly at camera in black t-shirt and gold necklace"
          />
          <HeaderText>
            <Subheader>Nice to meet you,</Subheader>
            <Greeting>I'm Kat Yang!</Greeting>
          </HeaderText>
        </HeaderContainer>
        <Subheader>(they/she)</Subheader>
        <Subheader>I'm a Fullstack Software Engineer and former social scientist.</Subheader>
      </IntroContainer>
  )
}

export default Intro;
