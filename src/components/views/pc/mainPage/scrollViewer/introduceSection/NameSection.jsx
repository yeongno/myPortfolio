import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import "../../../../../styles/pc/mainPage/scrollViewer/introduceSection/NameSection.scss";

function NameSection() {
  const [OnFlip, setOnFlip] = useState(false);

  //nameLabel ref
  const Front_Ref = useRef();
  const Back_Ref = useRef();
  const NameLabel_Ref = useRef();

  const scroll = useSelector((state) => state?.scroll?.landingScroll);

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
      <div className="nameSection-container" ref={NameLabel_Ref}>
        <div className="nameSection-wrapper--back">
          <div className="nameLabel-name" ref={Back_Ref}>
            <div className="logo-section">
              <img src="/assets/nameSection/pngegg.png" />
            </div>
            <div className="myImage"></div>
            <div className="span-section1">
              <span>이영노/면접자</span>
              <br />
              <span>서울특별시 관악구 신림동 거주</span>
            </div>
            <div className="span-section2">
              <span>Tel : 010-5149-**** / Email : dldudsh83@gmail.com </span>{" "}
              <br />
              <span
                onClick={() =>
                  window.open("https://github.com/yeongno/", "_blank")
                }
              >
                GitHub : yeongno
              </span>
            </div>
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
