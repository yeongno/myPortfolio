import React from "react";
import NameSection from "./introduceSection/NameSection";
import SemiInfoSection from "./introduceSection/SemiInfoSection";
import MarkNav from "./markNav/MarkNav";
import "../../../../styles/pc/mainPage/scrollViewer/ScrollLandingPage.scss";
import SemiInfoSection2 from "./introduceSection/SemiInfoSection2";

function ScrollLandingPage() {
  return (
    <div>
      <div className="ScrollLandingPage_container">
        <div className="leftNav-section">
          <MarkNav />
        </div>
        <div className="rightMain-section">
          <SemiInfoSection />
          <NameSection />
          <SemiInfoSection2 />
        </div>
      </div>
    </div>
  );
}

export default ScrollLandingPage;
