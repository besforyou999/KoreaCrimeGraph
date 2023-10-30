import React from 'react';
import { useHistory } from 'react-router-dom';
import BoardItem from './BoardItem.js';
import NoResult from './NoResult.js';

function Board({data}) {

  const history = useHistory();
  const length = data.length;

  const clickHandler = (e) => {
    if (e.target.className === 'boardItem') {
      const crime_type = e.target.firstChild.textContent.trim();
      history.push({
        pathname: '/CrimeSpec',
        '범죄분류': crime_type
      })
    }
  }

  return (

    <div className='board' onClick={clickHandler}>
      { length > 0 ?
        data.map(element => (
          <BoardItem name={element[0]} number={element[1]} key={element[0]}/>
        )) :
        (
          <NoResult />
        )
      }
    </div>
  )
}

export default Board;