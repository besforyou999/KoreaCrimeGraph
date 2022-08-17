import React from 'react';
import SortByCase from '../containers/SortByCase';
import SortByKor from '../containers/SortByKor';

export default function SortBy(props) {

  const id = props.type;

  if (id === 1) {
    return(<SortByKor/>)
  } else {
    return(<SortByCase/>)
  }
}