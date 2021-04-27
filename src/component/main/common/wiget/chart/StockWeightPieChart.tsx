import React from "react";
import Plot from "react-plotly.js";

export default function StockWeightPieChart({
  labels,
  values,
  title,
  width = 250,
  height = 280,
}: {
  values: Array<number | string>;
  labels: Plotly.Datum[];
  title: string;
  width?: number;
  height?: number;
}) {
  return (
    <Plot
      data={[
        {
          labels: labels,
          values: values,
          type: "pie",
          hoverinfo: "label+percent",
          textinfo: "label+percent",
          sort: false,
          textposition: "inside",
          insidetextorientation: "horizontal",
        },
      ]}
      layout={{
        width: width,
        height: height,
        margin: { t: 30, b: 20, r: 0, l: 0 },
        showlegend: false,
        title: title,
      }}
      config={{ displayModeBar: false }}
    />
  );
}
