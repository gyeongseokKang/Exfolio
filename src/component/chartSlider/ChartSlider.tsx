import React from "react";
import Plot from "react-plotly.js";

function ChartSlider() {
  return (
    <>
      <Plot
        data={[
          {
            labels: ["삼성", "현대", "엘자"],
            values: [2, 6, 3],
            type: "pie",
          },
        ]}
        layout={{ width: 320, height: 300, showlegend: false }}
        config={{ displayModeBar: false }}
      />
      <Plot
        data={[
          {
            labels: ["삼성", "현대", "엘자"],
            values: [2, 6, 3],
            type: "pie",
          },
        ]}
        layout={{ width: 320, height: 300, showlegend: false }}
        config={{ displayModeBar: false }}
      />
      <Plot
        data={[
          {
            labels: ["삼성", "현대", "엘자"],
            values: [2, 6, 3],
            type: "pie",
          },
        ]}
        layout={{ width: 320, height: 300, showlegend: false }}
        config={{ displayModeBar: false }}
      />
      <Plot
        data={[
          {
            labels: ["삼성", "현대", "엘자"],
            values: [2, 6, 3],
            type: "pie",
          },
        ]}
        layout={{ width: 320, height: 300, showlegend: false }}
        config={{ displayModeBar: false }}
      />
      <Plot
        data={[
          {
            labels: ["삼성", "현대", "엘자"],
            values: [2, 6, 3],
            type: "pie",
          },
        ]}
        layout={{ width: 320, height: 300, showlegend: false }}
        config={{ displayModeBar: false }}
      />
    </>
  );
}

export default ChartSlider;
