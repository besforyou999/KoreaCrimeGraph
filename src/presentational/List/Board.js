import React from 'react';
import BoardItem from './BoardItem.js';
import NoResult from './NoResult.js';

function Board({data}) {

  const length = data.length;

  return (

    <div className='board'>
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