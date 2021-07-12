import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import PortfolioInfoCardWithBtn from "src/component/main/common/widget/PortfolioInfoCardWithBtn";
import React from "react";
import { FrontierData } from "src/service/getEfficientFrontier";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: "auto",
      },
    },
  })
);

interface RRSW {
  returns: number;
  risk: number;
  sharpe: number;
  weights: {
    items: string[];
    values: number[];
  };
}

interface TapRecommendPortfolioProp {
  recommnedData: FrontierData;
  handleSelectedPF: (portfolio: RRSW) => void;
}

interface testTapRecommendPortfolioProp {
  min_risk: RRSW;
  max_returns: RRSW;
  max_sharpe: RRSW;
}

const TapRecommendPortfolio = ({ handleSelectedPF, recommnedData }: TapRecommendPortfolioProp) => {
  const classes = useStyles();
  let specific: testTapRecommendPortfolioProp = recommnedData.specific;
  return (
    <>
      <div className={classes.root}>
        <PortfolioInfoCardWithBtn title={"안정 중시형"} info={specific.min_risk} onPfClick={handleSelectedPF} />
        <PortfolioInfoCardWithBtn title={"밸런스형"} info={specific.max_sharpe} onPfClick={handleSelectedPF} />
        <PortfolioInfoCardWithBtn title={"수익 중시형"} info={specific.max_returns} onPfClick={handleSelectedPF} />
      </div>
    </>
  );
};

export default TapRecommendPortfolio;
