import React, { FC, Suspense } from "react";
import { useLocation } from "react-router";
import { REFRESH_TOKEN } from "src/data/modules/redux/action/signin";
import { useAuth } from "src/hooks/auth";
import { useSignIn } from "src/hooks/signin";
import { useStatistics } from "src/hooks/statistics";

const Statistics = React.lazy(() => import("../../components/statistics"));

const StatisticsContainer: FC = () => {
  const location = useLocation();
  const statisticsState = useStatistics();
  const authState = useAuth();
  const signinState = useSignIn();
  const {
    score,
    count
  } = statisticsState.state.statistics;

  React.useEffect(() => {
    statisticsState.setState.getStatistics();
  }, []);

  const refreshToken = () => {
    signinState.setState.refreshToken(statisticsState.setState.getStatistics);
  };

  React.useEffect(() => {
    if (
      statisticsState.state.error.status === 401 &&
      signinState.state.error.type === REFRESH_TOKEN
    ) {
      authState.setState.setAccessToken("");
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    }
  }, [signinState.state.error]);

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
      <Statistics
        score={score}
        count={count}
      />
    </Suspense>
  );
};

export default StatisticsContainer;
