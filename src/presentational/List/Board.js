import React from 'react';
import BoardItem from './BoardItem.js';

function Board({data}) {

  return (
    <div className='board'>
      {data.map(element => (
        <BoardItem name={element[0]} number={element[1]} key={element[0]}/>
      ))}
    </div>
  )
}

export default Board;