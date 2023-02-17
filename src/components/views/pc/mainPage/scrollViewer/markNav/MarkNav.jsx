import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import "../../../../../styles/pc/mainPage/scrollViewer/markNav/MarkNav.scss";
import BarBlack from "../common/button/BarBlack";

function MarkNav() {
  const markScroll = useSelector((state) => state.scroll.markScroll);
  const nowScroll = useSelector((state) => state.scroll.nowScroll);

  return (
    <div className="markNav-container">
      <div className="markNav-wrapper">
        {(markScroll == "Semi" && (
          <div className="semiInfoSection-section__active">
            <div className="text-section">
              <BarBlack value="인사말"></BarBlack>
            </div>
          </div>
        )) || (
          <div className="semiInfoSection-section">
            <div
              className="text-section"
              onClick={() => {
                window.scrollTo({
                  top: nowScroll.Semi[0],
                  behavior: "smooth",
                });
              }}
            >
              <BarBlack value="인사말"></BarBlack>
            </div>
          </div>
        )}
        {(markScroll == "Name" && (
          <div className="nameSection-section__active">
            <div className="text-section">
              <BarBlack value="명함"></BarBlack>
            </div>
          </div>
        )) || (
          <div className="nameSection-section">
            {" "}
            <div
              className="text-section"
              onClick={() => {
                window.scrollTo({
                  top: nowScroll.Name[0],
                  behavior: "smooth",
                });
              }}
            >
              <BarBlack value="명함"></BarBlack>
            </div>
          </div>
        )}
        {(markScroll == "Semi2" && (
          <div className="semiInfoSection2-section__active">
            <div className="text-section">
              <BarBlack value="소개"></BarBlack>
            </div>
          </div>
        )) || (
          <div className="semiInfoSection2-section">
            <div
              className="text-section"
              onClick={() => {
                window.scrollTo({
                  top: nowScroll.Semi2[0],
                  behavior: "smooth",
                });
              }}
            >
              <BarBlack value="소개"></BarBlack>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MarkNav;
