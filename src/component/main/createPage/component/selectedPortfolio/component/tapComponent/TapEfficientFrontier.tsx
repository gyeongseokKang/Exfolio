/* eslint-disable @typescript-eslint/no-unused-vars */
import { Card } from "@material-ui/core";
import React from "react";
import Plot from "react-plotly.js";

const TapRecommend = () => {
  return (
    <>
      <Card style={{ height: "440px" }}>
        <div style={{ float: "left", paddingRight: "50px" }}>
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
        </div>
        <div>
          <Plot
            data={[
              {
                z: [
                  [30, 60, 1, -10, null],
                  [30, 60, 1, null, 20],
                  [30, 60, null, -10, 20],
                  [20, null, 60, 80, 30],
                  [null, 23, 30, 50, 1],
                ],
                x: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                y: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                type: "heatmap",
              },
            ]}
            layout={{
              margin: { t: 30, b: 30, r: 30, l: 30 },
              width: 300,
              height: 300,
              title: "Risk Model",
            }}
            config={{ displayModeBar: false }}
          />
        </div>
      </Card>
    </>
  );
};

export default TapRecommend;
