import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import CardUserInfo from "./component/CardUserInfo";
import BenchmarkChart from "./component/BenchmarkChart";
import { RRSW } from "src/service/getEfficientFrontier";
import RecommendWeight from "./component/RecommendWeight";
import WithRoundTitle from "src/component/common/hoc/WithRoundTitle";
import PortFolioSlider from "./component/PortFolioSlider";
import PortFolioBadge from "./component/PortFolioBadge";
import { RRSW_2, UserPerformance } from "src/service/getUserPerformance";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "75vw",
    height: "1400px",
    padding: "1rem",
    margin: "1rem",
    "& > div": {
      paddingBottom: "2rem",
    },
  },
}));

interface CardPageProp {
  userInfo: {
    userId: string;
    userName: string;
  };
  portfolios: UserPerformance["portfolios"];
}
const PortFolioSliderWithRoundTitle = WithRoundTitle("보유 포트폴리오", 1.25)(PortFolioSlider);
const CardUserInfoWithRoundTitle = WithRoundTitle("유저 정보", 1.25)(CardUserInfo);
const PortFolioBadgeWithRoundTitle = WithRoundTitle("포트폴리오 뱃지", 1.25)(PortFolioBadge);
const BenchmarkChartWithRoundTitle = WithRoundTitle("포트폴리오 수익율", 1.25)(BenchmarkChart);
const RecommendWeightWithRoundTitle = WithRoundTitle("Dr.folio가 추천하는 비중", 1.25)(RecommendWeight);

const CardPage = ({ userInfo, portfolios }: CardPageProp) => {
  const classes = useStyles();
  const testPFCount = {
    public: 10,
    private: 20,
    delete: 5,
  };
  const [selectedPF, setSelectedPF] = useState<RRSW_2 | undefined>(undefined);
  const changePF = (PF: RRSW_2) => {
    setSelectedPF(PF);
  };

  return (
    <>
      <div className={classes.root}>
        <CardUserInfoWithRoundTitle userName={userInfo.userName} PFCount={testPFCount} />
        <PortFolioSliderWithRoundTitle changePF={changePF} portfolios={portfolios} />
        {selectedPF ? (
          <>
            <PortFolioBadgeWithRoundTitle userName={userInfo.userName} PFCount={testPFCount} />
            <BenchmarkChartWithRoundTitle portfolio={selectedPF} />
            <RecommendWeightWithRoundTitle portfolio={selectedPF} />
          </>
        ) : (
          <div style={{ display: "flex", justifyContent: "center" }}>보유 포트폴리오를 선택해주세요!!</div>
        )}
      </div>
    </>
  );
};

export default CardPage;
