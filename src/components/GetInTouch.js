import React, { Component }  from 'react';
import './../App.css'; // Tell webpack that Button.js uses these styles

function GetInTouch() {
    return (
        <section className='GetInTouch' id='GetInTouch'>
            <div className='getInTouch'>
                <h1>
                    <br/>
                    <span >Shubham Agrawal</span>
                    <br/>
                    <span >I am a Backend Engineer.</span>
                </h1>
          </div>
      </section>
    );
}

export default GetInTouch;