import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { GoogleLogout } from "react-google-login";
import { UserInfoState } from "src/contexts/LoginContext";
import { googleLoginAPIKey } from "src/service/serviceSetting";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    "& > img": {
      width: "40px",
      height: "40px",
      borderRadius: "100%",
    },
  },
  logoutLayout: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingLeft: "10px",
    "& > button": {
      width: "max-content",
      cursor: "pointer",
    },
  },
  expandedOn: {
    display: "none",
  },
}));

interface LogoutPageProp {
  userInfo: UserInfoState;
  logout: () => void;
  expanded: boolean;
}

const LogoutPage = ({ userInfo, expanded, logout }: LogoutPageProp) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <img src={userInfo.imageUrl} alt={"img"}></img>
        <GoogleLogout
          render={(renderProps: any) => (
            <div className={`${classes.logoutLayout} ${!expanded && classes.expandedOn}`}>
              {userInfo.familyName + userInfo.givenName}
              <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
                Logout
              </button>
            </div>
          )}
          clientId={googleLoginAPIKey}
          onLogoutSuccess={logout}
        ></GoogleLogout>
      </div>
    </>
  );
};

export default LogoutPage;
