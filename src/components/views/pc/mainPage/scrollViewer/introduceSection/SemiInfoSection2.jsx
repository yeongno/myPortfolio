import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import "../../../../../styles/pc/mainPage/scrollViewer/introduceSection/SemiInfoSection2.scss";
import "../../../../../styles/pc/mainPage/scrollViewer/introduceSection/SemiInfoSection.scss";

function SemiInfoSection2() {
  return (
    <div className="semiInfoSection2-container">
      <div className="semiInfoSection2-wrapper">
        <div className="title-section">
          <span>저를 소개하겠습니다.</span>
          <br />
        </div>
        <div className="firstInfo-section">
          <div className="subTitle1-section">
            <span>1. 진로를 해당 분야로 정한 이유</span>
          </div>
          <div className="detail1-section">
            <span>
              사용자와의 상호작용이 많은 웹이나 모바일 애플리케이션을 개발하면서
              사용자에게 최고의 경험을 제공하는 것이 나의 꿈이었기 때문입니다.
              사용자의 니즈와 요구 사항을 반영하여 디자인과 기능을 구현하며,
              최적의 사용성을 갖춘 애플리케이션을 만들고자 프론트앤드 개발에
              빠져들었습니다.
            </span>
          </div>
        </div>
        <div className="secondInfo-section">
          <div className="subTitle2-section">
            <span>2. 교육 정보</span>
          </div>
          <div className="detail2-section">
            <span>
              한국IT직업전문학교에서 학사-정보보호학을 전공 하였으며 2020년도에
              시작하여 총 3년제 과정을 밟았습니다.
            </span>
          </div>
        </div>
        <div className="thirdInfo-section">
          <div className="subTitle3-section">
            <span>3-1 메인 기술 스택</span>
          </div>
          <div className="detail3-section">
            <span>react, scss, css</span>
          </div>
          <div className="subTitle3_2-section">
            <span>3-2 서브 기술 스택</span>
          </div>
          <div className="detail3_2-section">
            <span>vue, node.js, kotlin</span>
          </div>
        </div>
        <span></span>
      </div>
    </div>
  );
}

export default SemiInfoSection2;
