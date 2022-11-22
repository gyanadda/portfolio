// import logo from './logo.svg';
import React, { Component }  from 'react';
import './App.css';
import './components/Button.js';
import Coffee from './components/Coffee';
import Intro from './components/Intro';
import About from './components/About';
// import GetInTouch from './components/GetInTouch';
import Hello from './components/Hello';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faArrowRight} from '@fortawesome/free-solid-svg-icons';

library.add(faLinkedin, faFacebook, faInstagram, faHeart, faArrowRight);
function App() {
  return (
    <div className="App">
      <Intro/>
      <About/>
      {/* <GetInTouch/> */}
      <Coffee/>
      <Hello/>

    </div>
  );
}

export default App;
