/* eslint-disable @typescript-eslint/no-unused-vars */
import { Card, CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import LoadingProgress from "src/component/main/common/wiget/LoadingProgress";
import PortfolioInfoCard from "src/component/main/common/wiget/PortfolioInfoCard";
import { FrontierData, getEfficientFrontier, RRSW } from "src/service/getEfficientFrontier";
import CurrentSelectedPF from "./component/CurrentSelectedPF";
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

const SelectedPortfolio = ({ stockList, selectedPF, onChangeSelectedPF }: SelectedPortfolioProp) => {
  const [frontierData, setFrontierData] = useState<FrontierData>();
  const [loading, setLoading] = React.useState(false);
  const timer = React.useRef<number>();

  const handleType = (portfolio: RRSW) => {
    setLoading(true);
    onChangeSelectedPF(portfolio);
    timer.current = window.setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  useEffect(() => {
    console.log(stockList);
    getEfficientFrontier(stockList).then((res) => {
      setFrontierData(res);
    });
  }, [stockList]);

  return (
    <>
      <div className="SelectedPortfolio" style={{ display: "flex" }}>
        <div style={{ paddingRight: "20px" }}>
          <PortfolioTabLayout handleType={handleType} frontierData={frontierData} />
        </div>
        <div>
          <Card style={{ textAlign: "center" }}>
            {!loading ? (
              <CurrentSelectedPF selectedPF={selectedPF} />
            ) : (
              <Card
                style={{
                  textAlign: "center",
                  width: "300px",
                  height: "400px",
                }}
              >
                <LoadingProgress height={350} description={"포트폴리오 적용중..."} />
              </Card>
            )}
          </Card>
        </div>
      </div>
    </>
  );
};

export default SelectedPortfolio;
