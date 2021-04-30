import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import PortfolioInfoCardWithBtn from "src/component/main/common/wiget/PortfolioInfoCardWithBtn";
import React from "react";

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
  recommnedData: {
    min_risk: RRSW;
    max_returns: RRSW;
    max_sharpe: RRSW;
  };
  handleSelectedPF: (portfolio: RRSW) => void;
}

interface testTapRecommendPortfolioProp {
  min_risk: RRSW;
  max_returns: RRSW;
  max_sharpe: RRSW;
}

const TapRecommendPortfolio = ({ handleSelectedPF, recommnedData }: TapRecommendPortfolioProp) => {
  const classes = useStyles();
  let specific: testTapRecommendPortfolioProp = recommnedData;

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

let testSpecific = {
  max_returns: {
    returns: 0.17909763448675378,
    risk: 0.18606897117477664,
    sharpe: 0.8550465640899988,
    weights: {
      items: ["현대차", "삼성전자", "SK텔레콤"],
      values: [0.0, 1.0, 0.0],
    },
  },
  max_sharpe: {
    returns: 0.1790976344867547,
    risk: 0.18606897117477716,
    sharpe: 0.8550465640900013,
    weights: {
      items: ["현대차", "삼성전자", "SK텔레콤"],
      values: [0.0, 1.0, 0.0],
    },
  },
  min_risk: {
    returns: 0.12240824150775552,
    risk: 0.12940595360772536,
    sharpe: 0.791371947369521,
    weights: {
      items: ["현대차", "삼성전자", "SK텔레콤"],
      values: [0.17079, 0.33698, 0.49222],
    },
  },
};
