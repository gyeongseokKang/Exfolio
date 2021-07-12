/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import PortfolioInfoCard from "src/component/main/common/wiget/PortfolioInfoCard";
import { RRSW } from "src/service/getEfficientFrontier";

interface CurrentSelectedPFProp {
  selectedPF: RRSW;
}

const CurrentSelectedPF = ({ selectedPF }: CurrentSelectedPFProp) => {
  return (
    <>
      <div style={{ fontSize: "1.5rem" }}>선택된 포트폴리오</div>
      <PortfolioInfoCard
        values={selectedPF.weights.values}
        labels={selectedPF.weights.items}
        title={""}
        volatility={selectedPF.risk}
        returns={selectedPF.returns}
        sharpe={selectedPF.sharpe}
      />
    </>
  );
};

export default CurrentSelectedPF;
