/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Card, Paper } from "@material-ui/core";
import React, { useState } from "react";
import Plot from "react-plotly.js";
import PortfolioInfoCard from "src/component/main/common/wiget/PortfolioInfoCard";

import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { FrontierData, RRSW } from "src/service/getEfficientFrontier";

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

interface TapEfficientFrontierProp {
  handleType: (portfolio: RRSW) => void;
  frontierData: FrontierData;
}

const TapEfficientFrontier = ({ handleType, frontierData }: TapEfficientFrontierProp) => {
  const classes = useStyles();

  const [clickedPF, setClickedPF] = useState<RRSW>(frontierData.frontier[0]);

  let frontierX: number[] = [];
  let frontierY: number[] = [];
  let specificX: number[] = [];
  let specificY: number[] = [];

  frontierData.frontier.forEach((item) => {
    frontierX.push(item.risk);
    frontierY.push(item.returns);
  });
  for (let key in frontierData.specific) {
    if (key === "max_returns" || key === "max_sharpe" || key === "min_risk") {
      specificX.push(frontierData.specific[key]!.risk);
      specificY.push(frontierData.specific[key]!.returns);
    }
  }

  return (
    <>
      <div className={classes.root}>
        <Paper className={classes.infoCard} elevation={0}>
          <Plot
            data={[
              {
                x: frontierX,
                y: frontierY,
                mode: "lines",
                line: { shape: "spline" },
                name: "Lines",
              },
              {
                x: specificX,
                y: specificY,
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
            onClick={(e: any) => {
              setClickedPF(frontierData.frontier[e.points[0].pointIndex]);
            }}
          />
        </Paper>
        <Paper className={classes.infoCard} elevation={0}>
          <PortfolioInfoCard
            values={clickedPF.weights.values}
            labels={clickedPF.weights.items}
            title={"Clicked Model"}
            volatility={clickedPF.risk}
            returns={clickedPF.returns}
            sharpe={clickedPF.sharpe}
          />
          <Button
            className={classes.selectButton}
            variant="contained"
            color="primary"
            onClick={(e: any) => {
              handleType(clickedPF);
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
