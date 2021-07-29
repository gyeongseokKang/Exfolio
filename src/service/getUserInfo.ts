import axios from "axios";
import { serviceOnOff, sleep } from "./serviceSetting";

export interface BackTestData {
  days: string[];
  values: number[];
}

export async function getUserInfo(userId: string): Promise<BackTestData | undefined> {
  let result: any | undefined = undefined;
  if (serviceOnOff === false) {
    result = testUserInfo;
    await sleep(2000);
    return result;
  }

  //   await axios({
  //     method: "post",
  //     url: "http://192.168.175.140:5000/backtest",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     data: JSON.stringify({
  //       codes: stockList.code,
  //       weights: stockList.weight,
  //     }),
  //   })
  //     .then(function (response) {
  //       result = response.data;
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });

  return result;
}

const testUserInfo = {
  kang0_id: {
    PFcount: {
      public: 5,
      private: 5,
      delete: 5,
    },
    publicPF: [{}],
  },
};
