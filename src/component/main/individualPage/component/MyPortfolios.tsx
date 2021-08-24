import React, { useEffect, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { UserInfo } from "src/service/getUserInfo";
import CardUserInfo from "../../performancePage/component/cardPage/component/CardUserInfo";
import { getUserPortfolio, UserPortfolio } from "src/service/getUserPortfolio";
import WithRoundTitle from "src/component/common/hoc/WithRoundTitle";
import PortFolioSlider from "./PortFolioSlider";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    "& > div": {
      marginTop: "2rem",
    },
  },
}));

interface MyPortfoliosProp {
  userName: string;
  portfolioCount: UserInfo["portfolioCount"];
  portfolioIdList: UserInfo["portfolioIdList"];
}

const CardUserInfoWithRoundTitle = WithRoundTitle("내 정보", 1.25)(CardUserInfo);
const PortFolioSliderWithRoundTitle = WithRoundTitle("내 포트폴리오", 1.25)(PortFolioSlider);

const MyPortfolios = ({ userName, portfolioCount, portfolioIdList }: MyPortfoliosProp) => {
  const classes = useStyles();
  const [userPortfolio, setUserPortfolio] = useState<UserPortfolio>();
  useEffect(() => {
    getUserPortfolio(userName).then((res) => {
      if (res === undefined) return;
      setUserPortfolio(res);
    });
  }, [userName, portfolioIdList]);

  return (
    <div className={classes.root}>
      <CardUserInfoWithRoundTitle userName={userName} PFCount={portfolioCount} />
      {userPortfolio && (
        <PortFolioSliderWithRoundTitle
          publicIdList={portfolioIdList}
          userName={userName}
          portfolios={userPortfolio.portfolios}
        />
      )}
    </div>
  );
};

export default MyPortfolios;
