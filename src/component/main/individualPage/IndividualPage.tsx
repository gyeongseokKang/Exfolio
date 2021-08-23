import React, { useEffect, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Propensity from "./component/Propensity";
import MyPortfolios from "./component/MyPortfolios";
import WithRoundTitle from "src/component/common/hoc/WithRoundTitle";
import { getUserInfo, UserInfo } from "src/service/getUserInfo";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    "& > div": {
      marginTop: "2rem",
    },
  },
}));

const PropensityWithRoundTitle = WithRoundTitle("내 성형", 1.25)(Propensity);
const IndividualPage = () => {
  const classes = useStyles();
  const userName = "0kuavkw3m6";
  const [userInfo, setUserInfo] = useState<UserInfo>();
  useEffect(() => {
    getUserInfo(userName).then((res) => {
      if (res === undefined) return;
      setUserInfo(res);
    });
  }, []);

  return (
    <>
      <div className={classes.root}>
        {userInfo && (
          <>
            <MyPortfolios
              userName={userName}
              portfolioCount={userInfo.portfolioCount}
              portfolioIdList={userInfo.portfolioIdList}
            />
            <PropensityWithRoundTitle />
          </>
        )}
      </div>
    </>
  );
};
export default IndividualPage;
