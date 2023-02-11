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
            <div className="border-container">
              <div className="title-Section">
                <span ref={Title_Ref}>
                  Hello and welcome to my front-end portfolio!!
                </span>
              </div>
              <div className="detail-Section">
                I am a driven and passionate front-end developer, constantly
                seeking to expand my skills and knowledge in the field.
                Throughout this portfolio, you will find a showcase of my
                projects and experience, highlighting my expertise in creating
                visually appealing and user-friendly websites and applications.
                Thank you for taking the time to view my work, and I hope to
                have the opportunity to collaborate on future projects.
              </div>
            </div>
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
