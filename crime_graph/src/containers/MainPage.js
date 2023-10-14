import React from 'react';
import SortCrimeDataBy from '../components/SortCrimeDataBy.js';
import MainPageTitle from '../components/MainPageTitle.js';
import Button from '../components/Button.js';
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
      </div>
      <SortCrimeDataBy type={mainPageType}/>
    </div>
  );
  
}

export default React.memo(MainPage);

