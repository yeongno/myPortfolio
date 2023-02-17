import React, { useState } from "react";
import NameSection from "./introduceSection/NameSection";
import SemiInfoSection from "./introduceSection/SemiInfoSection";
import MarkNav from "./markNav/MarkNav";
import "../../../../styles/pc/mainPage/scrollViewer/ScrollLandingPage.scss";
import SemiInfoSection2 from "./introduceSection/SemiInfoSection2";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { markScroll } from "../../../../../redux/_actions/scroll_action";

function ScrollLandingPage() {
  const dispatch = useDispatch();
  const Semi_Ref = useRef();
  const Name_Ref = useRef();
  const Semi2_Ref = useRef();
  const [active, setActive] = useState("");

  const SemiY = Semi_Ref.current?.getBoundingClientRect().y;
  const NameY = Name_Ref.current?.getBoundingClientRect().y;
  const Semi2Y = Semi2_Ref.current?.getBoundingClientRect().y;
  useEffect(() => {
    console.log("semiY", SemiY);
    if (SemiY < 300) {
      setActive("Semi");
      dispatch(markScroll("Semi"));
    }
    if (NameY < 300) {
      setActive("Name");
      dispatch(markScroll("Name"));
    }
    if (Semi2Y < 300) {
      setActive("Semi2");
      dispatch(markScroll("Semi2"));
    }
  }, [SemiY]);

  return (
    <div>
      <div className="ScrollLandingPage_container">
        <div className="leftNav-section">
          <MarkNav />
        </div>
        <div className="rightMain-section">
          <div className="first-section" ref={Semi_Ref}>
            {(active == "Semi" && (
              <div style={{ border: "solid rgba(45, 238, 238, 0.725) 5px" }}>
                <SemiInfoSection />
              </div>
            )) || (
              <div style={{ border: "solid rgba(237, 240, 237, 0.441) 5px" }}>
                <SemiInfoSection />
              </div>
            )}
          </div>
          <div className="second-section" ref={Name_Ref}>
            {(active == "Name" && (
              <div style={{ border: "solid rgba(45, 238, 238, 0.725) 5px" }}>
                <NameSection />
              </div>
            )) || (
              <div style={{ border: "solid rgba(237, 240, 237, 0.441) 5px" }}>
                <NameSection />
              </div>
            )}
          </div>

          <div className="third-section" ref={Semi2_Ref}>
            {(active == "Semi2" && (
              <div style={{ border: "solid rgba(45, 238, 238, 0.725) 5px" }}>
                <SemiInfoSection2 />
              </div>
            )) || (
              <div style={{ border: "solid rgba(237, 240, 237, 0.441) 5px" }}>
                <SemiInfoSection2 />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScrollLandingPage;
