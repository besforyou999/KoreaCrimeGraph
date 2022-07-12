import React from 'react';
import {Link} from 'react-router-dom';
import '../css/styles.css';

function CrimeButton(props) {
  const object = props.obj;

  return (
    <div>
      <Link to={{
        pathname: 'CrimeSpec',
        state: {
          object: object
        }
      }}>
        <button className='crimeBtn'>
          {object.범죄분류}
        </button>
      </Link>
    </div>
  ); 
  
}

export default CrimeButton;