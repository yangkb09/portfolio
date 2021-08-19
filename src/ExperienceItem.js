import React, { useState } from 'react';
import styled from 'styled-components/macro'

const ExperienceItemContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  /* position: relative; */
  margin: 10px 0;
  width: 50%;
  /* &:nth-child(odd) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-left: 30px;
    padding-right: 0;
    background-color: purple;
    text-align: left;
    align-items: flex-start;
    color: red;
    &:after {
      right: auto;
      left: -7.5px;
      box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.2);
    }
  } */
`
const ItemContent = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: green;
  display: flex;
  flex-direction: column;
  /* align-items: flex-end; */
  padding: 15px;
  position: relative;
  width: 400px;
  max-width: 70%;
  text-align: right;
  &:after {
    content: ' ';
    background-color: green;
    box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.2);
    position: absolute;
    right: -7.5px;
    top: calc(50% - 7.5px);
    transform: rotate(45deg);
    width: 15px;
    height: 15px;
  }
  /* issue: nth-child(odd) selectors aren't working */
  /* & :nth-child(odd) {
    text-align: left;
    align-items: flex-start;
    color: red;
  } */
  /* &:nth-child(odd){
    right: auto;
    left: -7.5px;
    box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.2);
  } */
}
`

const Tag = styled.span`

`

const ExperienceItem = ({ data }) => (
  <ExperienceItemContainer>
    <ItemContent>
      <span className="tag" >
          {data.icon}
      </span>
      <div>{data.duration}</div>
      <p>{data.title}</p>
      <p>{data.company}</p>
      <span className="circle" />
    </ItemContent>
  </ExperienceItemContainer>


  // <div className="timeline-item">
  //     <div className="timeline-item-content">
  //         <span className="tag" >
  //             {data.icon}
  //         </span>
  //         <div>{data.duration}</div>
  //         <p>{data.title}</p>
  //         <p>{data.company}</p>
  //         <span className="circle" />
  //     </div>
  // </div>
);

export default ExperienceItem;
