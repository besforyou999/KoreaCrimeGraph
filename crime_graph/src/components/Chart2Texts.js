import React from 'react';
import Chart2Text from './Chart2Text';
import '../css/styles.css';

export default function Chart2Texts(props) {
  const names = props.data;
  console.log(names);
  /*
   return (
    <div className='crimeTextColumn'>
      { names.map( name => {
          <Chart2Text name={name}/>
        }) }
    </div>
   )
   */
}