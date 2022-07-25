import React, { Suspense, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { REFRESH_TOKEN } from "src/data/modules/redux/action/signin";
import { useAuth } from "src/hooks/auth";
import { useSignIn } from "src/hooks/signin";
import { useStatistics } from "src/hooks/statistics";

const Statistics = React.lazy(() => import("../../components/statistics"));

const StatisticsContainer = () => {
  const navigate = useNavigate();
  const statisticsState = useStatistics();
  const authState = useAuth();
  const signinState = useSignIn();

  const refreshToken = () => {
    signinState.setState.refreshToken(statisticsState.setState.getStatistics);
  };

  useEffect(() => {
    statisticsState.setState.getStatistics();
  }, []);

  useEffect(() => {
    const errorStatus = statisticsState.state.error.status;
    if (errorStatus === 401 || errorStatus === 403) {
      refreshToken();
    }
  }, [statisticsState.state.error]);

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
      <Statistics
        score={statisticsState.state.statistics.score}
        count={statisticsState.state.statistics.count}
      />
    </Suspense>
  );
};

export default StatisticsContainer;
