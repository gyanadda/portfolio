import React, { Component }  from 'react';
import './../App.css'; // Tell webpack that Button.js uses these styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Coffee() {
    return (
      <section className="Coffee" id='Coffee'>
        <div className='alignCentre coffee'>
            <h1>Coffee with me.</h1>
            <p>
                I am always excited to work with bright minded folks with a cup of <b>Cappuccino.</b>
            </p>
            <form id='message-form' className='message-form' autoComplete='off'>
              <div className='message-form-inner'>
                <span><label for="q1">Write a message for me</label></span>
                <input type="text" id="q1" name="q1"/>
                <div className='control'>
                  <button className='submit'>
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right" className='fa fa-arrow-right'/>
                  </button>
                </div>
              </div>
            </form>
        </div> 
      </section>
    );
  }
export default Coffee;
