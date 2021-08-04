import React, { useState } from 'react';
import styled from 'styled-components/macro'

const ExperienceItemContainer = styled.div`

`

const ItemContent = styled.div`

`

const Tag = styled.span`

`

const ExperienceItem = ({ data }) => (
  <div className="timeline-item">
      <div className="timeline-item-content">
          <span className="tag" style={{ background: data.category.color }}>
              {data.category.tag}
          </span>
          <time>{data.date}</time>
          <p>{data.text}</p>
          {data.link && (
              <a
                  href={data.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  {data.link.text}
              </a>
          )}
          <span className="circle" />
      </div>
  </div>
);

export default ExperienceItem;
