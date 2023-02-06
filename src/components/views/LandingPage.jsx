import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import MainPage from "./pc/mainPage/MainPage";
import M_MainPage from "./mobile/mainPage/M_MainPage";
import { BrowserView, MobileView } from "react-device-detect";
import PC_LandingPage from "./pc/PC_LandingPage";

function LandingPage() {
  return (
    <div>
      <BrowserView>
        <PC_LandingPage />
      </BrowserView>

      <MobileView>
        <M_MainPage />
      </MobileView>
    </div>
  );
}

export default LandingPage;
