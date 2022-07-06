import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import '../css/Buttons.css';

class CrimeButton extends Component {
  constructor(props) {
    super(props);

    const object = this.props.obj;
    let locations = Object.keys(object);
    locations.splice(7,1);
    this.state = {
      object: object,
      locations: locations
    }
  }

  render() {
    return (
      <div>
        <Link to={{
          pathname: 'CrimeSpec',
          state: {
            object: this.state.object,
            locations: this.state.locations
          }
        }}>
          <button className='CrimeBtn'>
            {this.state.object.범죄분류}
          </button>
        </Link>
      </div>
    ); 
  }
}

export default CrimeButton;