import React from "react";
import IndexGaugeCharts from "src/component/main/common/wiget/chart/IndexGaugeCharts";

interface PortfolioPerformanceProp {
  returns: number;
  risk: number;
  sharpe: number;
}
// "max_sharpe": {
//     "returns": 0.17637758406160134,
//     "risk": 0.34744185214581924,
//     "sharpe": 0.45008274937462234,
//     "weights": {
//         "현대차": 0.52242,
//         "GS건설": 0.47758,
//         "이마트": 0.0
//     }
// }

const PortfolioPerformance = ({
  returns,
  risk,
  sharpe,
}: PortfolioPerformanceProp) => {
  return (
    <>
      <h2>Performance</h2>
      <IndexGaugeCharts volatility={returns} returns={risk} sharpe={sharpe} />
    </>
  );
};

export default PortfolioPerformance;
