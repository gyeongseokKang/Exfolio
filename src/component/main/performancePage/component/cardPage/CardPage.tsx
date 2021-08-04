import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { portfolio } from "../PerformanceCard";
import CardUserInfo from "./component/CardUserInfo";
import PortFolioSlider from "./component/PortFolioSlider";
import BenchmarkChart from "./component/BenchmarkChart";
import { RRSW } from "src/service/getEfficientFrontier";
import RecommendWeight from "./component/RecommendWeight";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "1600px",
    height: "1400px",
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
  const [selectedPF, setSelectedPF] = useState<undefined | RRSW>(undefined);
  const changePF = (PF: RRSW) => {
    setSelectedPF(PF);
  };
  return (
    <>
      <div className={classes.root}>
        <CardUserInfo userName={userInfo.userName} PFCount={testPFCount}></CardUserInfo>
        <PortFolioSlider changePF={changePF}></PortFolioSlider>
        <div>각 포트폴리오 뱃지가 나오는 부분</div>
        <BenchmarkChart weights={selectedPF?.weights} />
        <RecommendWeight weights={selectedPF?.weights}></RecommendWeight>
      </div>
    </>
  );
};

export default CardPage;
