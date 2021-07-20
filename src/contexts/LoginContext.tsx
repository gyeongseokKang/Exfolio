import React from "react";
import { useState } from "react";
import { createContext } from "react";

export interface UserInfoState {
  email: string;
  familyName: string;
  givenName: string;
  googleId: string;
  imageUrl: string;
}

export const LoginContext = createContext<{
  userInfo: UserInfoState | undefined;
  login: (userinfo: UserInfoState) => void;
  logout: () => void;
}>({
  userInfo: undefined,
  login() {},
  logout() {},
});

export const LoginProvider: React.FC = ({ children }) => {
  const [userInfo, setUserInfo] = useState<UserInfoState | undefined>(undefined);

  const loginGoogle = (userinfo: UserInfoState) => {
    setUserInfo(userinfo);
  };

  const logoutGoogle = () => {
    setUserInfo(undefined);
  };

  const initalValue = {
    userInfo: userInfo,
    login: loginGoogle,
    logout: logoutGoogle,
  };
  return <LoginContext.Provider value={initalValue}>{children}</LoginContext.Provider>;
};
