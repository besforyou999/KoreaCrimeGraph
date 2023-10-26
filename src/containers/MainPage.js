import React from 'react';
import SortCrimeDataBy from '../presentational/SortCrimeDataBy.js';
import MainPageTitle from '../presentational/MainPageTitle.js';
import Button from '../presentational/Button.js';
import ScrollTop from '../presentational/ScrollTop.js';

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
        <Button text="가나다순" click={() => dispatch(setMainPageType(1))}/>
        <Button text="범죄건순" click={() => dispatch(setMainPageType(2))}/>
        <Button text="검색" click={() => dispatch(setMainPageType(3))}/>
      </div>
      <SortCrimeDataBy type={mainPageType}/>
      <ScrollTop/>
    </div>
  );
  
}

export default React.memo(MainPage);

