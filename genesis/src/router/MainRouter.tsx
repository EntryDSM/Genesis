import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  LoginContainer,
  MainContainer,
  ScheduleContainer,
  StatisticsContainer,
  ApplicantContainer,
} from "../containers";
import HeaderContainer from "../containers/header";

const MainRouter = () => {
  return (
    <>
      <HeaderContainer />
      <Routes>
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/" element={<MainContainer />} />
        <Route path="/total" element={<StatisticsContainer />} />
        <Route path="/schedule" element={<ScheduleContainer />} />
        <Route path="/applicant" element={<ApplicantContainer />} />
      </Routes>
    </>
  );
};

export default MainRouter;
