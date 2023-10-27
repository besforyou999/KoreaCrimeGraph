import React from 'react';
import {useHistory} from 'react-router-dom';
import '../css/styles.css';
import Button from '../presentational/Button.js';

function CrimeButton(props) {
  const object = props.obj;
  const history = useHistory();
  const crime_type = object['범죄분류']

  function handleClick() {
    history.push({
      pathname: '/CrimeSpec',
      '범죄분류': crime_type,
    })
  }

  return (
    <div>
        <Button text={crime_type} click={handleClick}/>
    </div>
  ); 
}

export default React.memo(CrimeButton);