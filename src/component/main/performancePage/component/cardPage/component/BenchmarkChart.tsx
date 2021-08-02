import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { RRSW } from "src/service/getEfficientFrontier";
import Plot from "react-plotly.js";

const useStyles = makeStyles((theme: Theme) => ({
  root: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around" },
}));

interface BenchmarkChartProp {
  weights: undefined | RRSW["weights"];
}

const BenchmarkChart = ({ weights }: BenchmarkChartProp) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {weights?.items.map((item, index) => {
        return index < 10 ? <div>{item}</div> : undefined;
      })}
    </div>
  );
};

// const CompareLineChart = (items : string[]) => {
//   const valueList = [
//     {
//       name :
//     }
//   ]
//   return (
//     <Plot
//       data={[
//         {
//           x: backTest.days,
//           y: previousBackTest.values.map((item) => Math.round(item * 1000)),
//           mode: "lines",
//           line: { shape: "spline" },
//           name: "Lines",
//           marker: {
//             color: "red",
//           },
//         },
//         {
//           x: backTest.days,
//           y: backTest.values.map((item) => Math.round(item * 1000)),
//           mode: "lines",
//           line: { shape: "spline" },
//           name: "Lines",
//           marker: {
//             color: "black",
//           },
//         },
//       ]}
//       layout={{
//         margin: { t: 0, b: 30, r: 50, l: 0 },
//         width: 300,
//         height: 200,
//         showlegend: false,
//         xaxis: {
//           tickformat: "%Y %b %d",
//         },
//         yaxis: {
//           side: "right",
//         },
//       }}
//       config={{ displayModeBar: false }}
//     />
//   );
// }

export default BenchmarkChart;
