import React from 'react';

function BoardItem({name, number}) {
  
  return (
    <div className='boardItem'>
      <div>
        {name}
      </div>
      <div>
        {number}
      </div>
    </div>
  )

}

export default BoardItem;