import React from 'react';
import SortByCase from '../containers/SortByCase';
import SortByKor from '../containers/SortByKor';
import List from '../containers/List';

export default function SortBy(props) {
  if (props.type === 1) { // 한글 정렬
    return <SortByKor/>
  } else if (props.type === 2) { // 건수로 정렬
    return <SortByCase/>
  } else if (props.type === 3) { // 검색 창
    return <List/>
  }
}