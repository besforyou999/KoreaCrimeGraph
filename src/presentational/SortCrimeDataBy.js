import React from 'react';
import SortByCase from '../containers/SortByCase';
import SortByKor from '../containers/SortByKor';

export default function SortBy(props) {
  return props.type === 1 ? <SortByKor/> : <SortByCase/>;
}