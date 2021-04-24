/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Plot from "react-plotly.js";

interface stockInfo {
  name: string;
  radio: number;
}

interface StockListLayoutProp {
  stockList: stockInfo[];
  onChange(name: string, value: number): void;
  onDelete(name: string): void;
}

function RecommendPortfolioItem() {
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
                labels: [1, 2, 3],
                values: [1, 2, 3],
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
          [ 기타 설명 ] 이곳은 모델 설명 텍스트를 박는곳이곳은 모델 설명
          텍스트를 박는곳이곳은 모델 설명 텍스트를 박는곳이곳은 모델 설명
          텍스트를 박는곳이곳은 모델 설명 텍스트를 박는곳이곳은 모델 설명
          텍스트를 박는곳이곳은 모델 설명 텍스트를 박는곳이곳은 모델 설명
          텍스트를 박는곳이곳은 모델 설명 텍스트를 박는곳이곳은 모델 설명
          텍스트를 박는곳이곳은 모델 설명 텍스트를 박는곳이곳은 모델 설명
          텍스트를 박는곳
        </div>
      </div>
      <Plot
        data={[
          {
            domain: { rows: 0, columns: 0 },
            value: 450,
            type: "indicator",
            mode: "gauge+number+delta",
            delta: { reference: 380 },
            gauge: {
              axis: { range: [null, 500] },
              steps: [
                { range: [0, 250], color: "lightgray" },
                { range: [250, 400], color: "gray" },
              ],
              threshold: {
                line: { color: "red", width: 4 },
                thickness: 0.75,
                value: 490,
              },
            },
          },
          {
            values: [80, 20],
            labels: ["US", "China"],
            text: "CO2",
            textposition: "inside",
            domain: { row: 0, column: 1 },
            name: "CO2 Emissions",
            hoverinfo: "label+percent+name",
            hole: 0.8,
            type: "pie",
          },
          {
            values: [80, 20],
            labels: ["US", "China"],
            text: "CO2",
            textposition: "inside",
            domain: { row: 0, column: 2 },
            name: "CO2 Emissions",
            hoverinfo: "label+percent+name",
            hole: 0.4,
            type: "pie",
          },
        ]}
        layout={{
          height: 200,
          width: 400,
          showlegend: false,
          grid: { rows: 1, columns: 3 },
          margin: { t: 0, b: 0, l: 0, r: 0 },
        }}
        config={{ displayModeBar: false }}
      />
    </>
  );
}

export default RecommendPortfolioItem;
