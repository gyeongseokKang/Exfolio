/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { FrontierData, RRSW } from "src/service/getEfficientFrontier";
import PortfolioInfoCardWithBtn from "src/component/main/common/wiget/PortfolioInfoCardWithBtn";
import ErrorIcon from "@material-ui/icons/Error";
import { BackTestData, getBackTest } from "src/service/getBackTest";
import LoadingProgress from "src/component/main/common/wiget/LoadingProgress";
import { PortfolioPerformance } from "src/service/getPortfolioPerformance";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",

      "& > *": {
        margin: "auto",
        fontSize: "1.2rem",
        fontWeight: 500,
        fontFamily: "Noto Sans CJK KR",
      },
    },
    infoCard: {
      float: "left",
      textAlign: "center",
    },
    description: {
      fontSize: "1.1rem",
      "& > div": {
        fontSize: "1rem",
        fontWeight: "bold",
        letterSpacing: "1px",
        lineHeight: "216%",
      },
    },
    EfExplainIcon: {
      fontSize: "1.2rem",
      paddingLeft: "2px",
      fontStyle: "italic ",
      float: "left",
      color: "gray",
      transition: "all 0.3s ease",
      "&:hover": {
        cursor: "pointer",
        color: "black",
        transform: "rotate(20deg)",
      },
    },
  })
);

interface TapEfficientFrontierAIProp {
  handleSelectedPF: (portfolio: RRSW) => void;
  frontierData: FrontierData;
  stockList: { name: string; code: string; weight: number }[];
  portfolioPerformance: PortfolioPerformance;
}

const TapEfficientFrontierAI = ({ handleSelectedPF, frontierData, stockList, portfolioPerformance }: TapEfficientFrontierAIProp) => {
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
        <div>
          <Paper className={classes.infoCard} elevation={0}>
            <div style={{ marginLeft: "20px" }}>
              <div style={{ paddingLeft: "60px", paddingBottom: "2px", float: "left" }}>효율적 경계선 모델</div>
              <ErrorIcon
                className={classes.EfExplainIcon}
                onMouseEnter={() => {
                  console.log("onMouseEnter");
                }}
                onMouseLeave={() => {
                  console.log("onMouseLeave");
                }}
              />
            </div>
            <Plot
              data={[
                {
                  x: frontierX,
                  y: frontierY,
                  mode: "lines",
                  line: { shape: "spline" },
                  name: "EF 모델 추천",
                  hovertemplate: `<b>Return</b>: %{y:.5f}<br><b>Risk</b>: %{x:.5f}<br>`,
                },
                {
                  x: [portfolioPerformance.performance.risk],
                  y: [portfolioPerformance.performance.returns],
                  mode: "markers",
                  name: "기존",
                  marker: { size: 20, symbol: "star", color: "red" },
                  hovertemplate: `<b>Return</b>: %{y:.5f}<br><b>Risk</b>: %{x:.5f}<br>`,
                },
                {
                  x: [portfolioPerformance.enhance.risk],
                  y: [portfolioPerformance.enhance.returns],
                  mode: "markers",
                  name: "Dr.폴리오 추천",
                  marker: { size: 20, symbol: "star", color: "orange" },
                  hovertemplate: `<b>Return</b>: %{y:.5f}<br><b>Risk</b>: %{x:.5f}<br>`,
                },
              ]}
              layout={{
                margin: { t: 0, b: 10, r: 0, l: 10 },
                width: 300,
                height: 300,
                xaxis: {
                  showticklabels: false,
                  title: "risk",
                },
                yaxis: {
                  showticklabels: false,
                  title: "return",
                },
                showlegend: false,
              }}
              config={{ displayModeBar: false }}
              onClick={(e: any) => {
                setClickedPF(frontierData.frontier[e.points[0].pointIndex]);
              }}
            />
            <div className={classes.description}>
              &nbsp;
              <div>
                <span style={{ color: "red", fontWeight: "bold" }}>★</span> : 기존 포트폴리오
              </div>
              <div>
                <span style={{ color: "orange", fontWeight: "bold" }}>★</span> : 개선된 포트폴리오
              </div>
            </div>
          </Paper>
        </div>
        <PortfolioInfoCardWithBtn title={"기존 포트폴리오"} info={portfolioPerformance.performance} />
        <PortfolioInfoCardWithBtn title={"개선된 포트폴리오"} info={portfolioPerformance.enhance} onPfClick={handleSelectedPF} />
      </div>
    </>
  );
};

export default TapEfficientFrontierAI;
