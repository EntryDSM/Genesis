import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  LoginContainer,
  MainContainer,
  ScheduleContainer,
  StatisticsContainer,
  ApplicantContainer,
} from "../containers";
import CheckToken from "../components/common/checkToken/checkToken";
import HeaderContainer from "../containers/header";

const MainRouter = () => {
  return (
    <>
      <HeaderContainer />
      <Routes>
        <CheckToken>
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/" element={<MainContainer />} />
          <Route path="/total" element={<StatisticsContainer />} />
          <Route path="/schedule" element={<ScheduleContainer />} />
          <Route path="/applicant" element={<ApplicantContainer />} />
        </CheckToken>
      </Routes>
    </>
  );
};

export default MainRouter;
