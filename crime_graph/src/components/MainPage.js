import React from 'react';
import SortCrimeDataBy from './SortCrimeDataBy.js';
import MainPageTitle from './MainPageTitle.js';
import '../css/styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { setMainPageType } from '../features/csvData/csvDataSlice.js';

function MainPage() {

  const mainPageType = useSelector(state => state.csvData.mainPageType);
  const dispatch = useDispatch();

  return ( 
    <div>
      <MainPageTitle/>
      <div>
        <button className='btn' onClick={() => {
          dispatch(setMainPageType(1));
        }}>가나다순</button>
        <button className='btn' onClick={() => {
          dispatch(setMainPageType(2));
        }}>범죄건순</button>
      </div>
      <SortCrimeDataBy type={mainPageType}/>
    </div>
  );
  
}

export default React.memo(MainPage);

