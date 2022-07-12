import React from 'react';
import ListSortByCase from '../containers/ListSortByCase';
import ListSortByKor from '../containers/ListSortByKor';

export default function SortBy(props) {

  const id = props.type;

  if (id === 1) {
    return(<ListSortByKor/>)
  } else {
    return(<ListSortByCase/>)
  }
}