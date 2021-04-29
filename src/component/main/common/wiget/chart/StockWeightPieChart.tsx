import Plotly from "plotly.js";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Plot from "react-plotly.js";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& div": {
        fontSize: "1.2rem",
        fontWeight: 500,
        fontFamily: "Noto Sans CJK KR",
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
            sort: false,
            textposition: "inside",
            insidetextorientation: "horizontal",
          },
        ]}
        layout={{
          width: width,
          height: height,
          margin: { t: 10, b: 20, r: 0, l: 0 },
          showlegend: false,
        }}
        config={{ displayModeBar: false }}
      />
    </div>
  );
}
