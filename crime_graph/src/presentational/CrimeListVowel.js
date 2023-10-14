import React from "react";
import CrimeButton from "../containers/CrimeButton.js";
import '../css/styles.css';
import Accordion from '@mui/material/Accordion';
import { AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function CrimeListVowel(props) {
  const array = [...props.array];
  const firstVowelCode = array[0].범죄분류.charCodeAt(0);
  const firstLetter = String.fromCharCode(firstVowelCode);
  const constantVowel = getConstantVowel(firstLetter);

  function getConstantVowel(kor) {
    const f = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ',
               'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ',
               'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
    const uni = kor.charCodeAt(0) - 44032;
    const fn = parseInt(uni / 588);
    return f[fn];
  }

  let idx = 0;
  return(
    <div className="vowelContainer">
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <div>
            <h2>{constantVowel}</h2>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="vowelDiv">
            {array.map(crime => (
              <CrimeButton obj={crime} key={idx++} />
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default React.memo(CrimeListVowel);
