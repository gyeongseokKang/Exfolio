/* eslint-disable @typescript-eslint/no-unused-vars */
import { Card, CircularProgress } from "@material-ui/core";
import React from "react";
import PortfolioPerformance from "./component/PortfolioPerformance";
import PortfolioTabLayout from "./component/PortfolioTabLayout";
import PortfolioWeight from "./component/PortfolioWeight";

const testValue = {
  frontier: [
    {
      returns: 0.051261243550055346,
      risk: 0.28900000025066935,
      sharpe: 0.10817039281294236,
      weights: {
        현대차: 0.36153,
        GS건설: 0.21322,
        이마트: 0.42526,
      },
    },
    {
      returns: 0.05958551547020851,
      risk: 0.29000000083810756,
      sharpe: 0.13650177708898392,
      weights: {
        현대차: 0.37597,
        GS건설: 0.22735,
        이마트: 0.39669,
      },
    },
  ],
  specific: {
    min_risk: {
      returns: 0.037191073827577144,
      risk: 0.28834593129772657,
      sharpe: 0.05961961644545211,
      weights: {
        name: ["현대차", "GS건설", "이마트"],
        value: [0.33712, 0.18933, 0.47355],
      },
    },
    max_returns: {
      returns: 0.1881954555724202,
      risk: 0.44396041383646057,
      sharpe: 0.37885237136114913,
      weights: {
        name: ["현대차", "GS건설", "이마트"],
        value: [0, 1, 0],
      },
    },
    max_sharpe: {
      returns: 0.17637758406160134,
      risk: 0.34744185214581924,
      sharpe: 0.45008274937462234,
      weights: {
        name: ["현대차", "GS건설", "이마트"],
        value: [0.52242, 0.47758, 0.0],
      },
    },
  },
};

interface stockInfo {
  name: string;
  code: string;
  weight: number;
}

interface SelectedPortfolioProp {
  stockList: stockInfo[];
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

const SelectedPortfolio = ({ stockList }: SelectedPortfolioProp) => {
  console.log(stockList);
  //여기서 axios로 연결
  const value = testValue.specific.max_sharpe;
  const [selectedPF, setSelectedPF] = React.useState<RRSW>(
    testValue.specific.max_sharpe
  );
  const [loading, setLoading] = React.useState(false);
  const timer = React.useRef<number>();

  const handleType = (type: string) => {
    setLoading(true);
    if (
      type === "max_sharpe" ||
      type === "max_returns" ||
      type === "min_risk"
    ) {
      if (testValue.specific[type] === undefined) return;
      setSelectedPF(testValue.specific[type]);
      timer.current = window.setTimeout(() => {
        setLoading(false);
      }, 750);
    }
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
                <PortfolioPerformance
                  returns={selectedPF.returns}
                  risk={selectedPF.risk}
                  sharpe={selectedPF.sharpe}
                />
                <PortfolioWeight
                  weights={selectedPF.weights}
                  stockList={stockList}
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
