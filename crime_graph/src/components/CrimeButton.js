import React from 'react';
import {useHistory} from 'react-router-dom';
import '../css/styles.css';

function CrimeButton(props) {
  const object = props.obj;
  const history = useHistory();

  function handleClick() {
  
    history.push({
      pathname: '/CrimeSpec',
      state: {
        object: object
      }
    })
  }

  return (
    <div>
        <button className='crimeBtn' onClick={ () => handleClick() }>
          {object.범죄분류}
        </button>
    </div>
  ); 
  
}

export default CrimeButton;