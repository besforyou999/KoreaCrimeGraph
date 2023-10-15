import React from 'react';
import Chart from '../presentational/Chart.js';

function CrimeChartCases(props) {

  const y_data = []
  const x_data = []

  for (const ele of props.data) {
    y_data.push(ele.name)
    x_data.push(ele.number)
  }

  const margin = {top: 0, right: 10, left: 10, bottom: 5};

  return (
    <Chart y_data={y_data} x_data={x_data} margin={margin}/>
  );
}

export default React.memo(CrimeChartCases);