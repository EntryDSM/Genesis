import React, { Suspense, useEffect } from "react";
import { useApplicant } from "src/hooks/applicant";
import { useSignIn } from "src/hooks/signin";
import { useAuth } from "src/hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { useStatistics } from "src/hooks/statistics";
import {
  REFRESH_TOKEN,
  REFRESH_TOKEN_SUCCESS,
} from "src/data/modules/redux/action/signin";

const Applicant = React.lazy(() => import("../../components/applicant"));

const ApplicantContainer = () => {
  const navigate = useNavigate();
  const applicantState = useApplicant();
  const statisticsState = useStatistics();
  const authState = useAuth();
  const signinState = useSignIn();

  const refreshToken = () => {
    signinState.setState.refreshToken(statisticsState.setState.getStatistics);
  };

  useEffect(() => {
    applicantState.setState.getApplicantsList(applicantState.state.filters);
  }, []);

  useEffect(() => {
    const errorStatus = applicantState.state.error.status;
    if (errorStatus === 401 || errorStatus === 403) {
      refreshToken();
    }
  }, [applicantState.state.error]);

  useEffect(() => {
    if (
      signinState.state.error.status === 401 &&
      signinState.state.error.type === REFRESH_TOKEN
    ) {
      authState.setState.setAccessToken("");
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    }
  }, [signinState.state.error]);

  useEffect(() => {
    if (!authState.state.isLogin) {
      window.alert("로그인 후에 접근할 수 있습니다.");
      navigate("/login");
    }
  }, [!localStorage.getItem("access_token")]);

  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <Applicant {...applicantState.state} {...applicantState.setState} />;
    </Suspense>
  );
};

export default ApplicantContainer;
