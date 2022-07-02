import React, {Component} from "react";
import axios from 'axios';
import "./App.css";

class App extends React.Component { 

  state = {
    data: null
  };

  componentDidMount() {
    this.getData();
  }
  
  getData = async () => {
    const crime_data = await axios.get("https://infuser.odcloud.kr/oas/docs?namespace=15085726/v1&W%2BgUq1akbVmoWv4%2BIoQyj28WxZMlpH5VraaxOqwv2o8QAEkLDvUO8hNp8vihviaBmmW6Zoq30f2Ux%2BABGwuXsg%3D%3D");
    this.setState({crime_data});
    console.log(crime_data.data);
  }

  render() {
    return (
      <div><h2>hello world</h2></div>
    );
  }
}



export default App;
