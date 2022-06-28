import React, { FC, Suspense } from "react";
import { useApplicant } from "src/hooks/applicant";
import { useSignIn } from "src/hooks/signin";
import { useAuth } from "src/hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { useStatistics } from "src/hooks/statistics";
import { REFRESH_TOKEN } from "src/data/modules/redux/action/signin";

const Applicant = React.lazy(() => import("../../components/applicant"));

const ApplicantContainer: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const applicantState = useApplicant();
  const statisticsState = useStatistics();
  const authState = useAuth();
  const signinState = useSignIn();

  React.useEffect(() => {
    applicantState.setState.getApplicantsList(applicantState.state.filters);
  }, []);

  const refreshToken = () => {
    signinState.setState.refreshToken(statisticsState.setState.getStatistics);
  };

  React.useEffect(() => {
    if (
      signinState.state.error.status === 401 &&
      signinState.state.error.type === REFRESH_TOKEN
    ) {
      authState.setState.setAccessToken("");
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    }
  }, [signinState.state.error]);

  React.useEffect(() => {
    if (!authState.state.isLogin) {
      window.alert("로그인 후에 접근할 수 있습니다.");
      navigate("/login");
    }
  }, [!localStorage.getItem("access_token")]);

  React.useEffect(() => {
    const errorStatus = statisticsState.state.error.status;
    if (errorStatus === 401 || errorStatus === 403) {
      refreshToken();
    }
  }, [statisticsState.state.error]);

  React.useEffect(() => {
    if (authState.state.isLogin) statisticsState.setState.getStatistics();
  }, [authState.state.isLogin, location.pathname]);

  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <Applicant {...applicantState.state} {...applicantState.setState} />;
    </Suspense>
  );
};

export default ApplicantContainer;
