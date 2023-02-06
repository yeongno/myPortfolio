import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useLaindgScroll from "../hooks/useLaindgScroll";
import ScrollLandingPage from "./scrollViewer/ScrollLandingPage";

function MainPage() {
  //   const scroll = useLaindgScroll();
  const scroll = useSelector((state) => state?.scroll?.landingScroll);

  return (
    <div>
      <ScrollLandingPage />
    </div>
  );
}

export default MainPage;
