import React, { Component }  from 'react'; 
import './../App.css'; // Tell webpack that Button.js uses these styles
import pic from './../IMG_0555.jpg';

function Image() {
    return (
        <img class='my-pic' src={pic} alt=''/>
    );
  }
export default Image;