/* eslint-disable @typescript-eslint/no-unused-vars */
import PortfolioInfoCard from "src/component/main/common/widget/PortfolioInfoCard";
import { RRSW } from "src/service/getEfficientFrontier";
import React, { useEffect, useState } from "react";
import { Paper } from "@material-ui/core";
import LoadingProgress from "src/component/main/common/widget/LoadingProgress";
import { BackTestData, getBackTest } from "src/service/getBackTest";
import Plot from "react-plotly.js";

interface stockInfo {
  name: string;
  code: string;
  weight: number;
}

interface CurrentSelectedPFProp {
  stockList: stockInfo[];
  selectedPF: RRSW;
  previousBackTest: BackTestData;
}

const CurrentSelectedPF = ({ selectedPF, stockList, previousBackTest }: CurrentSelectedPFProp) => {
  const [backTest, setBackTest] = useState<BackTestData>();
  const [testFinish, setTestFinish] = useState<Boolean>(false);
  useEffect(() => {
    let codeList = selectedPF.weights.items.map((item) => {
      return stockList.find((target) => (target.name === item ? target.code : ""))?.code || "";
    });

    getBackTest({ code: codeList, weight: selectedPF.weights.values }).then((res) => {
      setBackTest(res);
      setTestFinish(true);
    });
  }, [selectedPF, stockList]);

  return (
    <>
      <div style={{ fontSize: "1.5rem" }}>모델 실행 결과</div>
      <Paper elevation={0}>
        {testFinish && backTest !== undefined ? (
          <>
            <br />
            <div> 1000만원 투자시</div>
            <div>
              기존 평가액 :
              <span style={{ color: "red", fontWeight: "bold", fontSize: "1rem" }}>
                {" "}
                {Math.round(previousBackTest.values[backTest.values.length - 1] * 1000)}
              </span>
              만원
            </div>
            <div>
              개선 평가액 :
              <span style={{ color: "black", fontWeight: "bold", fontSize: "1.2rem" }}>
                {" "}
                {Math.round(backTest.values[backTest.values.length - 1] * 1000)}
              </span>
              만원
            </div>
            <div>
              예상 수익율 :
              <span style={{ color: "black", fontWeight: "bold", fontSize: "1.2rem" }}>
                {" "}
                {Math.round(backTest.values[backTest.values.length - 1] * 100)}
              </span>
              %
            </div>

            <Plot
              data={[
                {
                  x: backTest.days,
                  y: previousBackTest.values.map((item) => Math.round(item * 1000)),
                  mode: "lines",
                  line: { shape: "spline" },
                  name: "Lines",
                  marker: {
                    color: "red",
                  },
                },
                {
                  x: backTest.days,
                  y: backTest.values.map((item) => Math.round(item * 1000)),
                  mode: "lines",
                  line: { shape: "spline" },
                  name: "Lines",
                  marker: {
                    color: "black",
                  },
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
          </>
        ) : (
          <div>
            <LoadingProgress width={300} height={300} description={"백테스팅 진행중..."} />
          </div>
        )}
      </Paper>
    </>
  );
};

export default CurrentSelectedPF;
