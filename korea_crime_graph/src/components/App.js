import React, {useState, useEffect} from "react";
import CrimeList from "./CrimeList.js";
import csvFile from '../resource/crime_loc.csv';
import Papa from 'papaparse';

import {useDispatch} from 'react-redux';
import { setCsvData } from '../features/csvData/csvDataSlice';

function App () { 
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  //const count = useSelector(state => state.csvData.value);
  const dispatch = useDispatch();

  function buildData() {
    Papa.parse(csvFile, {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: results => {
        parseCSV(results);
      },
      error: () => {
        console.log("error while parsing csv");
      },
    });
  }

  function parseCSV(results) {
    setData(results);
    setLoading(false);
  }

  useEffect(()=>{
    dispatch(setCsvData(data));
    buildData();
  }, [data])

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

export default App;

/*<button onClick={() => dispatch(setCsvData([100]))}>Testing Redux</button>*/