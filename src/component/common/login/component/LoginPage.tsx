import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { GoogleLogin } from "react-google-login";
import { UserInfoState } from "src/contexts/LoginContext";
import { googleLoginAPIKey } from "src/service/serviceSetting";
import google_logo from "./google_logo.png";

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
  loginLayout: {
    "& > button": {
      width: "200px",
      display: "flex",
      height: "40px",
      alignItems: "center",
      cursor: "pointer",
      justifyContent: "space-around",
    },
  },
  expandedOff: {
    "& > button": {
      width: "40px",
      "& > div": {
        display: "none",
      },
    },
  },
}));

interface LoginPageProp {
  login: (userInfo: UserInfoState) => void;
  expanded: boolean;
}

const LoginPage = ({ login, expanded }: LoginPageProp) => {
  const classes = useStyles();
  const responseGoogle = (response: any) => {
    if (response.error) {
      return;
    }
    login({
      email: response.profileObj.email,
      familyName: response.profileObj.familyName,
      givenName: response.profileObj.givenName,
      googleId: response.profileObj.googleId,
      imageUrl: response.profileObjimageUrl,
    });
  };

  return (
    <>
      <div className={classes.root}>
        <GoogleLogin
          clientId={googleLoginAPIKey}
          render={(renderProps: any) => (
            <div className={`${classes.loginLayout} ${!expanded && classes.expandedOff}`}>
              <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
                <img src={google_logo} style={{ width: "35px", height: "35px", cursor: "pointer" }} alt="logo" />
                <div>Login</div>
              </button>
            </div>
          )}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      </div>
    </>
  );
};

export default LoginPage;
