import React, { useEffect } from "react";
import MainPage from "../containers/MainPage.js";
import csvFile from '../resource/crime_loc_2019.csv';
import Papa from 'papaparse';

import { useDispatch, useSelector } from 'react-redux';
import { setCsvData , setLocations, setDataRead } from '../features/csvData/csvDataSlice.js';


function App () { 

  const dataRead = useSelector(state => state.csvData.dataRead);
  const dispatch = useDispatch();

  // 성공 시 store에 데이터 전송
  const fetch_success = async result => {
    const json = await result.json();
    // 전체 데이터 store에 전송
    dispatch(setCsvData(json));

    // 지역 데이터 store에 전송
    const locations = Object.keys(json.data[0]);
    locations.splice(7, 1); // 중간에 '범죄분류' 키 삭제
    dispatch(setLocations(locations))

    // 데이터 읽기 완료 시 -> dataRead 상태 true로 변경
    dispatch(setDataRead(true));
  }

  // 실패 시 csv 파일에 저장된 데이터 파싱해 store에 전송
  const fetch_fail = () => {
    Papa.parse(csvFile, {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: results => {

        // 지역 데이터 store에 전송
        const keys = Object.keys(results.data[0]);
        console.log(keys);
        keys.splice(0,1); // 키값 중 '범죄분류' 제거
        dispatch(setLocations(keys));
        
        // 전체 데이터 store에 전송
        dispatch(setCsvData(results));

        // 데이터 읽기 완료 시 -> dataRead 상태 true로 변경
        dispatch(setDataRead(true));
      },
      error: () => console.log("csv 파일 파싱 에러"),
    });
  }

  useEffect(() => {
    async function fetch_data() {
      const api_key = process.env.REACT_APP_APIKEY;
      const url = `https://api.odcloud.kr/api/15085727/v1/uddi:d57791f7-1e1e-46c9-bbfd-911fa64ee8a4?page=1&perPage=200&serviceKey=${api_key}&dataType=JSON`;
      try {
        const result = await fetch(url)
        fetch_success(result)
      } catch (err) {
        console.log(err);
        console.log("데이터 불러오기 실패. csv 데이터 파일 파싱 실행")
        fetch_fail()
      }
    }
    fetch_data()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="container" id='container'>
      {!dataRead ? 
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

export default React.memo(App);
