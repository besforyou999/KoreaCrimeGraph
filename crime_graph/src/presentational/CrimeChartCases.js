import React from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer } from 'recharts';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function CrimeChartCases(props) {
  const history = useHistory();
  const crimeDataMap = useSelector(state => state.csvData.crimeData);

  function handleClick(crime) {
    const object = crimeDataMap[crime];
    history.push({
      pathname: '/CrimeSpec',
      state: { object }
    })
  }

  return (
    
    <ResponsiveContainer width="95%" height="95%">
      <BarChart data={props.data}
        margin={{
          top: 20, right: 10, left: 20, bottom: 5,
        }}
        layout="vertical"
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number"/>
        <YAxis dataKey="name" type="category"/>
        <Tooltip />
        <Legend />
        <Bar dataKey="number" fill="gray" onClick={ e => handleClick(e.name) }/>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default React.memo(CrimeChartCases);