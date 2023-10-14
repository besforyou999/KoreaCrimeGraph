import React from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer } from 'recharts';

export default function Chart({y_data, x_data, click}) {

  const data = [];
  y_data.map( loc => data.push({ name: loc, case: x_data[loc] }));

  return (
      <ResponsiveContainer width="95%" height="95%">
        <BarChart data={data}
          margin={{ top: 0, right: 10, left: 0, bottom: 5 }}
          layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number"/>
          <YAxis dataKey="name" type="category"/>
          <Tooltip />
          <Legend />
          <Bar dataKey="case" fill="gray" onclick={()=>click()}/>
        </BarChart>
      </ResponsiveContainer>
  );
  
}