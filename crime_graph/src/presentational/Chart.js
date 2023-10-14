import React, { Component } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer } from 'recharts';

export default class Chart extends Component {
  constructor(props) {
    super(props);

    const data = [];
    const locations = [...this.props.locations];
    const records = this.props.obj;
    locations.map( loc => data.push({ name: loc, case: records[loc] }));
    this.state = { data }
  }

  render() {
    return (
        <ResponsiveContainer width="95%" height="95%">
          <BarChart data={this.state.data}
            margin={{ top: 0, right: 10, left: 0, bottom: 5 }}
            layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number"/>
            <YAxis dataKey="name" type="category"/>
            <Tooltip />
            <Legend />
            <Bar dataKey="case" fill="gray" />
          </BarChart>
        </ResponsiveContainer>
    );
  }
}