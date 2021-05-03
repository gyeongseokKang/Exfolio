/* eslint-disable @typescript-eslint/no-unused-vars */
import { Card } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import LoadingProgress from "src/component/main/common/wiget/LoadingProgress";
import { FrontierData, getEfficientFrontier, RRSW } from "src/service/getEfficientFrontier";
import CurrentSelectedPF from "./component/CurrentSelectedPF";
import PortfolioTabLayout from "./component/PortfolioTabLayout";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { ETFData, getSimilarETF } from "src/service/getSimilarETF";
import { convertToObject } from "typescript";

interface stockInfo {
  name: string;
  code: string;
  weight: number;
}

interface SelectedPortfolioProp {
  stockList: stockInfo[];
  selectedPF: RRSW | undefined;
  onChangeSelectedPF: (PF: RRSW) => void;
}

const SelectedPortfolio = ({ stockList, selectedPF, onChangeSelectedPF }: SelectedPortfolioProp) => {
  const [frontierData, setFrontierData] = useState<FrontierData>();
  const [frontierAIData, setFrontierAIData] = useState<FrontierData>();
  const [similarETFData, setSimilarETFData] = useState<ETFData[]>();
  const [loading, setLoading] = React.useState(false);
  const timer = React.useRef<number>();

  console.log(stockList);
  const handleSelectedPF = (portfolio: RRSW) => {
    setLoading(true);
    onChangeSelectedPF(portfolio);
    timer.current = window.setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  useEffect(() => {
    getEfficientFrontier(stockList, "semi_variance").then((res) => {
      setFrontierData(res);
    });
    getEfficientFrontier(stockList, "semi_absolute").then((res) => {
      setFrontierAIData(res);
    });
    getSimilarETF(stockList).then((res) => {
      setSimilarETFData(res);
    });
  }, [stockList]);

  return (
    <>
      <div className="SelectedPortfolio" style={{ display: "flex" }}>
        <div style={{ paddingRight: "20px" }}>
          <PortfolioTabLayout
            handleSelectedPF={handleSelectedPF}
            stockList={stockList}
            frontierData={frontierData}
            frontierAIData={frontierAIData}
            similarETFData={similarETFData}
          />
        </div>
        <DoubleArrowIcon style={{ fontSize: "5rem", margin: "auto", marginLeft: "10px", marginRight: "10px" }} />
        <div>
          <Card style={{ textAlign: "center", marginTop: "73px" }}>
            {!loading && selectedPF !== undefined ? (
              <CurrentSelectedPF selectedPF={selectedPF} />
            ) : (
              <Card
                style={{
                  textAlign: "center",
                  backgroundColor: "#F5F5F5",
                  width: "280px",
                  height: "450px",
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
