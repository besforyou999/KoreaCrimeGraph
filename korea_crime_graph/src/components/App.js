import React, {Component} from "react";
import CrimeList from "./CrimeList.js";
import csvFile from '../resource/crime_loc.csv';
import Papa from 'papaparse';

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
    }
  }
  
  setData() {
    Papa.parse(csvFile, {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: results => {
        this.parseCSV(results);
      },
      error: () => {
        console.log("error while parsing csv");
      },
    });
  }

  parseCSV(results) {
    this.setState({
      data: results, isLoading: false
    });
  }

  componentDidMount() {
    this.setData();
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

