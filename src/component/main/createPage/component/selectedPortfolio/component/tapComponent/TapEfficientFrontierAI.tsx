/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Paper } from "@material-ui/core";
import { useState } from "react";
import Plot from "react-plotly.js";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { FrontierData, RRSW } from "src/service/getEfficientFrontier";
import PortfolioInfoCardWithBtn from "src/component/main/common/wiget/PortfolioInfoCardWithBtn";
import ErrorIcon from "@material-ui/icons/Error";

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
}

const TapEfficientFrontierAI = ({ handleSelectedPF, frontierData }: TapEfficientFrontierAIProp) => {
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
                  x: specificX,
                  y: specificY,
                  mode: "markers",
                  name: "Dr.폴리오 추천",
                  marker: { size: 12, symbol: "star" },
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
          </Paper>
          <Paper className={classes.infoCard} elevation={0}>
            <div>모델 실행 결과</div>
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
                margin: { t: 0, b: 10, r: 0, l: 10 },
                width: 300,
                height: 300,
                xaxis: {
                  showticklabels: false,
                  title: "날짜",
                },
                yaxis: {
                  showticklabels: false,
                  title: "날짜",
                },
                showlegend: false,
              }}
              config={{ displayModeBar: false }}
            />
          </Paper>
          <div className={classes.description}>
            &nbsp;
            <div>
              * 금융 포트폴리오 모델 <span style={{ color: "red", fontWeight: "bold" }}>Efficient frontier 활용</span>
            </div>
            <div>* Deep learning 모델을 통한 주가 변동성 예측</div>
            <div>
              * 과거 <span style={{ color: "red", fontWeight: "bold" }}>30 Days</span> 금융 정보 기반
            </div>
          </div>
        </div>
        <PortfolioInfoCardWithBtn title={"Clicked Model"} info={clickedPF} onPfClick={handleSelectedPF} />
      </div>
    </>
  );
};

export default TapEfficientFrontierAI;
