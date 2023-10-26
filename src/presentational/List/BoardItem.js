import React from 'react';

function BoardItem({name, number}) {
  
  return (
    <div className='boardItem'>
      <div>
        {name}
      </div>
      <div>
        {number} 건
      </div>
    </div>
  )

}

export default BoardItem;