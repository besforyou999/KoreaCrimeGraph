import React, {useState} from 'react';
import SortCrimeDataBy from './SortCrimeDataBy.js';
import PageTitle from './PageTitle';
import '../css/styles.css';

function MainPage() {

  const [sortType , setSortType] = useState(1); // 1 -> kor, 2 -> crime sum

  return ( 
    <div>
      <PageTitle/>
      <div>
        <button className='crimeBtn' onClick={() => {
          setSortType(1);
        }}>가나다순</button>
        <button className='crimeBtn' onClick={() => {
          setSortType(2);
        }}>범죄건순</button>
      </div>
        <SortCrimeDataBy type={sortType}/>
    </div>
  );
  
}

export default React.memo(MainPage);
