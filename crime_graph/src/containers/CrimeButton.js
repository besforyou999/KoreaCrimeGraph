import React from 'react';
import {useHistory} from 'react-router-dom';
import '../css/styles.css';
import Button from '../presentational/Button.js'

export default function CrimeButton(props) {
  const object = props.obj;
  const history = useHistory();
  const crime_type = object['범죄분류']

  function handleClick() {
    history.push({
      pathname: '/CrimeSpec',
      state: { object }
    })
  }

  return (
    <div>
        <Button text={crime_type} click={()=> handleClick()}/>
    </div>
  ); 
}