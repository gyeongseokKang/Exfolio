import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IndexGaugeCharts from "./chart/IndexGaugeCharts";
import StockWeightPieChart from "./chart/StockWeightPieChart";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { textAlign: "center", boxShadow: "2px 2px 4px 1px rgba(0, 0, 0, 0.2)" },
    CardContent: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);
interface PortfolioInfoCardProp {
  values: Array<number | string>;
  labels: Plotly.Datum[];
  title: string;
  volatility: number;
  returns: number;
  sharpe: number;
  oridentation?: "v" | "h";
}

export default function PortfolioInfoCard({
  labels,
  values,
  title,
  volatility,
  returns,
  sharpe,
  oridentation,
}: PortfolioInfoCardProp) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent className={classes.CardContent} style={{ flexDirection: oridentation === "v" ? "row" : "column" }}>
        <StockWeightPieChart values={values} labels={labels} title={title}></StockWeightPieChart>
        <IndexGaugeCharts
          sharpe={sharpe}
          returns={returns}
          volatility={volatility}
          oridentation={oridentation}
        ></IndexGaugeCharts>
      </CardContent>
    </Card>
  );
}
