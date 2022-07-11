import React from 'react';
import {Link} from 'react-router-dom';
import '../css/styles.css';

function CrimeButton(props) {
  const object = props.obj;
  let locations = Object.keys(object);
  locations.splice(7,1);
  
  return (
    <div>
      <Link to={{
        pathname: 'CrimeSpec',
        state: {
          object: object,
          locations: locations
        }
      }}>
        <button className='CrimeBtn'>
          {object.범죄분류}
        </button>
      </Link>
    </div>
  ); 
  
}

export default CrimeButton;