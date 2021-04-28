/* eslint-disable @typescript-eslint/no-unused-vars */
import PortfolioInfoCard from "src/component/main/common/wiget/PortfolioInfoCard";
import { RRSW } from "src/service/getEfficientFrontier";

interface CurrentSelectedPFProp {
  selectedPF: RRSW;
}

const CurrentSelectedPF = ({ selectedPF }: CurrentSelectedPFProp) => {
  return (
    <>
      <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>Selected PF</div>
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
