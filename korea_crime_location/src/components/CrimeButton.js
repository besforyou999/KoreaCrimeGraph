import React, {Component} from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import testComponent from './testComponent.js';
import '../css/crimeButton.css';

class CrimeButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      object: this.props.obj
    }
  }

  render() {
    return (
      <div>
        <button className='crimeButton' onClick={function(e) {
        }.bind(this)}>
          {this.state.object.범죄분류}
        </button>
      </div>
    ); 
  }
}

export default CrimeButton;