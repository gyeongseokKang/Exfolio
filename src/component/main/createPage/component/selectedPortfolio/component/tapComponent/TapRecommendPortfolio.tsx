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
    },
    selectButton: {
      marginTop: "-70px",
      marginLeft: "180px",
    },
  })
);

interface RRSW {
  returns: number;
  risk: number;
  sharpe: number;
  weights: {
    name: string[];
    value: number[];
  };
}

interface TapRecommendPortfolioProp {
  min_risk?: RRSW;
  max_returns?: RRSW;
  max_sharpe?: RRSW;
  handleType: (type: string) => void;
}

interface testTapRecommendPortfolioProp {
  min_risk: RRSW;
  max_returns: RRSW;
  max_sharpe: RRSW;
}

const TapRecommendPortfolio = ({ handleType }: TapRecommendPortfolioProp) => {
  const classes = useStyles();
  let specific: testTapRecommendPortfolioProp = testSpecific;
  return (
    <>
      <div className={classes.root}>
        <Paper elevation={0}>
          <PortfolioInfoCard
            values={specific.min_risk.weights.value}
            labels={specific.min_risk.weights.name}
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
              handleType("min_risk");
            }}
          >
            Select
          </Button>
        </Paper>
        <Paper elevation={0}>
          <PortfolioInfoCard
            values={specific.max_sharpe.weights.value}
            labels={specific.max_sharpe.weights.name}
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
              handleType("max_sharpe");
            }}
          >
            Select
          </Button>
        </Paper>
        <Paper elevation={0}>
          <PortfolioInfoCard
            values={specific.max_returns.weights.value}
            labels={specific.max_returns.weights.name}
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
              handleType("max_returns");
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
  min_risk: {
    returns: 0.037191073827577144,
    risk: 0.28834593129772657,
    sharpe: 0.05961961644545211,
    weights: {
      name: ["현대차", "GS건설", "이마트"],
      value: [0.33712, 0.18933, 0.47355],
    },
  },
  max_returns: {
    returns: 0.1881954555724202,
    risk: 0.44396041383646057,
    sharpe: 0.37885237136114913,
    weights: {
      name: ["현대차", "GS건설", "이마트"],
      value: [0, 1, 0],
    },
  },
  max_sharpe: {
    returns: 0.17637758406160134,
    risk: 0.34744185214581924,
    sharpe: 0.45008274937462234,
    weights: {
      name: ["현대차", "GS건설", "이마트"],
      value: [0.52242, 0.47758, 0.0],
    },
  },
};
