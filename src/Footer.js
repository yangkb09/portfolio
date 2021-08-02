import React from 'react';
import styled from 'styled-components'
import {ChevronUpCircle} from '@styled-icons/boxicons-solid/ChevronUpCircle'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Button = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 10rem;
`

const WhiteUpButton = styled(ChevronUpCircle)`
  max-width: 3rem;
  color: #66696F;
  margin: 1rem;
  cursor: pointer;
  &:hover {
    transition: color 1s;
    color: white;
  }
`

const FooterText = styled.div`
  font-weight: bold;
  margin: 2rem;
`

export const Footer = () => {
  return (
    <Container>
      <Button>
        <WhiteUpButton
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      </Button>
      <FooterText>© 2021 Katarina Yang. All Rights Reserved.</FooterText>
    </Container>
  )
}

export default Footer;
