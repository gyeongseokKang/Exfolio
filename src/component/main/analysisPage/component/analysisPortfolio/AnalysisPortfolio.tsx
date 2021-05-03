/* eslint-disable @typescript-eslint/no-unused-vars */
import { Card } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import LoadingProgress from "src/component/main/common/wiget/LoadingProgress";
import { FrontierData, getEfficientFrontier, RRSW } from "src/service/getEfficientFrontier";
import CurrentSelectedPF from "./component/CurrentSelectedPF";
import PortfolioTabLayout from "./component/PortfolioTabLayout";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { ETFData, getSimilarETF } from "src/service/getSimilarETF";
import { getPortfolioPerformance, PortfolioPerformance } from "src/service/getPortfolioPerformance";
import { BackTestData, getBackTest } from "src/service/getBackTest";

interface stockInfo {
  name: string;
  code: string;
  weight: number;
}

interface AnalysisPortfolioProp {
  stockList: stockInfo[];
  selectedPF: RRSW;
  modifiedStockList: stockInfo[];
  onChangeSelectedPF: (PF: RRSW) => void;
}

const SelectedPortfolio = ({ stockList, selectedPF, modifiedStockList, onChangeSelectedPF }: AnalysisPortfolioProp) => {
  const [frontierData, setFrontierData] = useState<FrontierData>();
  const [frontierAIData, setFrontierAIData] = useState<FrontierData>();
  const [similarETFData, setSimilarETFData] = useState<ETFData[]>();
  const [portfolioPerformance, setPortfolioPerformance] = useState<PortfolioPerformance>();
  const [backTest, setBackTest] = useState<BackTestData>();
  const [loading, setLoading] = React.useState(false);
  const timer = React.useRef<number>();

  const handleSelectedPF = (portfolio: RRSW) => {
    setLoading(true);
    onChangeSelectedPF(portfolio);
    timer.current = window.setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  useEffect(() => {
    getEfficientFrontier(modifiedStockList, "semi_variance").then((res) => {
      setFrontierData(res);
    });
    getEfficientFrontier(modifiedStockList, "semi_absolute").then((res) => {
      setFrontierAIData(res);
    });
    getSimilarETF(modifiedStockList).then((res) => {
      setSimilarETFData(res);
    });
    getPortfolioPerformance(modifiedStockList).then((res) => {
      setPortfolioPerformance(res);
    });

    getBackTest({
      code: modifiedStockList.map((item) => {
        return item.code;
      }),
      weight: modifiedStockList.map((item) => {
        return item.weight;
      }),
    }).then((res) => {
      setBackTest(res);
    });
  }, [modifiedStockList, stockList]);

  return (
    <>
      <div className="SelectedPortfolio" style={{ display: "flex" }}>
        <div style={{ paddingRight: "20px" }}>
          <PortfolioTabLayout
            handleSelectedPF={handleSelectedPF}
            stockList={modifiedStockList}
            frontierData={frontierData}
            frontierAIData={frontierAIData}
            similarETFData={similarETFData}
            portfolioPerformance={portfolioPerformance}
          />
        </div>
        <DoubleArrowIcon style={{ fontSize: "5rem", margin: "auto", marginLeft: "10px", marginRight: "10px" }} />
        <div>
          <Card style={{ textAlign: "center", marginTop: "73px" }}>
            {!loading && backTest !== undefined ? (
              <CurrentSelectedPF selectedPF={selectedPF} stockList={stockList} previousBackTest={backTest} />
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
