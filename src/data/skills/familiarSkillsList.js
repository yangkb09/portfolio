import { SiTwitter } from 'react-icons/si';
import { SiGoogle } from 'react-icons/si';
import { SiGooglecloud } from 'react-icons/si';
import sql from '../../images/skills/sql.png'
import { SiHeroku } from 'react-icons/si';
import { SiNetlify } from 'react-icons/si';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { SiBootstrap } from 'react-icons/si';
import { SiMocha } from 'react-icons/si';
import { GiJasmine } from 'react-icons/gi';
import { SiTravisci } from 'react-icons/si';

const familiarSkillsList = [
  {name: 'Twitter API', image: <SiTwitter />, reactIcon: true},
  {name: 'Google NLP API', image: <SiGoogle />, reactIcon: true},
  {name: 'Google Cloud Platform', image: <SiGooglecloud />, reactIcon: true},
  {name: 'SQL', image: sql, reactIcon: false},
  {name: 'Heroku', image: <SiHeroku />, reactIcon: true},
  {name: 'Netlify', image: <SiNetlify />, reactIcon: true},
  {name: 'Ant Design', image: <AiOutlineAntDesign />, reactIcon: true},
  {name: 'Bootstrap', image: <SiBootstrap />, reactIcon: true},
  {name: 'Mocha', image: <SiMocha />, reactIcon: true},
  {name: 'Jasmine', image: <GiJasmine />, reactIcon: true},
  {name: 'Travis CI', image: <SiTravisci />, reactIcon: true},
]

export default familiarSkillsList;
