/* eslint-disable @typescript-eslint/no-unused-vars */
import { Card } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import LoadingProgress from "src/component/main/common/wiget/LoadingProgress";
import { FrontierData, getEfficientFrontier, RRSW } from "src/service/getEfficientFrontier";
import CurrentSelectedPF from "./component/CurrentSelectedPF";
import PortfolioTabLayout from "./component/PortfolioTabLayout";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { ETFData, getSimilarETF } from "src/service/getSimilarETF";
import Skeleton from "@material-ui/lab/Skeleton";
import SelectedPFSkeleton from "src/component/main/common/wiget/SelectedPFSkeleton";
import { Holding } from "../../CreatePage";

interface HoldingsWeight {
  name?: string;
  code?: string;
  weight: number;
}

interface SelectedPortfolioProp {
  holdings: Holding[];
  selectedPF: RRSW | undefined;
  onChangeSelectedPF: (PF: RRSW) => void;
}

const SelectedPortfolio = ({ holdings, selectedPF, onChangeSelectedPF }: SelectedPortfolioProp) => {
  const [frontierData, setFrontierData] = useState<FrontierData>();
  const [frontierAIData, setFrontierAIData] = useState<FrontierData>();
  const [similarETFData, setSimilarETFData] = useState<ETFData[]>();
  const [loading, setLoading] = React.useState(false);
  const [holdingsWeights, setHoldingsWeights] = useState<HoldingsWeight[]>();
  const timer = React.useRef<number>();

  const handleSelectedPF = (portfolio: RRSW) => {
    setLoading(true);
    onChangeSelectedPF(portfolio);
    timer.current = window.setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  useEffect(() => {
    let targetHoldings = holdings.map((holding) => {
      return {
        name: holding.name,
        code: holding.code,
        weight:
          holdingsWeights?.find((item) => {
            return item.code === holding.code || item.name === holding.name;
          })?.weight || 0,
      };
    });

    getEfficientFrontier(targetHoldings, "semi_variance").then((res) => {
      setFrontierData(res);
    });
    getEfficientFrontier(targetHoldings, "semi_absolute").then((res) => {
      setFrontierAIData(res);
    });
    getSimilarETF(targetHoldings).then((res) => {
      setSimilarETFData(res);
    });
  }, [holdings, holdingsWeights]);

  return (
    <>
      <div className="SelectedPortfolio" style={{ display: "flex" }}>
        <div style={{ paddingRight: "20px" }}>
          <PortfolioTabLayout
            handleSelectedPF={handleSelectedPF}
            holdings={holdings}
            frontierData={frontierData}
            frontierAIData={frontierAIData}
            similarETFData={similarETFData}
          />
        </div>
        <DoubleArrowIcon style={{ fontSize: "5rem", margin: "auto", marginLeft: "10px", marginRight: "10px" }} />
        <div>
          <Card style={{ width: "17.5rem", height: "28rem", textAlign: "center", marginTop: "73px" }}>
            {selectedPF === undefined ? (
              <SelectedPFSkeleton />
            ) : !loading ? (
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
                <LoadingProgress height={"30rem"} description={"포트폴리오 적용중..."} />
              </Card>
            )}
          </Card>
        </div>
      </div>
    </>
  );
};

export default SelectedPortfolio;
