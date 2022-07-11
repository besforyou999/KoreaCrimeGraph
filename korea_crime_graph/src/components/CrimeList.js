import React, {useState} from 'react';
import Crime from './Crime.js';
import '../css/styles.css';
import { useSelector, useDispatch } from 'react-redux'


function CrimeList(props) {

  const [sortType , setSortType] = useState(2); // 1 -> kor, 2 -> crime sum

  const count = useSelector(state => state.csvData.value);
  let classification_by_vowel = [];
  const objects1 = count.data;
  const objects = [...objects1];
  objects.sort(function(a,b) {
    if (a.범죄분류 > b.범죄분류) {
      return 1;
    } else if (a.범죄분류 < b.범죄분류) {
      return -1;
    } else {
      return 0;
    }
  });

   // group crimes with same vowels
  let array = [];
  let first_obj = objects[0];
  let charCode = 0;
  array.push(first_obj);

  for (let i = 1 ; i < objects.length ; i++) {
    let obj = objects[i];
    let nextCharCode = firstVowelCharCode(obj.범죄분류);
    if (nextCharCode === charCode) {
      array.push(obj);
    } else if (nextCharCode !== charCode) {
      classification_by_vowel.push(array);
      charCode = nextCharCode;
      array = [];
    }
  }

  function firstVowelCharCode(crimeClassification) {
    let firstChar = crimeClassification.charCodeAt(0);
    firstChar = parseInt( (firstChar - 44032 ) / 588 );
    return firstChar;
  }

  let idx = 0;
  if (sortType === 1) {
    return (<div>Sort test</div>);
  } else {
    return (
      <div>
        <h2>대한민국 범죄 리스트</h2>
        <div>
        {classification_by_vowel.map(item => (
          <Crime array={item} key={idx++}/>
        ))}
        </div>
      </div>
    );
  }
}


export default CrimeList;
