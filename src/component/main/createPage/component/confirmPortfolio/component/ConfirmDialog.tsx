import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Card, Dialog } from "@material-ui/core";
import IndexGaugeCharts from "src/component/main/common/wiget/chart/IndexGaugeCharts";
import Plot from "react-plotly.js";
import { DiscreteAmount, getDiscreteAmount } from "src/service/getDiscreteAmount";
import LoadingProgress from "src/component/main/common/wiget/LoadingProgress";
import { BackTestData, getBackTest } from "src/service/getBackTest";
import StockCount from "./StockCount";
import StockTable from "./StockTable";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { width: "800px", height: "500px", fontWeight: 500, fontFamily: "Noto Sans CJK KR" },
    card: {
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
      height: "500px",
      margin: "10px 100px 100px 100px",
      position: "relative",
    },
    stockSlider: {
      float: "left",
      paddingLeft: "80px",
      paddingRight: "10px",
      maxHeight: "300px",
      overflowY: "scroll",
      overflowX: "hidden",
    },
    button: {
      fontWeight: 500,
      fontFamily: "Noto Sans CJK KR",
      "& .MuiSvgIcon-root": {
        transition: "all 0.3s ease",
      },
      "&:hover": {
        background: "#B6EBFF",
        boxShadow: "0 16px 24px 0 rgba(172, 34, 34, 0.2)",
        cursor: "pointer",
        "& .MuiSvgIcon-root": {
          transform: "rotate(180deg)",
        },
      },
    },
    "@global": {
      "*::-webkit-scrollbar": {
        width: "0.4em",
      },
      "*::-webkit-scrollbar-track": {
        "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
      },
      "*::-webkit-scrollbar-thumb": {
        backgroundColor: "#2E2E2E",
        outline: "1px solid #E6E6FF",
        borderRadius: "20px",
      },
    },
    backTestDescription: {
      fontSize: "1.0rem",
    },
  })
);

interface ConfirmDialogProp {
  open: boolean;
  finalWeightList: {
    items: string[];
    values: number[];
  };
  onClose: () => void;
  stockList: stockInfo[];
}

interface stockInfo {
  name: string;
  code: string;
  weight: number;
}

export default function ConfirmDialog({ stockList, open, finalWeightList, onClose }: ConfirmDialogProp) {
  const classes = useStyles();
  const [discreteAmount, setDiscreteAmount] = useState<DiscreteAmount>();
  const [backTest, setBackTest] = useState<BackTestData>();
  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    if (!open) return;
    getDiscreteAmount({ code: finalWeightList.items, weight: finalWeightList.values }).then((res) => {
      setDiscreteAmount(res);
    });
    let codeList = finalWeightList.items.map((item) => {
      return stockList.find((target) => (target.name === item ? target.code : ""))?.code || "";
    });

    getBackTest({ code: codeList, weight: finalWeightList.values }).then((res) => {
      setBackTest(res);
    });
  }, [finalWeightList, open, stockList]);
  console.log(finalWeightList.items);
  console.log(backTest);
  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} maxWidth={"md"}>
      <div className={classes.root}>
        <h1 style={{ paddingLeft: "300px" }}>최종 투자 정보</h1>
        <div style={{ float: "left", width: "50%" }}>
          {backTest !== undefined ? (
            <div style={{ paddingLeft: "60px", paddingTop: "30px" }}>
              <div style={{ fontSize: "1.2rem", paddingLeft: "100px" }}> 예상 투자 실적</div>
              <Plot
                data={[
                  {
                    x: backTest.days,
                    y: backTest.values.map((item) => Math.round(item * 1000)),
                    mode: "lines",
                    line: { shape: "spline" },
                    name: "Lines",
                  },
                ]}
                layout={{
                  margin: { t: 0, b: 30, r: 50, l: 0 },
                  width: 300,
                  height: 200,
                  showlegend: false,
                  xaxis: {
                    tickformat: "%Y %b %d",
                  },
                  yaxis: {
                    side: "right",
                  },
                }}
                config={{ displayModeBar: false }}
              />
              <div className={classes.backTestDescription}>
                <div> 투자 시작 : {backTest.days[0]} </div>
                <div> 투자 원금 : 1000만원</div>
                <div> 현재 금액 : {Math.round(backTest.values[backTest.values.length - 1] * 1000)}만원</div>
                <div> 예상 수익율 : {Math.round(backTest.values[backTest.values.length - 1] * 100)}%</div>
              </div>
            </div>
          ) : (
            <div>
              <LoadingProgress width={300} height={200} description={"ETF 분석중..."} />
            </div>
          )}
        </div>
        <div style={{ float: "left", width: "50%" }}>
          <div style={{ paddingLeft: "60px", paddingTop: "20px" }}>
            {discreteAmount !== undefined ? (
              <div>
                <div style={{ width: "100px", float: "left" }}> 총 투자 금액 :</div>
                <div> 1000만원</div>
                <div style={{ width: "100px", float: "left" }}> 남은 금액 :</div>
                <div> {Math.round(discreteAmount.remains / 10000)}만원</div>
                <br />
                <StockTable amounts={discreteAmount.amounts} />
              </div>
            ) : (
              <div>
                <LoadingProgress width={300} height={200} description={"ETF 분석중..."} />
              </div>
            )}
          </div>
        </div>
      </div>
    </Dialog>
  );
}
