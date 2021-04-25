import React from "react";
import PortfolioInfoCard from "src/component/main/common/wiget/PortfolioInfoCard";

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

const PortfolioPerformance = ({ returns, risk, sharpe }: PortfolioPerformanceProp) => {
  returns = Math.floor(returns * 100);
  risk = Math.floor(risk * 100);
  sharpe = Math.floor(sharpe * 100);
  return (
    <>
      <div className="PortfolioPerformance" style={{ width: "532px" }}>
        <div style={{ width: "100%" }}>
          <h2>Performance</h2>
          <h3>Expected Annual Returns {returns}%</h3>
          <h3>Expected Annual Risk {risk}%</h3>
          <h3>Expected Annual sharpe {sharpe}</h3>
        </div>
        <PortfolioInfoCard volatility={returns} returns={risk} sharpe={sharpe} />
      </div>
    </>
  );
};

export default PortfolioPerformance;
