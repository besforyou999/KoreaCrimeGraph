import React from 'react';

function NoResult() {
  return (
    <div className='noResult'>
      <div className='inner-container'>
        <div className="material-symbols-outlined">
          question_mark
        </div>
        <div className='text-container'>
          <p>검색 결과 없음</p>
          <p>다시 검색해주세요</p>
        </div>
      </div>
    </div>
  )
}

export default React.memo(NoResult);