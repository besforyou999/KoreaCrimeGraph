import React, {Component} from "react";
import CrimeButton from "./CrimeButton.js";
import '../css/vowelDiv.css';

class Crime extends Component {
  constructor(props) {
    super(props);
    
    const array = this.props.array;
    const firstVowelCode = array[0].범죄분류.charCodeAt(0);
    const firstLetter = String.fromCharCode(firstVowelCode);
    const constantVowel = this.getConstantVowel(firstLetter);

    this.state = {
      crime_array : array,
      constantVowel: constantVowel
    }
  }

  getConstantVowel(kor) {
    const f = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ',
               'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ',
               'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
    const ga = 44032;
    let uni = kor.charCodeAt(0);
    uni = uni - ga;
    let fn = parseInt(uni / 588);
    return f[fn];
  }

  render() {
    let idx = 0;
    return(
      <div className="vowelDiv">
        <h2>{this.state.constantVowel}</h2>
        {this.state.crime_array.map(crime=> (
          <CrimeButton 
            obj={crime}
            key={idx++} >
          </CrimeButton>
        ))}
      </div>
    )
  }
}

export default Crime;
