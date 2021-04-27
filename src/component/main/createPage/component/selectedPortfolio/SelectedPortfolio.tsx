/* eslint-disable @typescript-eslint/no-unused-vars */
import { Card, CircularProgress } from "@material-ui/core";
import React from "react";
import PortfolioInfoCard from "src/component/main/common/wiget/PortfolioInfoCard";
import PortfolioTabLayout from "./component/PortfolioTabLayout";

interface stockInfo {
  name: string;
  code: string;
  weight: number;
}

interface SelectedPortfolioProp {
  stockList: stockInfo[];
  selectedPF: RRSW;
  onChangeSelectedPF: (PF: RRSW) => void;
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

const SelectedPortfolio = ({ stockList, selectedPF, onChangeSelectedPF }: SelectedPortfolioProp) => {
  console.log(stockList);
  //여기서 axios로 연결

  const [loading, setLoading] = React.useState(false);
  const timer = React.useRef<number>();

  const handleType = (portfolio: RRSW) => {
    setLoading(true);
    onChangeSelectedPF(portfolio);
    timer.current = window.setTimeout(() => {
      setLoading(false);
    }, 750);
  };

  return (
    <>
      <div className="SelectedPortfolio" style={{ display: "flex" }}>
        <div style={{ paddingRight: "20px" }}>
          <PortfolioTabLayout handleType={handleType} />
        </div>
        <div>
          <Card style={{ textAlign: "center" }}>
            {!loading ? (
              <>
                <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>Selected PF</div>
                <PortfolioInfoCard
                  values={selectedPF.weights.value}
                  labels={selectedPF.weights.name}
                  title={""}
                  volatility={selectedPF.risk}
                  returns={selectedPF.returns}
                  sharpe={selectedPF.sharpe}
                />
              </>
            ) : (
              <Card
                style={{
                  textAlign: "center",
                  width: "300px",
                  height: "400px",
                }}
              >
                <CircularProgress size={70} style={{ marginTop: "165px" }} />
              </Card>
            )}
          </Card>
        </div>
      </div>
    </>
  );
};

export default SelectedPortfolio;
