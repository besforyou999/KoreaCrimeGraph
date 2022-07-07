import React, {Component} from "react";
import CrimeList from "./CrimeList.js";
import csvFile from '../resource/crime_loc.csv';
import Papa from 'papaparse';

let csv_data = null;
Papa.parse(csvFile, {
  download: true,
  complete: function(input) {
    csv_data = input;
  }
});

class App extends Component { 
  state = {
    isLoading: true,
    data: null,
  };

  create_crime_obj(array) {
    return {
      범죄분류: array[0],
      서울: Number(array[1]),
      부산: Number(array[2]),
      대구: Number(array[3]),
      인천: Number(array[4]),
      광주: Number(array[5]),
      대전: Number(array[6]),
      울산: Number(array[7]),
      세종: Number(array[8]),
      경기: Number(array[9]),
      강원: Number(array[10]),
      충북: Number(array[11]),
      충남: Number(array[12]),
      전북: Number(array[13]),
      전남: Number(array[14]),
      경북: Number(array[15]),
      경남: Number(array[16]),
      제주: Number(array[17]),
    }
  }

  getData () {
    const data2 = this.buildData();
    this.setState({data: data2 , isLoading: false});
  }

  buildData () {
    let data_array = [];
    for (let i = 1 ; i <= 162 ; i++) {
      data_array.push(this.create_crime_obj(csv_data.data[i]));
    }
    return data_array;
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

