import _ from "lodash";
import StockData from "../component/common/addStock/stockList.json";

interface RRSW {
  returns: number;
  risk: number;
  sharpe: number;
  weights: {
    items: { code: string; name: string }[];
    values: number[];
  };
}

export function getRandomPortfolio(size: number): Promise<RRSW[] | undefined> {
  let result: any = {};

  let chars = "abcdefghijklmnopqrstuvwxyz1234567890";

  for (let i = 0; i < size; i++) {
    let testRatio: any = Array(10)
      .fill()
      .map(() => Math.round(Math.random() * 100));
    let test = _.sum(testRatio);

    let randomUserEmail = "";
    for (let ii = 0; ii < 10; ii++) {
      randomUserEmail += chars[Math.floor(Math.random() * chars.length)];
    }

    let portfolios: any = [];
    for (let j = 0; j < Math.round(Math.random() * 4) + 1; j++) {
      portfolios.push({
        title: `${randomUserEmail}_${j}`,
        portfolio: {
          returns: Math.round(Math.random() * 100),
          risk: Math.round(Math.random() * 100),
          sharpe: Number((Math.random() * 1.3).toFixed(1)),
          weights: {
            items: _.sampleSize(StockData.stockList, 10),
            values: testRatio.map((item) => Number((item / test).toFixed(2))),
          },
        },
      });
    }
    let keyId = `${randomUserEmail}`;
    randomUserEmail += "@gmail.com";

    result[keyId] = {
      user: randomUserEmail,
      portfolios: portfolios,
    };
  }

  return result;
}
