import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

function LandingPage() {
  const isAuth = useSelector((state) => state.user.isAuth);
  console.log(isAuth);
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default LandingPage;
