/* eslint-disable @typescript-eslint/no-unused-vars */
import { Card } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import LoadingProgress from "src/component/common/widget/LoadingProgress";
import { FrontierData, getEfficientFrontier, RRSW } from "src/service/getEfficientFrontier";
import CurrentSelectedPF from "./component/CurrentSelectedPF";
import PortfolioTabLayout from "./component/PortfolioTabLayout";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { ETFData, getSimilarETF } from "src/service/getSimilarETF";
import SelectedPFSkeleton from "src/component/common/widget/SelectedPFSkeleton";
import { Holding } from "../../CreatePage";
import WithLoading from "src/component/common/hoc/WithLoading";
import { useContext } from "react";
import { SelectedPortFolioContext } from "src/contexts/SelectedPortFolioContext";

interface HoldingsWeight {
  name?: string;
  code?: string;
  weight: number;
}

interface SelectedPortfolioProp {
  holdings: Holding[];
  // selectedPF: RRSW | undefined;
  // onChangeSelectedPF: (PF: RRSW) => void;
}
const CurrentSelectedPFWithLoading = WithLoading()(CurrentSelectedPF);

const SelectedPortfolio = ({ holdings }: SelectedPortfolioProp) => {
  const [frontierData, setFrontierData] = useState<FrontierData>();
  const [frontierAIData, setFrontierAIData] = useState<FrontierData>();
  const [similarETFData, setSimilarETFData] = useState<ETFData[]>();
  const [loading, setLoading] = React.useState(false);
  const [holdingsWeights, setHoldingsWeights] = useState<HoldingsWeight[]>();
  const timer = React.useRef<number>();

  const { selectedPF, setSelectedPF } = useContext(SelectedPortFolioContext);
  const handleSelectedPF = (portfolio: RRSW) => {
    setLoading(true);
    console.log("handleSelectedPF", portfolio);
    setSelectedPF(portfolio);
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
          holdingsWeights?.find((item: any) => {
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
            ) : (
              <CurrentSelectedPFWithLoading loading={loading} selectedPF={selectedPF} />
            )}
          </Card>
        </div>
      </div>
    </>
  );
};

export default SelectedPortfolio;
