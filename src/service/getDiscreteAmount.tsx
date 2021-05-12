import axios from "axios";
import { serviceOnOff, sleep } from "./serviceSetting";

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
  if (serviceOnOff === false) {
    result = testAmount;
    await sleep(2000);
    return result;
  }

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

  return result;
}

let testAmount = {
  amounts: [
    {
      amount: 8,
      code: "003550",
      name: "LG",
      price: 128000.0,
    },
    {
      amount: 9,
      code: "005380",
      name: "현대차",
      price: 126500.0,
    },
    {
      amount: 4,
      code: "036570",
      name: "엔씨소프트",
      price: 212000.0,
    },
    {
      amount: 11,
      code: "035720",
      name: "카카오",
      price: 81500.0,
    },
    {
      amount: 45,
      code: "000660",
      name: "SK하이닉스",
      price: 23650.0,
    },
    {
      amount: 17,
      code: "015760",
      name: "한국전력",
      price: 113500.0,
    },
    {
      amount: 2,
      code: "005930",
      name: "삼성전자",
      price: 830000.0,
    },
    {
      amount: 5,
      code: "068270",
      name: "셀트리온",
      price: 266000.0,
    },
  ],
  remains: 109250.0,
};
