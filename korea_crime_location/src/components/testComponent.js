import React, {Component, Button} from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom'


export default function TestComponent() {
  const location = useLocation();
  const object = location.state.object;
  const locations = location.state.locations;
  const crime_class = object.범죄분류;
  let idx = 0;
  return (
    <div>
      <Link to="/">
        <button className='HomeBtn'>
          Home
        </button>
      </Link>
      <div>
        <h3>{crime_class}</h3>
        {locations.map( element => (
          <p key={idx++}>{element} : {object[element]}</p>
        ))}
      </div>
    </div>
  );
}
