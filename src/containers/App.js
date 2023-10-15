import React, {useState, useEffect} from "react";
import MainPage from "../containers/MainPage.js";
import csvFile from '../resource/crime_loc.csv';
import Papa from 'papaparse';

import { useDispatch } from 'react-redux';
import { setCsvData , setLocations } from '../features/csvData/csvDataSlice.js';

function App () { 

  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();

  // 범죄데이터 csv 파일 파싱 함수
  function parseCsvFile() {
    Papa.parse(csvFile, {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: results => {
        const keys = Object.keys(results.data[0]);
        keys.splice(0,1);
        dispatch(setLocations(keys));
        dispatch(setCsvData(results));
        setLoading(false); // 파싱 성공 -> 로딩 종료
      },
      error: () => console.log("error while parsing csv"),
    });
  }

  useEffect(()=>{
    parseCsvFile();
  })

  return (
    <div className="container">
      {isLoading ? 
        ( 
          <div className="loading">
            <span>Loading...</span>
          </div> 
        ) :
        ( 
          <div>
            <MainPage/>
          </div>
        )
      }
    </div>
  );
}

export default App;
