import React, {useState, useEffect} from "react";
import MainPage from "./MainPage.js";
import csvFile from '../resource/crime_loc.csv';
import Papa from 'papaparse';

import { useDispatch } from 'react-redux';
import { setCsvData , setLocations } from '../features/csvData/csvDataSlice';

function App () { 

  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();

  function buildData() {
    Papa.parse(csvFile, {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: results => {
        const keys = Object.keys(results.data[0]);
        keys.splice(0,1);
        dispatch(setLocations(keys));
        dispatch(setCsvData(results));
        setLoading(false);
      },
      error: () => {
        console.log("error while parsing csv");
      },
    });
  }

  useEffect(()=>{
    buildData();
  })

  return (
    <div className="container">
      {isLoading ? (
        <div className="loading">
          <span>Loading...</span>
        </div>
      ) : (
      <div>
        <MainPage/>
      </div>
      )}
    </div>
  );
}

export default App;
