import axios from "axios";
import { getRandomPortfolio } from "./getRandomPortfolio";
import { firebaseServiceOnOff, firebaseURL, sleep } from "./serviceSetting";

export interface UserPortfolio {
  id: string;
  user: string;
  portfolios: {
    title: string;
    portfolio: RRSW_2;
  }[];
}

export interface RRSW_2 {
  returns: number;
  risk: number;
  sharpe: number;
  earningsRate: number;
  weights: {
    items: { code: string; name: string }[];
    values: number[];
  };
}

export async function getUserPortfolio(userId: string): Promise<UserPortfolio | undefined> {
  let result: UserPortfolio | undefined = undefined;

  if (firebaseServiceOnOff === false) {
    result = testValue;
    await sleep(2000);
    return result;
  }

  await axios({
    method: "get",
    url: `${firebaseURL}/portfolios/${userId}.json`,
  })
    .then(function (response) {
      if (response.data !== undefined) {
        result = response.data;
      }
    })
    .catch(function (error) {
      console.log(error);
    });

  return result;
}

const testValue: any = {
  "8r5jbbi4xn": {
    user: "8r5jbbi4xn@gmail.com",
    portfolios: [
      {
        title: "8r5jbbi4xn_0",
        portfolio: {
          returns: 8,
          risk: 56,
          sharpe: 0.8,
          weights: {
            items: [
              {
                code: "000480",
                name: "조선내화",
              },
              {
                code: "049470",
                name: "SGA",
              },
              {
                code: "079950",
                name: "인베니아",
              },
              {
                code: "091230",
                name: "TIGER 반도체",
              },
              {
                code: "271980",
                name: "제일약품",
              },
              {
                code: "277810",
                name: "레인보우로보틱스",
              },
              {
                code: "258610",
                name: "이더블유케이",
              },
              {
                code: "337150",
                name: "KODEX 200exTOP",
              },
              {
                code: "000180",
                name: "성창기업지주",
              },
              {
                code: "257370",
                name: "명성티엔에스",
              },
            ],
            values: [0.08, 0.13, 0.01, 0.1, 0.17, 0.13, 0.07, 0.11, 0.09, 0.13],
          },
        },
      },
      {
        title: "8r5jbbi4xn_1",
        portfolio: {
          returns: 17,
          risk: 31,
          sharpe: 0.7,
          weights: {
            items: [
              {
                code: "236340",
                name: "메디젠휴먼케어",
              },
              {
                code: "017480",
                name: "삼현철강",
              },
              {
                code: "302450",
                name: "KBSTAR 코스피",
              },
              {
                code: "258540",
                name: "스템랩",
              },
              {
                code: "001790",
                name: "대한제당",
              },
              {
                code: "000020",
                name: "동화약품",
              },
              {
                code: "053290",
                name: "NE능률",
              },
              {
                code: "110990",
                name: "디아이티",
              },
              {
                code: "000660",
                name: "SK하이닉스",
              },
              {
                code: "28513K",
                name: "SK케미칼우",
              },
            ],
            values: [0.08, 0.13, 0.01, 0.1, 0.17, 0.13, 0.07, 0.11, 0.09, 0.13],
          },
        },
      },
    ],
  },
};
