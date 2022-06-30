import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "src/hooks/auth";

interface Props {
  children: any;
}

const CheckToken: FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const authState = useAuth();

  React.useEffect(() => {
    if (!authState.state.isLogin) {
      window.alert("로그인 후에 접근할 수 있습니다.");
      navigate("/login");
    }
  }, [!localStorage.getItem("access_token")]);

  return children;
};

export default CheckToken;
