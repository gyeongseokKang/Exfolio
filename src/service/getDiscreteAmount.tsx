import axios from "axios";

export interface DiscreteAmount {
  amounts: DiscreteAmountItem[];
  remains: number;
}
export interface DiscreteAmountItem {
  code: string;
  name: string;
  price: number;
  amount: number;
}

interface StockList {
  code: string[];
  weight: number[];
}

export async function getDiscreteAmount(stockList: StockList, cash: number = 10000000): Promise<DiscreteAmount | undefined> {
  let result: DiscreteAmount | undefined = undefined;

  await axios({
    method: "post",
    url: "http://192.168.175.140:5000/discrete",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      codes: stockList.code,
      weights: stockList.weight,
      cash: cash,
    }),
  })
    .then(function (response) {
      result = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  //await sleep(2000);
  return result;
}

export function sleep(m: number) {
  return new Promise((r) => setTimeout(r, m));
}
