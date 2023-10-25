import React, { useMemo } from 'react'
import Input from '../presentational/List/Input.js';
import Board from '../presentational/List/Board.js';

import { useSelector} from 'react-redux';

function List() {

  const input = useSelector(state => state.input.input);
  const crime_count = useSelector(state => state.csvData.crime_count);

  const crime_arr = []
  for (const key in crime_count) 
    crime_arr.push([key, crime_count[key]])

  

  return (
    <div>
      <Input/>
      <Board data={crime_arr}/>
    </div>
  )
}

export default List;