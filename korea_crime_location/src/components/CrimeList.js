import React, {Component} from 'react';
import Crime from './Crime.js';

class CrimeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objs : this.props.obj
    };
  }

  render() {
    let idx = 0;
    const objects = this.state.objs;
    return (
      <div>
        <h3>Crime List</h3>
        {objects.map(crime => (
            <Crime
              crimeName={crime.범죄분류}
              key={crime.범죄분류}
              id={idx++}
            />
        ))}
      </div>
    );
  }
}


export default CrimeList;