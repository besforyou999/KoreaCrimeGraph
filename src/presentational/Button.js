import React from 'react'

function Button ({text, click}) {
  return (
    <button className='btn' onClick= {click}>
      {text}
    </button>
  )
}

export default Button;