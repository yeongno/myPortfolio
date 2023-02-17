/**
 *0.1초마다 글자 자동 타이핑 하는 컴포넌트
 *text = 표시 문자열
 *rectY = 지정 위치
 *time = 글자 표시 간격
 */
import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";

const TypingText = ({ text, rectY, time }) => {
  const nowY_Ref = useRef();

  //현 요소의 상대값
  const nowY = nowY_Ref.current?.getBoundingClientRect().y;

  //타이핑 시작하기 위한 플래그
  const [scrollOn, setScrollOn] = useState(false);

  useEffect(() => {
    console.log("nowY", nowY);
    if (nowY < rectY) {
      setScrollOn(true);
    }

    //어느 정도 해당 컴포넌트가 멀어졌을 때 리셋 하여 다시 작동하게 세팅
    if (
      (nowY > 1000 && scrollOn == true) ||
      (nowY < -1000 && scrollOn == true)
    ) {
      setScrollOn(false);
      setDisplay("");
      setCount(0);
    }
  }, [nowY, scrollOn]);

  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState("");
  useEffect(() => {
    if (count === text.length) {
      return;
    } else if (scrollOn) {
      const interval = setInterval(() => {
        setDisplay((display) => display + text[count]);
        setCount(count + 1);
        if (count == text.length) {
          clearInterval(interval);
        }
      }, time);

      return () => {
        clearInterval(interval);
      };
    }
  }, [text, count, display, scrollOn]);

  return <span ref={nowY_Ref}>{display}</span>;
};

export default TypingText;
