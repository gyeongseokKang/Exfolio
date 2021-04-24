import React from "react";
import EfficientFrontierChart from "./component/EfficientFrontierChart";
import EfficientFrontierDetail from "./component/EfficientFrontierDetail";

const EfficientFrontier = () => {
  return (
    <>
      <div className="EfficientFrontier" style={{ display: "inline-flex" }}>
        <EfficientFrontierChart />
        <EfficientFrontierDetail />
      </div>
    </>
  );
};

export default EfficientFrontier;
