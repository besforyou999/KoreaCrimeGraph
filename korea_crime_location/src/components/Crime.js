import React, {Component} from "react";

class Crime extends Component {
  constructor(props) {
    super(props);
    
    let data = JSON.parse(window.localStorage.getItem('totalData'));
    let obj = data.data.data[this.props.id];

    this.state = {
      id: this.props.id,
      obj: obj,
    };
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <h4 >{this.props.crimeName}</h4>
      </div>
    );
  }
}

export default Crime;