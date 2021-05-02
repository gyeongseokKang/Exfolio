import axios from "axios";

export interface PortfolioPerformance {
  enhance: RRSW;
  performance: RRSW;
}

interface RRSW {
  returns: number;
  risk: number;
  sharpe: number;
  weights: {
    items: string[];
    values: number[];
  };
}

interface stockInfo {
  name: string;
  code: string;
  weight: number;
}

export async function getPortfolioPerformance(stockList: stockInfo[]): Promise<PortfolioPerformance | undefined> {
  let result: PortfolioPerformance | undefined = undefined;
  console.log(stockList);
  // await axios({
  //   method: "post",
  //   url: "http://192.168.175.140:5000/discrete",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   data: JSON.stringify({
  //     codes: stockList.code,
  //     weights: stockList.weight,
  //     cash: cash,
  //   }),
  // })
  //   .then(function (response) {
  //     result = response.data;
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  result = testAmount;
  //await sleep(2000);
  return result;
}

export function sleep(m: number) {
  return new Promise((r) => setTimeout(r, m));
}

let testAmount = {
  enhance: {
    returns: 0.1507537819548937,
    risk: 0.12673778713994588,
    sharpe: 1.0316874304465589,
    weights: {
      items: ["SK하이닉스", "LG", "현대차", "삼성전자", "한국전력", "카카오", "엔씨소프트", "셀트리온"],
      values: [0.03824, 0.03326, 0.05083, 0.30736, 0.16573, 0.19633, 0.10676, 0.10148],
    },
  },
  performance: {
    returns: 0.12816186535910157,
    risk: 0.126696827046503,
    sharpe: 0.8537061888645535,
    weights: {
      items: ["LG", "현대차", "엔씨소프트", "카카오", "SK하이닉스", "한국전력", "삼성전자", "셀트리온"],
      values: [0.09686, 0.11502, 0.08973, 0.08755, 0.10606, 0.19005, 0.17356, 0.14116],
    },
  },
};
