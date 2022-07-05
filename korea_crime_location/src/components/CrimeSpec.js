import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import Chart from './Chart.js';
import '../css/CrimeClass.css';

export default function CrimeSpec() {
  const location = useLocation();
  const object = location.state.object;
  const locations = location.state.locations;
  const crime_class = object.범죄분류;
  let idx = 0;
  return (
    <div>
      <div>
        <Link to="/">
          <button className='HomeBtn'>
            Home
          </button>
        </Link>
      </div>

      <div className='CrimeClass'>
        <h3>{crime_class}</h3>
      </div>
      <div>
        <Chart locations={locations} obj={object}/>
      </div>
    </div>
  );
}
