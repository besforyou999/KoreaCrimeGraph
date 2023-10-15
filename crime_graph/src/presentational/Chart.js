import React from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer } from 'recharts';

export default function Chart({y_data, x_data, margin}) {

  const data = [];
  for (let i = 0 ; i < y_data.length ; i++) 
    data.push({name: y_data[i], case: x_data[i]})

  return (
      <ResponsiveContainer width="95%" height="95%">
        <BarChart data={data}
          margin={margin}
          layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number"/>
          <YAxis dataKey="name" type="category"/>
          <Tooltip />
          <Legend />
          <Bar dataKey="case" fill="#82ca9d"/>
        </BarChart>
      </ResponsiveContainer>
  );
  
}