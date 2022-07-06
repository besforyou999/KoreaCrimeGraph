import axios from "axios";
import React, {Component} from "react";
import CrimeList from "./CrimeList.js";
import "../css/App.css";

class App extends Component { 
  state = {
    isLoading: true,
    data: [],
  };

  getData = async () => {
    const data = await axios.get("https://api.odcloud.kr/api/15085727/v1/uddi:d57791f7-1e1e-46c9-bbfd-911fa64ee8a4?page=0&perPage=162&serviceKey=W%2BgUq1akbVmoWv4%2BIoQyj28WxZMlpH5VraaxOqwv2o8QAEkLDvUO8hNp8vihviaBmmW6Zoq30f2Ux%2BABGwuXsg%3D%3D");
    this.setState({data: data.data.data , isLoading: false});
    window.localStorage.setItem('totalData', JSON.stringify(data));
    let obj_keys = Object.keys(data.data.data[0]);
    window.localStorage.setItem('dataKeys', JSON.stringify(obj_keys));
  }

  componentDidMount() {
    this.getData();
  }
  
  render() {
    const {isLoading, data} = this.state;
    return (
      <div className="container">
        {isLoading ? (
          <div className="loading">
            <span>Loading...</span>
          </div>
        ) : (
        <div>
          <CrimeList obj={data}></CrimeList>
        </div>
        )}
      </div>
    );
  }
}


export default App;

