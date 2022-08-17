import React from 'react'; 
import {useSelector} from 'react-redux';
import CrimeChartSortedByCaseCount from '../components/CrimeChartSortedByCaseCount';
import '../css/styles.css';

function createPair(name, case_number) {
  return {
    name: name,
    number: case_number
  }
}

function calc_case_sum(obj, location) {
  let sum = 0;
  for (let i = 0 ; i < location.length ; i++) {
    sum += obj[location[i]];
  }
  return sum;
}

export default function ListSortByCase() {
  const data = useSelector(state => state.csvData.csvData).data;
  const locations = useSelector(state => state.csvData.locations);
  const classKey = '범죄분류';
  let new_arr = [], crime_name_arr = [];
  
  for (let i = 0 ; i < data.length ; i++) {
    let item = data[i];
    let crimeName = item[classKey];
    let crimeNum = calc_case_sum(item, locations);
    new_arr.push(createPair(crimeName, crimeNum));
  }

  new_arr.sort(function(a,b) {
    return b.number - a.number;
  })

  for (let i = 0 ; i < new_arr.length ; i++) {
    crime_name_arr.push(new_arr[i].name);
  }
  
  return (
    <div className='crimeCaseList'>
      <div className='chartPage2'>
        <CrimeChartSortedByCaseCount data={new_arr}/>
      </div>
    </div>
  )
}