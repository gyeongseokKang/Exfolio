import React from "react";
import Plot from "react-plotly.js";

const EfficientFrontierChart = () => {
  return (
    <>
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
          title: "Efficient Frontier",
        }}
        config={{ displayModeBar: false }}
      />
    </>
  );
};

export default EfficientFrontierChart;
