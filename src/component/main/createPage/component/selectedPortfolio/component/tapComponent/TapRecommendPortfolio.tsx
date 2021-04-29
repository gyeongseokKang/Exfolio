/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Card } from "@material-ui/core";
import React from "react";
import PortfolioInfoCard from "src/component/main/common/wiget/PortfolioInfoCard";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(1),
        width: 300,
        height: 440,
      },
      position: "relative",
    },
    selectButton: {
      position: "absolute",
      bottom: "10px",
      right: "25px",
      "&:hover": {
        cursor: "pointer",
      },
    },
    infoCard: {
      transform: "rotate(0deg)",
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
  handleType: (portfolio: RRSW) => void;
}

interface testTapRecommendPortfolioProp {
  min_risk: RRSW;
  max_returns: RRSW;
  max_sharpe: RRSW;
}

const TapRecommendPortfolio = ({ handleType, recommnedData }: TapRecommendPortfolioProp) => {
  const classes = useStyles();
  let specific: testTapRecommendPortfolioProp = recommnedData;

  return (
    <>
      <div className={classes.root}>
        <Paper className={classes.infoCard} elevation={0}>
          <PortfolioInfoCard
            values={specific.min_risk.weights.values}
            labels={specific.min_risk.weights.items}
            title={"안정 중시형"}
            volatility={specific.min_risk.risk}
            returns={specific.min_risk.returns}
            sharpe={specific.min_risk.sharpe}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.selectButton}
            onClick={() => {
              handleType(specific.min_risk);
            }}
          >
            Select
          </Button>
        </Paper>
        <Paper className={classes.infoCard} elevation={0}>
          <PortfolioInfoCard
            values={specific.max_sharpe.weights.values}
            labels={specific.max_sharpe.weights.items}
            title={"밸런스형"}
            volatility={specific.max_sharpe.risk}
            returns={specific.max_sharpe.returns}
            sharpe={specific.max_sharpe.sharpe}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.selectButton}
            onClick={() => {
              handleType(specific.max_sharpe);
            }}
          >
            Select
          </Button>
        </Paper>
        <Paper className={classes.infoCard} elevation={0}>
          <PortfolioInfoCard
            values={specific.max_returns.weights.values}
            labels={specific.max_returns.weights.items}
            title={"수익 중시형"}
            volatility={specific.max_returns.risk}
            returns={specific.max_returns.returns}
            sharpe={specific.max_returns.sharpe}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.selectButton}
            onClick={() => {
              handleType(specific.max_returns);
            }}
          >
            Select
          </Button>
        </Paper>
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
