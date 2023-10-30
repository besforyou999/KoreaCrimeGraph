import React from 'react'
import Email from '../resource/gmail.png'
import Github from '../resource/github.png'
import Tstory from '../resource/tstory.png'


function MadeBy() {

  return (
    <div className='made_by container'>
      <div className='detail container'>

        <h3>besforyou999</h3>
        <div className='link icons'>
          <img className='icons gmailImg' alt='email' src={Email}/>
          <img className='icons githubImg' alt='github' src={Github}/>
          <img className='icons tstoryImg' alt='tstory' src={Tstory}/>
        </div>
      </div>
    </div>
  )
}

export default React.memo(MadeBy);