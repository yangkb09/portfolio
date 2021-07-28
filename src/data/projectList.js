import fruitStock from '../images/fruitStock.jpg'

const projectList = [
  {
    projectId: 1,
    name: 'TweeterMeter',
    imageUrl: fruitStock,
    description: 'Web application enabling users to gauge sentiment of Twitter users through machine learning.',
    role: 'Solo Developer',
    projectUrl: 'https://tweetermeter.herokuapp.com/',
    githubURL: 'https://github.com/yangkb09/TweeterMeter',
    techStack: 'JavaScript, Twitter API, Google Cloud Natural Language API, Express, React, Redux, CSS, Heroku',
  },
  {
    projectId: 2,
    name: 'MyTab',
    imageUrl: fruitStock,
    description: 'Progressive web application allowing users to split bills and track shared expenses.',
    role: 'Fullstack Developer',
    projectUrl: 'https://mytab-ghp.herokuapp.com/signup',
    githubURL: 'https://github.com/yangkb09/MyTab',
    techStack: 'JavaScript, Express, Sequelize, PostgreSQL, React, Redux, Ant Design, Amazon OAuth, Currency.js, Heroku',
  },
  {
    projectId: 3,
    name: 'Virtual Realty',
    imageUrl: fruitStock,
    description: 'E-commerce real estate web application allowing customers to browse getaway homes.',
    role: 'Fullstack Developer',
    projectUrl: 'https://virtual-realty.herokuapp.com/',
    githubURL: 'https://github.com/yangkb09/GraceShopper',
    techStack: 'JavaScript, Express, Sequelize, PostgreSQL, React, Redux, CSS, Heroku',
  }
]

export default projectList;
