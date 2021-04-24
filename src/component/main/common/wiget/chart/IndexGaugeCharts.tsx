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
  sharpe: {
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

const TITLE_LIST = {
  volatility: "변동성",
  returns: "기대 수입",
  sharpe: "효율성",
};

function createGaugeConfig(value: number, position: number, type: "volatility" | "returns" | "sharpe"): Plotly.Data {
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
    title: { text: TITLE_LIST[type], font: { size: 16 } },
    domain: { row: 0, column: position },
    value: value,

    gauge: {
      axis: { range: type === "sharpe" ? [0, 2] : [0, 60], visible: false },
      bar: { color: color },
      bgcolor: "white",
      borderwidth: 0,
      bordercolor: "gray",
    },
    number: {
      suffix: type === "sharpe" ? "" : "%",
      font: {
        size: 18,
        color: "gray",
      },
    },
  } as Plotly.Data;
}

export default function IndexGaugeCharts({
  volatility,
  returns,
  sharpe,
  height = 150,
  width = 400,
}: {
  volatility: number;
  returns: number;
  sharpe: number;
  height?: number;
  width?: number;
}) {
  return (
    <Plot
      data={[
        createGaugeConfig(volatility, 0, "volatility"),
        createGaugeConfig(returns, 1, "returns"),
        createGaugeConfig(sharpe, 2, "sharpe"),
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
