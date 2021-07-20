import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React, { useContext } from "react";
import { LoginContext } from "src/contexts/LoginContext";
import LoginPage from "./component/LoginPage";
import LogoutPage from "./component/LogoutPage";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "0px 20px 10px 20px",
      padding: "10px 0px 10px 0px",
      position: "fixed",
      bottom: "0",
    },
    mobileRoot: {
      position: "unset",
      bottom: "",
    },
  })
);
interface GoogleLogIOProp {
  width: number;
  expanded: boolean;
}

const GoogleLogIO = ({ width, expanded }: GoogleLogIOProp) => {
  const classes = useStyles();
  const { userInfo, login, logout } = useContext(LoginContext);

  return (
    <>
      <div className={`${classes.root} ${width < 800 && classes.mobileRoot}`}>
        {userInfo === undefined ? (
          <LoginPage login={login} expanded={expanded} />
        ) : (
          <LogoutPage userInfo={userInfo} logout={logout} expanded={expanded} />
        )}
      </div>
    </>
  );
};

export default GoogleLogIO;
