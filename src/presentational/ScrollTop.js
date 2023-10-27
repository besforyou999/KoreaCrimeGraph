import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';


export default function ScrollTop() {

  const blockRef = useRef();

  useEffect(() => {
    gsap.to(blockRef.current, {
      rotation: "+=360"
    });
  })

  const clickHandler = () => { window.scrollTo({top: 0, behavior: "smooth"}) }

  return (
    <div id="scroll-to-top">
      <span className="material-symbols-outlined" id="arrow_upward" ref={blockRef} onClick={clickHandler}>
        arrow_upward
      </span>
    </div>
  )
}