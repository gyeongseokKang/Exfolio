/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Plot from "react-plotly.js";
import RatioSlider from "./ratioSlider";

interface stockInfo {
  name: string;
  radio: number;
}

interface StockListLayoutProp {
  stockList: stockInfo[];
  onChange(name: string, value: number): void;
  onDelete(name: string): void;
}

function ChartSlider(prop: StockListLayoutProp) {
  return (
    <>
      <div
        style={{
          width: "800px",
          height: "500px",
          borderColor: "black",
          borderWidth: "2px",
          borderStyle: "solid",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "500px",
            height: "350px",
            borderColor: "black",
            borderWidth: "2px",
            borderStyle: "solid",
          }}
        >
          <Plot
            data={[
              {
                labels: prop.stockList.map((item) => item.name),
                values: prop.stockList.map((item) => item.radio),
                type: "pie",
                hoverinfo: "label+percent",
                textinfo: "label+percent",
                sort: false,
              },
            ]}
            layout={{
              width: 500,
              height: 500,
              showlegend: false,
              title: "<추천 포트폴리오>",
            }}
            config={{ displayModeBar: false }}
          />
        </div>
        <div
          style={{
            padding: "0px 10px 0px 10px",
            borderColor: "black",
            borderWidth: "2px",
            borderStyle: "solid",
          }}
        >
          [ 종목구성 ]
          {prop.stockList.map((item) => {
            return (
              <RatioSlider
                name={item.name}
                value={item.radio}
                key={item.name}
                onChange={prop.onChange}
              />
            );
          })}
        </div>
      </div>
      <div
        style={{
          width: "800px",
          height: "150px",
          borderColor: "black",
          borderWidth: "2px",
          borderStyle: "solid",
        }}
      >
        이곳은 모델 설명 텍스트를 박는곳이곳은 모델 설명 텍스트를 박는곳이곳은
        모델 설명 텍스트를 박는곳이곳은 모델 설명 텍스트를 박는곳이곳은 모델
        설명 텍스트를 박는곳이곳은 모델 설명 텍스트를 박는곳이곳은 모델 설명
        텍스트를 박는곳이곳은 모델 설명 텍스트를 박는곳이곳은 모델 설명 텍스트를
        박는곳이곳은 모델 설명 텍스트를 박는곳이곳은 모델 설명 텍스트를
        박는곳이곳은 모델 설명 텍스트를 박는곳
      </div>
    </>
  );
}

export default ChartSlider;
