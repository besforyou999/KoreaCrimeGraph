import React, {Component} from "react";
import CrimeButton from "./CrimeButton.js";
import '../css/styles.css';
import Accordion from '@mui/material/Accordion';
import { AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
      <div className="vowelContainer">
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <div>
              <h2>{this.state.constantVowel}</h2>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="vowelDiv">
              {this.state.crime_array.map(crime=> (
                <CrimeButton obj={crime} key={idx++} />
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    )
  }
}

export default Crime;
