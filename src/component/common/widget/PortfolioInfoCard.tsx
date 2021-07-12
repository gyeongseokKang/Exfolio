import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IndexGaugeCharts from "./chart/IndexGaugeCharts";
import StockWeightPieChart from "./chart/StockWeightPieChart";

export default function PortfolioInfoCard({
  labels,
  values,
  title,
  volatility,
  returns,
  sharpe,
}: {
  values: Array<number | string>;
  labels: Plotly.Datum[];
  title: string;
  volatility: number;
  returns: number;
  sharpe: number;
}) {
  return (
    <Card style={{ width: 280, textAlign: "center" }}>
      <CardContent>
        <StockWeightPieChart values={values} labels={labels} title={title}></StockWeightPieChart>
        <IndexGaugeCharts sharpe={sharpe} returns={returns} volatility={volatility}></IndexGaugeCharts>
      </CardContent>
    </Card>
  );
}
