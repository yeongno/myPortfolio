import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import "../../../../../styles/pc/mainPage/scrollViewer/introduceSection/SemiInfoSection.scss";
import ScrollBlind from "./ScrollBlind";

function SemiInfoSection() {
  const Title_Ref = useRef();
  useEffect(() => {
    setTimeout(() => {
      //   Title_Ref.current.style.background =
      //     "linear-gradient(#292931 0%, blue 100%)";
      //   Title_Ref.current.style.backgroundClip = "text";
      //   Title_Ref.current.style.color = "transparent";
      //   Title_Ref.current.style.backgroundClip = "Content-text";
    }, 1000);
    // setTimeout(() => {
    //   //   Title_Ref.current.style.backgroundClip = "text";
    // }, 2000);
  }, []);

  return (
    <div className="semiInfoSection-container">
      <div className="semiInfoSection-wrapper">
        <div className="detail-container">
          <div className="detail-wrapper">
            <div className="title-Section">
              aaa
              <span ref={Title_Ref}>Title</span>
            </div>
            <div className="subTitle-Section">SubTitle</div>
            <div className="detail-Section">Detail</div>
          </div>
          <div className="blind-container">
            <ScrollBlind />
          </div>{" "}
        </div>
      </div>
      <div className="blind-padding" />
    </div>
  );
}

export default SemiInfoSection;
