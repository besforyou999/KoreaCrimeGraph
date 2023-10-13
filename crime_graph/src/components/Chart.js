import React, { PureComponent } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer } from 'recharts';

export default class Chart extends PureComponent {
  constructor(props) {
    super(props);

    const data = [];
    const locations = [...this.props.locations];
    const object = this.props.obj;

    locations.map( element => data.push({ name: element, case: object[element] }));
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