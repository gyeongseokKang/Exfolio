/* eslint-disable @typescript-eslint/no-unused-vars */
import PortfolioInfoCard from "src/component/main/common/wiget/PortfolioInfoCard";
import { RRSW } from "src/service/getEfficientFrontier";
import React from "react";

interface CurrentSelectedPFProp {
  selectedPF: RRSW;
}

const CurrentSelectedPF = ({ selectedPF }: CurrentSelectedPFProp) => {
  return (
    <>
      <div style={{ fontWeight: 500, fontStyle: "normal", fontSize: "1.5rem", fontFamily: "Noto Sans CJK KR" }}>선택된 포트폴리오</div>
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
