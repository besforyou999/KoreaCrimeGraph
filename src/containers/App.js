import React, {useState } from "react";
import MainPage from "../containers/MainPage.js";
import csvFile from '../resource/crime_loc.csv';
import Papa from 'papaparse';

import { useDispatch } from 'react-redux';
import { setCsvData , setLocations } from '../features/csvData/csvDataSlice.js';


function App () { 

  const [isLoading, setLoading] = useState(true);
  const [dataFetched, setDataFetched] = useState(false);
  const dispatch = useDispatch();

  const fetch_success = async result => {
    const json = await result.json();
    // 전체 데이터 store에 전송
    dispatch(setCsvData(json));

    // 지역 데이터 store에 전송
    const locations = Object.keys(json.data[0]);
    locations.splice(7, 1); // 중간에 '범죄분류' 키 삭제
    dispatch(setLocations(locations))

    setLoading(false);
    setDataFetched(true);
  }

  const fetch_fail = () => {
    Papa.parse(csvFile, {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: results => {
        const keys = Object.keys(results.data[0]);
        keys.splice(0,1); // 키값 중 '범죄분류' 제거
        dispatch(setLocations(keys));
        dispatch(setCsvData(results));
        setLoading(false);
        setDataFetched(true);
      },
      error: () => console.log("csv 파일 파싱 에러"),
    });
  }

  const fetch_data = async () => {
    const api_key = process.env.REACT_APP_APIKEY;
    const url = `https://api.odcloud.kr/api/15085727/v1/uddi:d57791f7-1e1e-46c9-bbfd-911fa64ee8a4?page=1&perPage=200&serviceKey=${api_key}&dataType=JSON`;
    const result = await fetch(url);

    if (result.status === 200) {
      console.log("success");
      fetch_success(result);
    } else {
      console.log("fail")
      fetch_fail(result);
    }
  }

  if (isLoading && !dataFetched) fetch_data();

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
