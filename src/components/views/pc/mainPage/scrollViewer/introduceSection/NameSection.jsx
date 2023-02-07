import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import "../../../../../styles/pc/mainPage/scrollViewer/introduceSection/NameSection.scss";

function NameSection() {
  const [OnFlip, setOnFlip] = useState(false);

  const TestLine_Ref = useRef();

  //nameLabel ref
  const Front_Ref = useRef();
  const Back_Ref = useRef();
  const NameLabel_Ref = useRef();

  const scroll = useSelector((state) => state?.scroll?.landingScroll);
  const test1 = () => {
    // TestLine_Ref.current?.scrollIntoView({ behavior: "smooth" });
    console.log(NameLabel_Ref.current?.getBoundingClientRect().y);
    // console.log(TestLine_Ref.current?.offsetTop);
  };

  //네임라벨 상대 위치 값
  const nameLabel = NameLabel_Ref.current?.getBoundingClientRect().y;

  //특정 위치의 스크롤 시 네임라벨 활성화
  useEffect(() => {
    if (
      nameLabel < 200 &&
      OnFlip === false &&
      nameLabel > 0 &&
      OnFlip === false
    ) {
      console.log(nameLabel, "back");
      NameLabel_Ref.current.style.transform = "rotateX(180deg)";
      setOnFlip(true);
    } else if (
      (OnFlip === true && nameLabel < -300) ||
      (nameLabel > 400 && OnFlip === true)
    ) {
      console.log(nameLabel, "nopw");
      setOnFlip(false);
      NameLabel_Ref.current.style.transform = "rotateX(0)";
    }
  }, [nameLabel]);

  //todo
  //1. 네임라벨 정보 기입 & UI(아이콘 및 폰트 디자인)

  return (
    <div>
      <span>test 1Line</span>
      <br />
      <span>test 2Line</span>
      <br />
      <span>test 3Line</span>
      <br />
      <span>test 3Line</span>
      <br />
      <span>test 3Line</span>
      <br />
      <span>test 3Line</span>
      <br />
      <span>test 3Line</span>
      <br />
      <span>test 3Line</span>
      <br />
      <span>test 3Line</span>
      <br />
      <span>test 3Line</span>
      <br /> <span>test 3Line</span>
      <br />
      <span>test 3Line</span>
      <br />
      <span>test 3Line</span>
      <br />
      <span>test 3Line</span>
      <br />
      <span>test 3Line</span>
      <br />
      <span>test 3Line</span>
      <br />
      <span>test 3Line</span>
      <br />
      <span>test 3Line</span>
      <br />
      <span>test 3Line</span>
      <br />
      <span>test 3Line</span>
      <br />
      <span>test 3Line</span>
      <br />
      <span onClick={test1} ref={TestLine_Ref}>
        test 4Line
      </span>
      <br />{" "}
      <div className="nameSection-container" ref={NameLabel_Ref}>
        <div className="nameSection-wrapper--back">
          <div className="nameLabel-name" ref={Back_Ref}>
            <span>이영노</span>
          </div>
        </div>
        <div className="nameSection-wrapper--front">
          <div className="nameLabel-name" ref={Front_Ref}>
            <span>Dreaming</span>
            <br />
            <span>Developer</span>
            <img src="/assets/nameSection/pngegg.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NameSection;
