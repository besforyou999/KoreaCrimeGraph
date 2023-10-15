import React from 'react';
import Chart from '../presentational/Chart.js';

function CrimeChartCases(props) {

  const y_data = []
  const x_data = []

  for (const ele of props.data) {
    y_data.push(ele.name)
    x_data.push(ele.number)
  }

  return (
    <Chart y_data={y_data} x_data={x_data}/>
  );
}

export default React.memo(CrimeChartCases);