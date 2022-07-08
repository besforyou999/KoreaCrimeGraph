import React, {Component} from 'react';
import Crime from './Crime.js';

class CrimeList extends Component {
  constructor(props) {
    super(props);
    let classification_by_vowel = [];

    // sort obj array
    const objects = this.props.obj.data;
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
      let nextCharCode = this.firstVowelCharCode(obj.범죄분류);
      if (nextCharCode === charCode) {
        array.push(obj);
      } else if (nextCharCode !== charCode) {
        classification_by_vowel.push(array);
        charCode = nextCharCode;
        array = [];
      }
    }

    this.state = {
      objs : objects,
      classification : classification_by_vowel
    };
  }

  firstVowelCharCode(crimeClassification) {
    let firstChar = crimeClassification.charCodeAt(0);
    firstChar = parseInt( (firstChar - 44032 ) / 588 );
    return firstChar;
  }
  
  render() {
    let idx = 0;
    return (
      <div>
        <h2>Crimes List</h2>
        {this.state.classification.map(item => (
          <Crime array={item} key={idx++}/>
        ))} 
      </div>
    );
  }
}


export default CrimeList;
