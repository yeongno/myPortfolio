import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import "../../../../../styles/pc/mainPage/scrollViewer/markNav/MarkNav.scss";

function MarkNav() {
  const markScroll = useSelector((state) => state.scroll.markScroll);
  //   useEffect(() => {
  //     console.log("markScroll", markScroll);
  //   }, [markScroll]);

  return (
    <div className="markNav-container">
      <div className="markNav-wrapper">
        {(markScroll == "Semi" && (
          <div className="semiInfoSection-section__active" />
        )) || <div className="semiInfoSection-section" />}
        {(markScroll == "Name" && (
          <div className="nameSection-section__active" />
        )) || <div className="nameSection-section" />}
        {(markScroll == "Semi2" && (
          <div className="semiInfoSection2-section__active" />
        )) || <div className="semiInfoSection2-section" />}
      </div>
    </div>
  );
}

export default MarkNav;
