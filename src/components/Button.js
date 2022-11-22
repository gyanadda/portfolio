import React, { Component }  from 'react';
import './../App.css'; // Tell webpack that Button.js uses these styles

function Button() {
  return (
     <div >
       <a href='#Coffee' className='Button'>Coffee ?</a>
     </div>
  );
}

export default Button;