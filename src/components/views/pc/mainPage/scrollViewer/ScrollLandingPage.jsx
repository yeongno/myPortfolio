import React from "react";
import NameSection from "./introduceSection/NameSection";
import SemiInfoSection from "./introduceSection/SemiInfoSection";
import MarkNav from "./markNav/MarkNav";
import "../../../../styles/pc/mainPage/scrollViewer/ScrollLandingPage.scss";

function ScrollLandingPage() {
  //todo
  //1. SemiInfoSection1 백그라운드 어떻게 할지 정하고 세팅하기
  //2. SemiInfoSection2 만들기
  //3. 이력 정보 넣기
  return (
    <div>
      <div className="ScrollLandingPage_container">
        <div className="leftNav-section">
          <MarkNav />
        </div>
        <div className="rightMain-section">
          <SemiInfoSection />
          <NameSection />
        </div>
      </div>
    </div>
  );
}

export default ScrollLandingPage;
