import React from 'react';
import { useSelector } from 'react-redux';
import CrimeListVowel from './CrimeListVowel';

function classifyByVowel(data) {
  const crimeCaseKey = '범죄분류';
  let classification = [];
  let vowel_class = [];
  let prevChar = getConstantVowel(data[0][crimeCaseKey]);
  vowel_class.push(data[0]);
  
  for (let i = 1 ; i < data.length ; i++) {
    let curChar = getConstantVowel(data[i][crimeCaseKey]);

    if (prevChar !== curChar) {
      classification.push(vowel_class);
      vowel_class = [];
    }

    vowel_class.push(data[i]);
    prevChar = curChar;
  }
  
  classification.push(vowel_class);
  return classification;
}

function getConstantVowel(kor) {
  const f = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ',
             'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ',
             'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
  const ga = 44032;
  let uni = kor.charCodeAt(0);
  uni = uni - ga;
  let fn = parseInt(uni / 588);
  return f[fn];
}

function SortByKor() {
  
  const data = [...useSelector(state => state.csvData.csvData).data];
  const key = '범죄분류';
  data.sort((a, b) => {
    return a[key].charCodeAt(0) - b[key].charCodeAt(0);
  });

  let classification = classifyByVowel(data);
  let idx = 0;

  return (
    <div>
      {classification.map(item => (
        <CrimeListVowel array={item} key={idx++}/>
      ))}
    </div>
  );
}

export default React.memo(SortByKor);