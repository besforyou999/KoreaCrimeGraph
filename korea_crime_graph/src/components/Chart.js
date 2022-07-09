import React, { PureComponent } from 'react';
import {
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer
} from 'recharts';

function create_data(crime_name, case_count) {
  return {
    name: crime_name,
    case: case_count
  };
}

export default class Chart extends PureComponent {
  constructor(props) {
    super(props);
    let new_data = [];
    const locations = this.props.locations;
    const object = this.props.obj;

    if (locations.length >= 17)
      locations.shift();

    locations.map( element => (
      new_data.push(create_data(element, object[element]))
    ));

    this.state = {
      data: new_data
    }
  }

  render() {
    return (
        <ResponsiveContainer width="95%" height="95%">
          <BarChart data={this.state.data}
            margin={{
              top: 0, right: 10, left: 0, bottom: 5,
            }}
            layout="vertical"
          >
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