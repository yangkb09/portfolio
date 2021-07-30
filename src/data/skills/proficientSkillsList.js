import styled from 'styled-components'
import { SiJavascript } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiNodeDotJs } from 'react-icons/si';
import {Express} from '@styled-icons/simple-icons/Express'
import { SiPostgresql } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';
import { SiGit } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';

import { Icon, InlineIcon } from '@iconify/react';
import sequelizeIcon from '@iconify-icons/file-icons/sequelize';


const SmallExpress = styled(Express)`
  max-width: 4%;
`

const proficientSkillsList = [
  {name: 'JavaScript', image: <SiJavascript />, reactIcon: true},
  {name: 'HTML', image: <SiHtml5 />, reactIcon: true},
  {name: 'CSS', image: <SiCss3 />, reactIcon: true},
  {name: 'Node.js', image: <SiNodeDotJs />, reactIcon: true},
  {name: 'Express', image: <SmallExpress />, reactIcon: true},
  {name: 'Sequelize', image: <Icon icon={sequelizeIcon} color="white" />, reactIcon: true},
  {name: 'PostgreSQL', image: <SiPostgresql />, reactIcon: true},
  {name: 'React', image: <SiReact />, reactIcon: true},
  {name: 'Redux', image: <SiRedux />, reactIcon: true},
  {name: 'Git', image: <SiGit />, reactIcon: true},
  {name: 'GitHub', image: <SiGithub />, reactIcon: true},
]

export default proficientSkillsList;
