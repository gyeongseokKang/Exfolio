import React from "react";
import PortfolioInfoCard from "src/component/main/common/wiget/PortfolioInfoCard";

const PortfolioPerformance = () => {
  return (
    <>
      <div className="PortfolioPerformance" style={{ width: "532px" }}>
        <div style={{ width: "100%" }}>
          <h2>Performance</h2>
          <h3>Expected Annual Returns 25%</h3>
          <h3>Expected Annual Risk 27%</h3>
          <h3>Expected Annual sharpe 1.2</h3>
        </div>
        <PortfolioInfoCard volatility={25} returns={27} sharpe={1.2} />
      </div>
    </>
  );
};

export default PortfolioPerformance;
