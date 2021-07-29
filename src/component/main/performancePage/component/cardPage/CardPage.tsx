import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { portfolio } from "../PerformanceCard";
import CardUserInfo from "./component/CardUserInfo";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "600px",
    height: "400px",
    padding: "1rem",
  },
}));

interface CardPageProp {
  userInfo: {
    userId: string;
    userName: string;
  };
  portfolios: portfolio[];
}

const CardPage = ({ userInfo, portfolios }: CardPageProp) => {
  const classes = useStyles();
  const testPFCount = {
    public: 10,
    private: 20,
    delete: 5,
  };

  return (
    <>
      <div className={classes.root}>
        <CardUserInfo userName={userInfo.userName} PFCount={testPFCount}></CardUserInfo>
        <div>ddd</div>
      </div>
    </>
  );
};

export default CardPage;
