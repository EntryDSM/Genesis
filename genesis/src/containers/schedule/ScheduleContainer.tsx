import React, { Suspense, useEffect } from "react";
import { useAuth } from "src/hooks/auth";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "src/hooks/signin";
import { useSchedule } from "src/hooks/schedule";
import { REFRESH_TOKEN } from "src/data/modules/redux/action/signin";

const Schedule = React.lazy(() => import("../../components/schedule"));

const ScheduleContainer = () => {
  const navigate = useNavigate();
  const scheduleState = useSchedule();
  const authState = useAuth();
  const signinState = useSignIn();

  const refreshToken = () => {
    signinState.setState.refreshToken(scheduleState.setState.getStatus);
  };

  useEffect(() => {
    scheduleState.setState.getStatus();
  }, []);

  useEffect(() => {
    const errorStatus = scheduleState.state.error.status;
    if (errorStatus === 401 || errorStatus === 403) {
      refreshToken();
    }
  }, [scheduleState.state.error]);

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
      <Schedule date={scheduleState.state.date} />
    </Suspense>
  );
};

export default ScheduleContainer;
