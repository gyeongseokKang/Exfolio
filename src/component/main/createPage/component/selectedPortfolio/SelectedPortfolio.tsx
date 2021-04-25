import React from "react";
import PortfolioPerformance from "./component/PortfolioPerformance";
import PortfolioRatio from "./component/PortfolioRatio";

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
        현대차: 0.33712,
        GS건설: 0.18933,
        이마트: 0.47355,
      },
    },
    max_returns: {
      returns: 0.1881954555724202,
      risk: 0.44396041383646057,
      sharpe: 0.37885237136114913,
      weights: {
        현대차: 0.0,
        GS건설: 1.0,
        이마트: 0.0,
      },
    },
    max_sharpe: {
      returns: 0.17637758406160134,
      risk: 0.34744185214581924,
      sharpe: 0.45008274937462234,
      weights: {
        삼성전자: 0.33712,
        GS건설: 0.18933,
        이마트: 0.47355,
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

const SelectedPortfolio = ({ stockList }: SelectedPortfolioProp) => {
  const value = testValue.specific.max_sharpe;
  return (
    <>
      <div className="SelectedPortfolio" style={{ display: "flex" }}>
        <PortfolioPerformance returns={value.returns} risk={value.risk} sharpe={value.sharpe} />
        <PortfolioRatio weights={value.weights} stockList={stockList} />
      </div>
    </>
  );
};

export default SelectedPortfolio;
