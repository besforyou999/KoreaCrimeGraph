import React from 'react';

function MainPageTitle() {
  return (
    <div className='header'>
      <h3>대한민국 범죄 리스트</h3>
    </div>
  );
}

export default React.memo(MainPageTitle);