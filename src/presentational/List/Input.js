import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setInput } from '../../features/input/inputSlice.js';

function Input() {

  const input = useSelector(state => state.input.input);
  const dispatch = useDispatch();

  const changeHandler = e => {
    dispatch(setInput(e.target.value))
  }

  return (
    <div className="input-container">
      <input
        type="text"
        className="input"
        placeholder='검색'
        value={input}
        onChange={changeHandler}
        ></input>
    </div>
  )
}

export default Input;