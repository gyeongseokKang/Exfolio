/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Card, Paper } from "@material-ui/core";
import React from "react";
import Plot from "react-plotly.js";
import PortfolioInfoCard from "src/component/main/common/wiget/PortfolioInfoCard";

import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

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
      "&:hover": {
        cursor: "pointer",
      },
    },
    infoCard: {
      transform: "rotate(0deg)",
    },
  })
);

interface TapEfficientFrontierProp {
  handleType: (portfolio: RRSW) => void;
  frontierData: {
    frontier: RRSW[];
    specific: {
      max_returns: RRSW;
      max_sharpe: RRSW;
      min_risk: RRSW;
    };
  };
}

interface RRSW {
  returns: number;
  risk: number;
  sharpe: number;
  weights: {
    items: string[];
    values: number[];
  };
}

const TapEfficientFrontier = ({ handleType, frontierData }: TapEfficientFrontierProp) => {
  const classes = useStyles();
  const [clickedPF, setClickedPF] = React.useState<RRSW>();
  frontierData.frontier.forEach((item) => {
    console.log("dd");
  });
  return (
    <>
      <div className={classes.root}>
        <Paper className={classes.infoCard} elevation={0}>
          <Plot
            data={[
              {
                x: [2, 1, 3, 4],
                y: [1, 5, 11, 16],
                mode: "lines",
                line: { shape: "spline" },
                name: "Lines",
              },
              {
                x: [1.5, 2, 3],
                y: [10, 15, 13],
                mode: "markers",
                name: "Scatter",
                marker: { size: 12, symbol: "star" },
              },
            ]}
            layout={{
              margin: { t: 30, b: 30, r: 30, l: 30 },
              width: 300,
              height: 300,
              showlegend: false,
              title: "EF Model",
            }}
            config={{ displayModeBar: false }}
          />
        </Paper>
        <Paper className={classes.infoCard} elevation={0}>
          <PortfolioInfoCard
            values={frontierData.specific.min_risk.weights.values}
            labels={frontierData.specific.min_risk.weights.items}
            title={"안정 중시형"}
            volatility={frontierData.specific.min_risk.risk}
            returns={frontierData.specific.min_risk.returns}
            sharpe={frontierData.specific.min_risk.sharpe}
          />
          <Button
            className={classes.selectButton}
            variant="contained"
            color="primary"
            onClick={() => {
              //handleType(specific.min_risk);
            }}
          >
            Select
          </Button>
        </Paper>
        <Paper className={classes.infoCard} elevation={0}>
          <Plot
            data={[
              {
                x: [1, 2, 3, 4],
                y: [1, 5, 11, 16],
                mode: "lines",
                line: { shape: "spline" },
                name: "Lines",
              },
            ]}
            layout={{
              margin: { t: 30, b: 30, r: 30, l: 30 },
              width: 300,
              height: 300,
              showlegend: false,
              title: "Back testing",
            }}
            config={{ displayModeBar: false }}
          />
          <div>해당 포트폴리오로 테스트해본 결과</div>
        </Paper>
      </div>
    </>
  );
};

export default TapEfficientFrontier;
