import axios from "axios";
import { firebaseURL, serviceOnOff, sleep } from "./serviceSetting";

export interface UserInfo {
  portfolioCount: {
    public: number;
    private: number;
    delete: number;
  };
  portfolioIdList: string[];
  propensity: {
    age: string;
    period: string;
    affordableRisk: string;
    annualReturn: string;
    financialWeight: string;
  };
}

export async function setPortfolioDisclosed(userId: string, portfolioIdList: string[]): Promise<UserInfo | undefined> {
  let result: UserInfo | undefined = undefined;
  await axios({
    method: "put",
    url: `${firebaseURL}/user/${userId}/portfolioIdList.json`,
    data: JSON.stringify({ ...portfolioIdList }),
  })
    .then(function (response) {
      result = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  // await axios({
  //   method: "get",
  //   url: `${firebaseURL}/user/kang_11.json`,
  // })
  //   .then((response) => {
  //     result = {
  //       portfolioCount: JSON.parse(response.data.portfolioCount),
  //       portfolioIdList: response.data.portfolioIdList || [],
  //       propensity: JSON.parse(response.data.propensity),
  //     };
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  return result;
}
