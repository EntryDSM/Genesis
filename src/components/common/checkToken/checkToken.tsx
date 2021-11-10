import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { getAccessToken } from "../../../utils/token";

interface Props {
  children: any;
}

const CheckToken: FC<Props> = ({ children }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const token = getAccessToken();

    if (token === null) {
      window.alert("로그인 후에 접근할 수 있습니다.");
      navigate("/login");
    }
  }, []);

  return children;
};

export default CheckToken;
