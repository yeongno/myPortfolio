import React, { useEffect, useRef } from "react";
import { render } from "react-dom";
import { useSelector } from "react-redux";
import "../../../../../styles/pc/mainPage/scrollViewer/introduceSection/ScrollBlind.scss";

function ScrollBlind() {
  const BlindBlock_Ref = useRef([]);
  const Bottom_Ref = useRef();
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
      BlindBlock_Ref.current[9].style.margin = "50rem";
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

  //todo
  //1. blind-block이 최대값에 도달 하였을 때
  // bottom-section이 올라가며 blin-block의 마지막 블록을 하나씩 없앤다.
  //2. bottom-section이 전부다 먹었을 때는 뒤에 semiInfo의 position값 또한 sticky로 하여
  //화면에 보여줄 수 있게 한다.
  //3. semiInfo의 내용을 추가하고 스타일 지정까지 한다.
  //3-1 된다면 스크롤시 gradient효과가 바뀔 수 있게 설정.
  //4. 최종적으로 블라인드 ui를 최대한 자연스럽게 손대준다.
  return (
    <div className="blind-section">
      {renderCards}
      <div className="bottom-section" ref={Bottom_Ref}>
        <div className="bottom-block" />
        <div className="bottom-block" />
        <div className="bottom-block" />
        <div className="bottom-block" />
      </div>
    </div>
  );
}

export default ScrollBlind;
