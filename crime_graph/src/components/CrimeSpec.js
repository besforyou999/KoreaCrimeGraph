import React from 'react';
import { Link , useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Chart from './Chart.js';
import '../css/styles.css';

export default function CrimeSpec() {
  const location = useLocation();
  const object = location.state.object;
  const locations = useSelector(state => state.csvData.locations);
  const crime_class = object.범죄분류;
  
  return (
    <div className='chartPage'>
      <div>
        <Link to="/korea_crime_graph">
          <button className='btn'>
            Home
          </button>
        </Link>
      </div>
      <div className='CrimeClass'>
        <h3>{crime_class}</h3>
      </div>
      <div className='chartContainer'>
        <Chart locations={locations} obj={object}/>
      </div>
    </div>
    
  );
  
}
