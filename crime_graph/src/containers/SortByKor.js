import React from 'react';
import { useSelector } from 'react-redux';
import CrimeListGroupedByVowel from '../components/CrimeListGroupedByVowel';

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
  
  const data2 = useSelector(state => state.csvData.csvData).data;
  const data = [...data2];
  const crimeCaseKey = '범죄분류';
  data.sort(function(a,b) {
    return a[crimeCaseKey].charCodeAt(0) - b[crimeCaseKey].charCodeAt(0);
  });

  let classification = classifyByVowel(data);
  let idx = 0;

  return (
    <div>
      {classification.map(item => (
        <CrimeListGroupedByVowel array={item} key={idx++}/>
      ))}
    </div>
  );
}

export default React.memo(SortByKor);