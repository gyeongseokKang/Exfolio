import React from "react";
import Plotly from "plotly.js";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Plot from "react-plotly.js";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& div": {
        fontSize: "1.2rem",
      },
    },
  })
);

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
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>{title}</div>
      <Plot
        data={[
          {
            labels: labels,
            values: values,
            type: "pie",
            hoverinfo: "label+percent",
            textinfo: "label+percent",
            textfont: { size: 15, family: "", color: "" },
            sort: false,
            textposition: "inside",
            insidetextorientation: "horizontal",
          },
        ]}
        layout={{
          width: width,
          height: height,
          margin: { t: 10, b: 10, r: 10, l: 10 },
          showlegend: false,
        }}
        config={{ displayModeBar: false }}
      />
    </div>
  );
}
