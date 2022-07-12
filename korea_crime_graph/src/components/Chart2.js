import React from 'react';
import {
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer
} from 'recharts';


export default function Chart2(props) {
  return (
      <ResponsiveContainer width="95%" height="95%">
        <BarChart data={props.data}
          margin={{
            top: 0, right: 10, left: 20, bottom: 5,
          }}
          layout="vertical"
          >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number"/>
          <YAxis dataKey="name" type="category"/>
          <Tooltip />
          <Legend />
          <Bar dataKey="number" fill="gray" />
        </BarChart>
      </ResponsiveContainer>
  );
}