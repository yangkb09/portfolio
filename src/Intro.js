import React from 'react';
import styled from 'styled-components/macro'

const ImportContainer = styled.div`
  font-size: 5rem;
  font-weight: bold;
  text-shadow: 4px 4px #7289da;
  align-items: center;

`
const Image = styled.img`
  border-radius: 50%;
  max-width: 25%;
  box-shadow: 4px 4px white;
`

const Header = styled.div`
  /* float: left; */
`

const Greeting = styled.span`
  align-items: center;
`

export const Intro = () => {
  return (
      <ImportContainer>
        <Header>
          <Image
            src="/katpic.jpg"
            alt="Kat looking directly at camera in black t-shirt and gold necklace"
          />
          <Greeting>
            I'm Kat, nice to meet you!
          </Greeting>
        </Header>
      </ImportContainer>
  )
}

export default Intro;
