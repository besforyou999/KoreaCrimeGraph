import React from 'react';
import BoardItem from './BoardItem.js';

function Board({data}) {
  
  return (
    <div className='board'>
      {data.map(element => (
        <BoardItem name={element[0]} number={element[1]}/>
      ))}
    </div>
  )
}

export default Board;