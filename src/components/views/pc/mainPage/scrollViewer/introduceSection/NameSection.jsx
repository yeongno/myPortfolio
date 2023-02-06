import React from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";

function NameSection() {
  const testLine_Ref = useRef();
  const scroll = useSelector((state) => state?.scroll?.landingScroll);
  const test1 = () => {
    testLine_Ref.current?.scrollIntoView({ behavior: "smooth" });
    // console.log(testLine_Ref.current?.scrollHeight);
    // console.log(testLine_Ref.current?.getBoundingClientRect().y);
    console.log(testLine_Ref.current?.offsetTop);
    // console.log(testLine_Ref.current?.clientHeight);
  };

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
      <span onClick={test1} ref={testLine_Ref}>
        test 4Line
      </span>
      <br />
    </div>
  );
}

export default NameSection;
