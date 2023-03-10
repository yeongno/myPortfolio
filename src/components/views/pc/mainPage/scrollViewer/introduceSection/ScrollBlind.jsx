import React, { useEffect, useRef } from "react";
import { render } from "react-dom";
import { useSelector } from "react-redux";
import "../../../../../styles/pc/mainPage/scrollViewer/introduceSection/ScrollBlind.scss";

function ScrollBlind() {
  const BlindBlock_Ref = useRef([]);
  //   const Bottom_Ref = useRef();
  const block = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const scroll = useSelector((state) => state?.scroll?.landingScroll);
  useEffect(() => {
    console.log(scroll, "scroll");
    if (scroll < 50) {
      for (let index = 0; index < 10; index++) {
        BlindBlock_Ref.current[index].style.transform = "rotateX(0deg)";
      }
    }
    if (scroll > 50) {
      for (let index = 0; index < 10; index++) {
        BlindBlock_Ref.current[index].style.transform = "rotateX(10deg)";
      }
    }
    if (scroll > 300) {
      for (let index = 0; index < 10; index++) {
        BlindBlock_Ref.current[index].style.transform = "rotateX(30deg)";
      }
    }
    if (scroll > 600) {
      for (let index = 0; index < 10; index++) {
        BlindBlock_Ref.current[index].style.transform = "rotateX(50deg)";
      }
    }
    if (scroll > 900) {
      for (let index = 0; index < 10; index++) {
        BlindBlock_Ref.current[index].style.transform = "rotateX(80deg)";
      }
    }
    if (scroll > 1200) {
      for (let index = 0; index < 10; index++) {
        BlindBlock_Ref.current[index].style.transform = "rotateX(90deg)";
      }
    }
  }, [scroll]);
  const renderCards = block.map((block, index) => {
    return (
      <div
        className="blind-block"
        ref={(el) => (BlindBlock_Ref.current[index] = el)}
      />
    );
  });

  return (
    <div className="blind-section">
      {renderCards}
      {/* <div className="bottom-section" ref={Bottom_Ref}>
        <div className="bottom-block" />
        <div className="bottom-block" />
        <div className="bottom-block" />
        <div className="bottom-block" />
      </div> */}
    </div>
  );
}

export default ScrollBlind;
