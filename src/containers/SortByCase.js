import React from 'react'; 
import {useSelector} from 'react-redux';
import CrimeChartCases from './CrimeChartCases';
import '../css/styles.css';

function calc_case_sum(obj, location) {
  let sum = 0;

  for (const ele of location) 
    sum += obj[ele]
  
  return sum;
}

function SortByCase() {
  const data = useSelector(state => state.csvData.csvData).data;
  const locations = useSelector(state => state.csvData.locations);
  const classKey = '범죄분류';
  const new_arr = [];
  for (let i = 0 ; i < data.length ; i++) {
    const item = data[i];
    const crimeName = item[classKey];
    const crimeNum = calc_case_sum(item, locations);
    new_arr.push({name: crimeName, number: crimeNum})
  }

  new_arr.sort((a, b) => b.number - a.number)
  
  return (
    <div className='crimeCaseList'>
      <div className='chartPage2'>
        <CrimeChartCases data={new_arr}/>
      </div>
    </div>
  )
}

export default React.memo(SortByCase);