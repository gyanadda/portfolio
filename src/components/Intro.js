import React, { Component }  from 'react';
import './../App.css'; // Tell webpack that Button.js uses these styles
import Button from './Button';
function Intro() {
    return (
        <section className='Intro' id='Intro'>
          <div className='intro'>
            <h1>
                <br/>
                <span className='title'>Shubham Agrawal</span>
                <br/>
            </h1>
            <span >I am a Backend Engineer.</span>
            <Button/>
          </div>
      </section>
    );
}

export default Intro;