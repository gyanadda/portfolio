import React, { Component }  from 'react';
import './../App.css'; // Tell webpack that Button.js uses these styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import footerImage from './../footerImage.png';


function Hello() {
    return (
        <section className='Hello' id='Hello'>
          <div className='row'>
              <div className='large-4-12 columns pad10'>
                  <p>
                    <b>
                        No &copy; copyright issues.
                    </b>
                    <br/>
                    Feel free to copy. If you need any help, ping me !
                  </p>
              </div>
              <div className='large-4-12 columns'>
                  <p className='footTitle alignCentre'>Shubham Agrawal</p>
                  <p className='madeWithLove'>Made with <FontAwesomeIcon icon="fa-solid fa-heart"  className='fa-heart'/> in India</p>
                </div>
            <div className='large-4-12 columns alignCentre pad10'>
                <p className='alignCentre'>Find me anywhere</p>
                <ul class='media'>
                    <li>
                        <a href='https://www.linkedin.com/in/shubham-agrawal-2608/' target='_blank' rel="noopener">
                            <FontAwesomeIcon icon="fa-brands fa-linkedin" className='fa fa-linkedin' />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.facebook.com/shubham.agrawal.180625/' target='_blank' rel="noopener">
                            <FontAwesomeIcon icon="fa-brands fa-facebook" className='fa fa-facebook'/>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/shubh.agr/' target='_blank' rel="noopener">
                            <FontAwesomeIcon icon="fa-brands fa-instagram" className='fa fa-instagram'/>
                        </a>
                    </li>
                </ul>
            </div>
          </div>
          <div className='row'>
            <img class='footer-image' src={footerImage} alt=''/>  
          </div>
      </section>
    );
}

export default Hello;