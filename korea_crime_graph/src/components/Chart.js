import React, { PureComponent } from 'react';
import {
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar
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

    locations.map( element => (
      new_data.push(create_data(element, object[element]))
    ));

    this.state = {
      data: new_data
    }
  }

  render() {
    return (
      <BarChart
        width={1400}
        height={650}
        data={this.state.data}
        margin={{
          top: 40, right: 30, left: 0, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="case" fill="gray" />
      </BarChart>
    );
  }
}