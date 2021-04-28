import Plotly from "plotly.js";
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
  // const timer = React.useRef<number>();
  // timer.current = window.setTimeout(() => {
  //   console.log(labels, values);
  //   Plotly.newPlot("stockWeightPieChart", [
  //     {
  //       labels: labels,
  //       values: labels.map(() => 0),
  //       type: "pie",
  //       hoverinfo: "label+percent",
  //       textinfo: "label+percent",
  //       sort: false,
  //       textposition: "inside",
  //       insidetextorientation: "horizontal",
  //     },
  //   ]).then(() => {
  //     console.log("ani", labels, values);
  //     Plotly.addFrames("stockWeightPieChart", [
  //       {
  //         data: [
  //           {
  //             labels: labels,
  //             values: values,
  //             type: "pie",
  //             hoverinfo: "label+percent",
  //             textinfo: "label+percent",
  //             sort: false,
  //             textposition: "inside",
  //             insidetextorientation: "horizontal",
  //           },
  //         ],
  //         layout: {
  //           width: width,
  //           height: height,
  //           margin: { t: 30, b: 20, r: 0, l: 0 },
  //           showlegend: false,
  //           title: title,
  //         },
  //       },
  //     ]);
  //   });
  // }, 1000);

  return (
    <Plot
      divId="stockWeightPieChart"
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
      onAnimated={() => {
        console.log("aa");
      }}
    />
  );
}
