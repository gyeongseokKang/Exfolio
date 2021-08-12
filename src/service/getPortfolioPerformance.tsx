import axios from "axios";
import { serviceOnOff, sleep } from "./serviceSetting";
import _ from "lodash";

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

export async function getPortfolioPerformance(
  stockList: stockInfo[],
  returns?: number,
  risk?: number,
  sharpe?: number
): Promise<PortfolioPerformance | undefined> {
  let result: PortfolioPerformance | undefined = undefined;

  if (serviceOnOff === false) {
    result = {
      enhance: {
        returns: returns ? returns + 0.01 : 0.02,
        risk: risk ? risk - 0.05 : 0.2,
        sharpe: sharpe ? sharpe + 0.05 : 0.05,

        weights: {
          items: _.shuffle(stockList.map((item) => item.name)),
          values: _.shuffle(stockList.map((item) => item.weight)),
        },
      },
      performance: {
        returns: returns || 0.01,
        risk: risk || 0.25,
        sharpe: sharpe || 0.1,
        weights: {
          items: stockList.map((item) => item.name),
          values: stockList.map((item) => item.weight),
        },
      },
    };
    await sleep(2000);
    return result;
  }

  await axios({
    method: "post",
    url: "http://192.168.175.140:5000/portfolio",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      codes: stockList.map((item) => item.code),
      weights: stockList.map((item) => item.weight),
    }),
  })
    .then(function (response) {
      result = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  return result;
}
