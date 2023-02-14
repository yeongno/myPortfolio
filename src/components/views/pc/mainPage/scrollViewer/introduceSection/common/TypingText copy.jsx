import React, { useState, useEffect } from "react";

const TypingText = ({ text }) => {
  // const [count, setCount] = useState(0);
  const [display, setDisplay] = useState("");
  //todo
  //초마다 생성되는 글자가 틀린 오류 수정
  useEffect(() => {
    var count = 0;
    const interval = setInterval(() => {
      if (count === 0) {
        setDisplay((display) => display + text[0]);
        console.log(" display + text[0]", display + text[0]);
        setDisplay((display) => display + text[1]);
        console.log(" display + text[1]", display + text[1]);
        count++;
      } else if (count > 0) {
        setDisplay((display) => display + text[count]);
        console.log(" display + text[count]", display + text[count]);
        count++;
      }
      if (count == text.length - 1) {
        clearInterval(interval);
        console.log("count", count);
      }
    }, 100);
    return () => {
      clearInterval(interval);
      count = 0;
    };
  }, []);
  const countFunc = () => {};

  return (
    <span
      onClick={() => {
        countFunc();
      }}
    >
      a{display}
    </span>
  );
};

export default TypingText;
