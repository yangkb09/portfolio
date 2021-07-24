import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import TechStack from './TechStack';
import Experience from './Experience';
import Footer from './Footer';
import Sidebar from './Sidebar';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Intro />
    <About />
    <Projects />
    <TechStack />
    <Experience />
    <Footer />
    <Sidebar />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
