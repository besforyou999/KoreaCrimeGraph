import React from 'react';
import Chart from '../presentational/Chart.js';
import { useHistory } from 'react-router-dom';

function CrimeChartCases(props) {

  const y_data = []
  const x_data = []

  for (const ele of props.data) {
    y_data.push(ele.name)
    x_data.push(ele.number)
  }

  const history = useHistory();

  const barClickHandler = (e) => {
    history.push({
      pathname: '/CrimeSpec',
      '범죄분류': e.name,
    })
  }

  const margin = {top: 0, right: 10, left: 100, bottom: 5};

  return (
    <Chart y_data={y_data} x_data={x_data} margin={margin} clickHandler={barClickHandler}/>
  );
}

export default React.memo(CrimeChartCases);