import React from 'react';
import ExperienceItem from './ExperienceItem'
import styled from 'styled-components/macro'
import experienceData from './data/experienceData'

const BodyContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;

`

const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 40px 0;
    background-color: goldenrod;
    width: 100%;

    &:nth-child(odd) {
      color: purple
    }
    //creates white vertical timeline bar
    &:after {
      background-color: white;
      content: '';
      position: absolute;
      left: calc(50% - 2px); //middle of page
      width: 4px;
      height: 100%;
    }

`

const SectionHeader = styled.div`
  font-size: 3rem;
  font-weight: bold;
`

export const Experience = () => {
  // return (
  //   <div className="timeline-container">
  //     <SectionHeader>Experience</SectionHeader>
  //     {experienceData.map((data, idx) => (
  //               <ExperienceItem data={data} key={idx} />
  //           ))}
  //   </div>
  // )
  return (
    <BodyContainer>
      <SectionHeader>Experience</SectionHeader>
      <Container>
        {experienceData.map((data, idx) => (
                  <ExperienceItem data={data} key={idx} />
              ))}
      </Container>
    </BodyContainer>
  )
}

export default Experience;
