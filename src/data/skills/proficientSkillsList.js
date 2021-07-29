import { SiJavascript } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiNodeDotJs } from 'react-icons/si';
import express from '../../images/skills/express.png'
import sequelize from '../../images/skills/sequelize.png'
import { SiPostgresql } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';
import { SiGit } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';

const proficientSkillsList = [
  {name: 'JavaScript', image: <SiJavascript />, reactIcon: true},
  {name: 'HTML', image: <SiHtml5 />, reactIcon: true},
  {name: 'CSS', image: <SiCss3 />, reactIcon: true},
  {name: 'Node.js', image: <SiNodeDotJs />, reactIcon: true},
  {name: 'Express', image: express, reactIcon: false},
  {name: 'Sequelize', image: sequelize, reactIcon: false},
  {name: 'PostgreSQL', image: <SiPostgresql />, reactIcon: true},
  {name: 'React', image: <SiReact />, reactIcon: true},
  {name: 'Redux', image: <SiRedux />, reactIcon: true},
  {name: 'Git', image: <SiGit />, reactIcon: true},
  {name: 'GitHub', image: <SiGithub />, reactIcon: true},
]

export default proficientSkillsList;
