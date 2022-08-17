import React from 'react';
import {
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer
} from 'recharts';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function CrimeChartSortedByCaseCount(props) {
  const history = useHistory();
  const csvData = useSelector(state => state.csvData.csvData).data;

  function handleClick(name) {
    let obj;
    for (let i = 0 ; i < csvData.length ; i++) {
      if (name === csvData[i].범죄분류) {
        obj = csvData[i];
        break;
      }
    }
    history.push({
      pathname: '/CrimeSpec',
      state: {
        object: obj
      }
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
          <Bar dataKey="number" fill="gray" onClick={ function(e) {
            handleClick(e.name);
          }}/>
        </BarChart>
      </ResponsiveContainer>
  );
}