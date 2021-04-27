import React from "react";

interface ConfirmPortfolioProp {
  selectedPF: RRSW;
}

interface RRSW {
  returns: number;
  risk: number;
  sharpe: number;
  weights: {
    name: string[];
    value: number[];
  };
}

const ConfirmPortfolio = ({ selectedPF }: ConfirmPortfolioProp) => {
  return (
    <>
      <h2>Performance</h2>
    </>
  );
};

export default ConfirmPortfolio;
