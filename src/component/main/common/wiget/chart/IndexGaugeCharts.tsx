import Plot from "react-plotly.js";

const COLOR_CONFIG = {
  volatility: {
    good: {
      range: [0, 10],
      color: "green",
    },
    medium: {
      range: [10, 20],
      color: "orange",
    },
    bad: {
      range: [20, 100],
      color: "red",
    },
  },
  returns: {
    good: {
      range: [20, 100],
      color: "green",
    },
    medium: {
      range: [10, 20],
      color: "orange",
    },
    bad: {
      range: [0, 10],
      color: "red",
    },
  },
  sharp: {
    good: {
      range: [1.2, 1000],
      color: "green",
    },
    medium: {
      range: [0.7, 1.2],
      color: "orange",
    },
    bad: {
      range: [0, 0.7],
      color: "red",
    },
  },
  default: {
    color: "gray",
  },
};

function createGaugeConfig(value: number, position: number, type: "volatility" | "returns" | "sharp", fontSize: number): Plotly.Data {
  let color = undefined;
  if (COLOR_CONFIG[type]["good"]["range"][0] <= value && value < COLOR_CONFIG[type]["good"]["range"][1]) {
    color = COLOR_CONFIG[type]["good"]["color"];
  } else if (COLOR_CONFIG[type]["medium"]["range"][0] <= value && value < COLOR_CONFIG[type]["medium"]["range"][1]) {
    color = COLOR_CONFIG[type]["medium"]["color"];
  } else if (COLOR_CONFIG[type]["bad"]["range"][0] <= value && value < COLOR_CONFIG[type]["bad"]["range"][1]) {
    color = COLOR_CONFIG[type]["bad"]["color"];
  } else {
    color = COLOR_CONFIG["default"]["color"];
  }

  return {
    type: "indicator",
    mode: "gauge+number",
    domain: { row: 0, column: position },
    value: value,
    gauge: {
      axis: { range: type === "sharp" ? [0, 2] : [0, 60], visible: false },
      bar: { color: color },
      bgcolor: "white",
      borderwidth: 0,
      bordercolor: "gray",
    },
    number: {
      suffix: type === "sharp" ? "" : "%",
      font: {
        size: fontSize,
        color: "gray",
      },
    },
  } as Plotly.Data;
}

export default function IndexGaugeCharts({
  volatility,
  returns,
  sharp,
  height = 200,
  width = 400,
  fontSize = 18,
}: {
  volatility: number;
  returns: number;
  sharp: number;
  height?: number;
  width?: number;
  fontSize?: number;
}) {
  return (
    <Plot
      data={[
        createGaugeConfig(volatility, 0, "volatility", fontSize),
        createGaugeConfig(returns, 1, "returns", fontSize),
        createGaugeConfig(sharp, 2, "sharp", fontSize),
      ]}
      layout={{
        height: height,
        width: width,
        showlegend: false,
        grid: { rows: 1, columns: 3 },
        margin: { t: 0, b: 0, l: 0, r: 0 },
      }}
      config={{ displayModeBar: false }}
    />
  );
}
