import React, { useEffect, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { RRSW } from "src/service/getEfficientFrontier";
import Plot from "react-plotly.js";
import { getBackTest } from "src/service/getBackTest";

const useStyles = makeStyles((theme: Theme) => ({
  root: { display: "flex", justifyContent: "space-around", margin: "1rem" },
}));

interface BenchmarkChartProp {
  weights: undefined | RRSW["weights"];
}

const BenchmarkChart = ({ weights }: BenchmarkChartProp) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {weights && (
        <div>
          <div>상위 10개 주식 수익율</div>
          <Top10StockLineChart items={weights.items} />
        </div>
      )}
      {weights && (
        <div>
          <div>종합 수익율</div>
          <TotalStockLineChart weights={weights} />
        </div>
      )}
    </div>
  );
};

interface Top10StockLineChartProp {
  items: string[];
}
const Top10StockLineChart = ({ items }: Top10StockLineChartProp) => {
  const [benchmarkData, setBenchmarkData] = useState<{ days: string[]; values: number[] }[]>();
  useEffect(() => {
    async function getBenchmarkData() {
      const result = await Promise.all(
        items.slice(0, 10).map((item) => {
          return getBackTest({ code: [item], weight: [1] });
        })
      );
      setBenchmarkData(result as { days: string[]; values: number[] }[]);
    }
    getBenchmarkData();
  }, [items]);

  return (
    <Plot
      data={
        benchmarkData?.map((data, index) => {
          return {
            x: data.days,
            y: data.values.map((item) => Math.round(item * 1000)),
            mode: "lines",
            line: { shape: "spline" },
            name: items[index],
          };
        }) as any[]
      }
      layout={{
        margin: { t: 0, b: 30, r: 50, l: 0 },
        width: 300,
        height: 200,
        showlegend: false,
        xaxis: {
          tickformat: "%Y %b %d",
        },
        yaxis: {
          side: "right",
        },
      }}
      config={{ displayModeBar: false }}
    />
  );
};

interface TotalStockLineChartProp {
  weights: RRSW["weights"];
}
const TotalStockLineChart = ({ weights }: TotalStockLineChartProp) => {
  const [benchmarkData, setBenchmarkData] = useState<{ days: string[]; values: number[] }>();
  useEffect(() => {
    getBackTest({
      code: weights.items,
      weight: weights.values,
    }).then((res) => {
      setBenchmarkData(res);
    });
  }, [weights]);

  return (
    <>
      {benchmarkData && (
        <Plot
          data={[
            {
              x: benchmarkData.days,
              y: benchmarkData.values.map((item) => Math.round(item * 1000)),
              mode: "lines",
              line: { shape: "spline" },
              name: "Total",
            },
          ]}
          layout={{
            margin: { t: 0, b: 30, r: 50, l: 0 },
            width: 300,
            height: 200,
            showlegend: false,
            xaxis: {
              tickformat: "%Y %b %d",
            },
            yaxis: {
              side: "right",
            },
          }}
          config={{ displayModeBar: false }}
        />
      )}
    </>
  );
};
export default BenchmarkChart;
