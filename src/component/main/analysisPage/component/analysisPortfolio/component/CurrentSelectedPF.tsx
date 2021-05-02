/* eslint-disable @typescript-eslint/no-unused-vars */
import PortfolioInfoCard from "src/component/main/common/wiget/PortfolioInfoCard";
import { RRSW } from "src/service/getEfficientFrontier";
import React, { useEffect, useState } from "react";
import { Paper } from "@material-ui/core";
import LoadingProgress from "src/component/main/common/wiget/LoadingProgress";
import { BackTestData, getBackTest } from "src/service/getBackTest";
import Plot from "react-plotly.js";

interface CurrentSelectedPFProp {
  selectedPF: RRSW;
}

const CurrentSelectedPF = ({ selectedPF }: CurrentSelectedPFProp) => {
  const [backTest, setBackTest] = useState<BackTestData>();
  const [testFinish, setTestFinish] = useState<Boolean>(false);
  useEffect(() => {
    getBackTest({ code: selectedPF.weights.items, weight: selectedPF.weights.values }).then((res) => {
      setBackTest(res);
      setTestFinish(true);
    });
  }, [selectedPF]);

  return (
    <>
      <div style={{ fontWeight: 500, fontStyle: "normal", fontSize: "1.5rem", fontFamily: "Noto Sans CJK KR" }}>모델 실행 결과</div>
      <Paper elevation={0}>
        {testFinish && backTest !== undefined ? (
          <>
            <br />
            <div style={{ fontSize: "1.0rem" }}> {backTest.days[0]} 시작 금액 : 1000만원</div>
            <div style={{ fontSize: "1.0rem" }}>
              {backTest.days[backTest.days.length - 1]} 현재 금액 : {Math.round(backTest.values[backTest.values.length - 1] * 1000)}만원
            </div>
            <Plot
              data={[
                {
                  x: backTest.days,
                  y: backTest.values.map((item) => Math.round(item * 1000) / 2),
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
            <LoadingProgress width={300} height={300} description={"테스트 분석중..."} />
          </div>
        )}
      </Paper>
    </>
  );
};

export default CurrentSelectedPF;
