import React from "react";
import { Outlet } from "react-router-dom";
import "../../styles/pc/PC_LandingPage.scss";
import useLaindgScroll from "./hooks/useLaindgScroll";
import MainPage from "./mainPage/MainPage";

function PC_LandingPage() {
  useLaindgScroll();
  return (
    <div className="pc_landingPage-container">
      <MainPage />
    </div>
  );
}

export default PC_LandingPage;
