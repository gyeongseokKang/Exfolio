import React from "react";
import PortfolioPerformance from "./component/PortfolioPerformance";
import PortfolioRatio from "./component/PortfolioRatio";

const SelectedPortfolio = () => {
  return (
    <>
      <div className="SelectedPortfolio" style={{ display: "flex" }}>
        <PortfolioPerformance />
        <PortfolioRatio />
      </div>
    </>
  );
};

export default SelectedPortfolio;
