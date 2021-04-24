import Plot from "react-plotly.js";

export default function StockWeightPieChart({
  labels,
  values,
  title,
  width = 500,
  height = 500,
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
        },
      ]}
      layout={{
        width: width,
        height: height,
        showlegend: false,
        title: title,
      }}
      config={{ displayModeBar: false }}
    />
  );
}
