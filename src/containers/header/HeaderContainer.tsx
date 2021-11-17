import React, { FC } from "react";
import { useAuth } from "src/hooks/auth";
import Header from "src/components/header/Header";

const HeaderContainer: FC = () => {
  const authState = useAuth();

  return <Header {...authState.state} {...authState.setState} />;
};

export default HeaderContainer;
