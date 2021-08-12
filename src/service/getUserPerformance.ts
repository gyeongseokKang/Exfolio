import axios from "axios";
import { getRandomPortfolio } from "./getRandomPortfolio";
import { firebaseServiceOnOff, firebaseURL, sleep } from "./serviceSetting";

export interface UserPerformance {
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

export async function getUserPerformance(): Promise<UserPerformance[] | undefined> {
  let result: UserPerformance[] | undefined = undefined;

  if (firebaseServiceOnOff === false) {
    result = [];
    const temp = Object.entries(testValue);
    temp.map((item: [string, any]) => {
      result?.push({
        id: item[0],
        user: item[1].user,
        portfolios: item[1].portfolios,
      });
    });
    await sleep(2000);
    return result;
  }

  await axios({
    method: "get",
    url: `${firebaseURL}/portfolios.json`,
  })
    .then(function (response) {
      result = [];
      if (response.data !== undefined) {
        const temp = Object.entries(response.data);
        temp.map((item: [string, any]) => {
          result?.push({
            id: item[0],
            user: item[1].user,
            portfolios: item[1].portfolios,
          });
        });
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
  x9yxzitp60: {
    user: "x9yxzitp60@gmail.com",
    portfolios: [
      {
        title: "x9yxzitp60_0",
        portfolio: {
          returns: 81,
          risk: 75,
          sharpe: 0.8,
          weights: {
            items: [
              {
                code: "139230",
                name: "TIGER 200 중공업",
              },
              {
                code: "327970",
                name: "케어룸의료산업",
              },
              {
                code: "028100",
                name: "동아지질",
              },
              {
                code: "091990",
                name: "셀트리온헬스케어",
              },
              {
                code: "000215",
                name: "DL우",
              },
              {
                code: "045520",
                name: "크린앤사이언스",
              },
              {
                code: "060980",
                name: "한라홀딩스",
              },
              {
                code: "013030",
                name: "하이록코리아",
              },
              {
                code: "001065",
                name: "JW중외제약우",
              },
              {
                code: "089470",
                name: "HDC현대EP",
              },
            ],
            values: [0.07, 0.1, 0.06, 0.06, 0.13, 0.13, 0.11, 0.09, 0.13, 0.12],
          },
        },
      },
      {
        title: "x9yxzitp60_1",
        portfolio: {
          returns: 32,
          risk: 20,
          sharpe: 0.2,
          weights: {
            items: [
              {
                code: "302170",
                name: "TIGER 국채선물3년인버스",
              },
              {
                code: "004890",
                name: "동일산업",
              },
              {
                code: "044180",
                name: "KD",
              },
              {
                code: "005960",
                name: "동부건설",
              },
              {
                code: "291230",
                name: "삼성스팩2호",
              },
              {
                code: "075580",
                name: "세진중공업",
              },
              {
                code: "084990",
                name: "헬릭스미스",
              },
              {
                code: "221800",
                name: "유투바이오",
              },
              {
                code: "053060",
                name: "세동",
              },
              {
                code: "329020",
                name: "오션스톤",
              },
            ],
            values: [0.07, 0.1, 0.06, 0.06, 0.13, 0.13, 0.11, 0.09, 0.13, 0.12],
          },
        },
      },
    ],
  },
  hua6tlp5ek: {
    user: "hua6tlp5ek@gmail.com",
    portfolios: [
      {
        title: "hua6tlp5ek_0",
        portfolio: {
          returns: 77,
          risk: 15,
          sharpe: 1,
          weights: {
            items: [
              {
                code: "302430",
                name: "이노메트리",
              },
              {
                code: "081150",
                name: "티플랙스",
              },
              {
                code: "094800",
                name: "맵스리얼티1",
              },
              {
                code: "065650",
                name: "메디프론",
              },
              {
                code: "279530",
                name: "KODEX 고배당",
              },
              {
                code: "375760",
                name: "HANARO 탄소효율그린뉴딜",
              },
              {
                code: "042600",
                name: "새로닉스",
              },
              {
                code: "032500",
                name: "케이엠더블유",
              },
              {
                code: "317400",
                name: "자이에스앤디",
              },
              {
                code: "123840",
                name: "한일진공",
              },
            ],
            values: [0.11, 0.18, 0.17, 0.03, 0.01, 0.11, 0.18, 0.09, 0.05, 0.06],
          },
        },
      },
      {
        title: "hua6tlp5ek_1",
        portfolio: {
          returns: 86,
          risk: 27,
          sharpe: 0.6,
          weights: {
            items: [
              {
                code: "005935",
                name: "삼성전자우",
              },
              {
                code: "056730",
                name: "포스링크",
              },
              {
                code: "253240",
                name: "KOSEF 200선물인버스",
              },
              {
                code: "019170",
                name: "신풍제약",
              },
              {
                code: "033110",
                name: "코너스톤네트웍스",
              },
              {
                code: "097230",
                name: "한진중공업",
              },
              {
                code: "246690",
                name: "TS인베스트먼트",
              },
              {
                code: "006260",
                name: "LS",
              },
              {
                code: "006570",
                name: "대림통상",
              },
              {
                code: "212310",
                name: "휴벡셀",
              },
            ],
            values: [0.11, 0.18, 0.17, 0.03, 0.01, 0.11, 0.18, 0.09, 0.05, 0.06],
          },
        },
      },
    ],
  },
  jb8lysdcia: {
    user: "jb8lysdcia@gmail.com",
    portfolios: [
      {
        title: "jb8lysdcia_0",
        portfolio: {
          returns: 83,
          risk: 10,
          sharpe: 0.7,
          weights: {
            items: [
              {
                code: "041020",
                name: "폴라리스오피스",
              },
              {
                code: "157490",
                name: "TIGER 소프트웨어",
              },
              {
                code: "102960",
                name: "KODEX 기계장비",
              },
              {
                code: "267850",
                name: "아시아나IDT",
              },
              {
                code: "327970",
                name: "케어룸의료산업",
              },
              {
                code: "006120",
                name: "SK디스커버리",
              },
              {
                code: "300720",
                name: "한일시멘트",
              },
              {
                code: "307750",
                name: "국전약품",
              },
              {
                code: "267450",
                name: "KBSTAR 미국장기국채선물인버스(H)",
              },
              {
                code: "009540",
                name: "한국조선해양",
              },
            ],
            values: [0.07, 0.15, 0.07, 0.16, 0.09, 0.13, 0.06, 0.02, 0.09, 0.15],
          },
        },
      },
      {
        title: "jb8lysdcia_1",
        portfolio: {
          returns: 16,
          risk: 71,
          sharpe: 0.3,
          weights: {
            items: [
              {
                code: "054300",
                name: "팬스타엔터프라이즈",
              },
              {
                code: "011080",
                name: "형지I&C",
              },
              {
                code: "119500",
                name: "포메탈",
              },
              {
                code: "267250",
                name: "현대중공업지주",
              },
              {
                code: "021080",
                name: "에이티넘인베스트",
              },
              {
                code: "317850",
                name: "대모",
              },
              {
                code: "322510",
                name: "제이엘케이",
              },
              {
                code: "032190",
                name: "다우데이타",
              },
              {
                code: "102940",
                name: "코오롱생명과학",
              },
              {
                code: "042940",
                name: "상지카일룸",
              },
            ],
            values: [0.07, 0.15, 0.07, 0.16, 0.09, 0.13, 0.06, 0.02, 0.09, 0.15],
          },
        },
      },
      {
        title: "jb8lysdcia_2",
        portfolio: {
          returns: 21,
          risk: 33,
          sharpe: 1.2,
          weights: {
            items: [
              {
                code: "025890",
                name: "한국주강",
              },
              {
                code: "073190",
                name: "듀오백",
              },
              {
                code: "039340",
                name: "한국경제TV",
              },
              {
                code: "000670",
                name: "영풍",
              },
              {
                code: "005945",
                name: "NH투자증권우",
              },
              {
                code: "284620",
                name: "카이노스메드",
              },
              {
                code: "258830",
                name: "세종메디칼",
              },
              {
                code: "009275",
                name: "신원우",
              },
              {
                code: "208710",
                name: "바이오로그디바이스",
              },
              {
                code: "295040",
                name: "SMART 200TR",
              },
            ],
            values: [0.07, 0.15, 0.07, 0.16, 0.09, 0.13, 0.06, 0.02, 0.09, 0.15],
          },
        },
      },
    ],
  },
  clrl7kxfhl: {
    user: "clrl7kxfhl@gmail.com",
    portfolios: [
      {
        title: "clrl7kxfhl_0",
        portfolio: {
          returns: 89,
          risk: 52,
          sharpe: 0.5,
          weights: {
            items: [
              {
                code: "187270",
                name: "신화콘텍",
              },
              {
                code: "004410",
                name: "서울식품",
              },
              {
                code: "048530",
                name: "인트론바이오",
              },
              {
                code: "002795",
                name: "아모레G우",
              },
              {
                code: "138070",
                name: "신진에스엠",
              },
              {
                code: "023810",
                name: "인팩",
              },
              {
                code: "016740",
                name: "두올",
              },
              {
                code: "060570",
                name: "드림어스컴퍼니",
              },
              {
                code: "003200",
                name: "일신방직",
              },
              {
                code: "009835",
                name: "한화솔루션우",
              },
            ],
            values: [0.06, 0.16, 0.16, 0.07, 0.17, 0.03, 0.13, 0.01, 0.16, 0.05],
          },
        },
      },
      {
        title: "clrl7kxfhl_1",
        portfolio: {
          returns: 26,
          risk: 65,
          sharpe: 0.7,
          weights: {
            items: [
              {
                code: "192250",
                name: "케이사인",
              },
              {
                code: "006800",
                name: "미래에셋증권",
              },
              {
                code: "352540",
                name: "KODEX TSE일본리츠(H)",
              },
              {
                code: "027580",
                name: "상보",
              },
              {
                code: "001630",
                name: "종근당홀딩스",
              },
              {
                code: "138610",
                name: "나이벡",
              },
              {
                code: "373790",
                name: "KOSEF 미국방어배당성장나스닥",
              },
              {
                code: "238090",
                name: "앤디포스",
              },
              {
                code: "015750",
                name: "성우하이텍",
              },
              {
                code: "085370",
                name: "루트로닉",
              },
            ],
            values: [0.06, 0.16, 0.16, 0.07, 0.17, 0.03, 0.13, 0.01, 0.16, 0.05],
          },
        },
      },
      {
        title: "clrl7kxfhl_2",
        portfolio: {
          returns: 63,
          risk: 92,
          sharpe: 0.1,
          weights: {
            items: [
              {
                code: "092220",
                name: "KEC",
              },
              {
                code: "211050",
                name: "인카금융서비스",
              },
              {
                code: "011070",
                name: "LG이노텍",
              },
              {
                code: "000150",
                name: "두산",
              },
              {
                code: "153460",
                name: "네이블",
              },
              {
                code: "221840",
                name: "하이즈항공",
              },
              {
                code: "145720",
                name: "덴티움",
              },
              {
                code: "025440",
                name: "대성엘텍",
              },
              {
                code: "002025",
                name: "코오롱우",
              },
              {
                code: "007280",
                name: "한국특수형강",
              },
            ],
            values: [0.06, 0.16, 0.16, 0.07, 0.17, 0.03, 0.13, 0.01, 0.16, 0.05],
          },
        },
      },
      {
        title: "clrl7kxfhl_3",
        portfolio: {
          returns: 85,
          risk: 91,
          sharpe: 0.6,
          weights: {
            items: [
              {
                code: "089850",
                name: "유비벨록스",
              },
              {
                code: "036690",
                name: "코맥스",
              },
              {
                code: "009520",
                name: "포스코엠텍",
              },
              {
                code: "256150",
                name: "한독크린텍",
              },
              {
                code: "093230",
                name: "이아이디",
              },
              {
                code: "287320",
                name: "KBSTAR 200산업재",
              },
              {
                code: "052790",
                name: "액토즈소프트",
              },
              {
                code: "071050",
                name: "한국금융지주",
              },
              {
                code: "226340",
                name: "본느",
              },
              {
                code: "071280",
                name: "로체시스템즈",
              },
            ],
            values: [0.06, 0.16, 0.16, 0.07, 0.17, 0.03, 0.13, 0.01, 0.16, 0.05],
          },
        },
      },
    ],
  },
  x9vhxdnbao: {
    user: "x9vhxdnbao@gmail.com",
    portfolios: [
      {
        title: "x9vhxdnbao_0",
        portfolio: {
          returns: 40,
          risk: 45,
          sharpe: 0.5,
          weights: {
            items: [
              {
                code: "340570",
                name: "티앤엘",
              },
              {
                code: "235980",
                name: "메드팩토",
              },
              {
                code: "007680",
                name: "대원",
              },
              {
                code: "040610",
                name: "SG&G",
              },
              {
                code: "004415",
                name: "서울식품우",
              },
              {
                code: "189330",
                name: "씨이랩",
              },
              {
                code: "327260",
                name: "RF머트리얼즈",
              },
              {
                code: "009580",
                name: "무림P&P",
              },
              {
                code: "266550",
                name: "ARIRANG 중형주저변동50",
              },
              {
                code: "322000",
                name: "현대에너지솔루션",
              },
            ],
            values: [0.08, 0.07, 0.12, 0.15, 0.01, 0.14, 0.08, 0.15, 0.07, 0.12],
          },
        },
      },
      {
        title: "x9vhxdnbao_1",
        portfolio: {
          returns: 65,
          risk: 2,
          sharpe: 0.9,
          weights: {
            items: [
              {
                code: "215100",
                name: "로보로보",
              },
              {
                code: "272560",
                name: "KBSTAR 단기국공채액티브",
              },
              {
                code: "241820",
                name: "피씨엘",
              },
              {
                code: "236030",
                name: "씨알푸드",
              },
              {
                code: "272550",
                name: "삼양패키징",
              },
              {
                code: "006730",
                name: "서부T&D",
              },
              {
                code: "195500",
                name: "마니커에프앤지",
              },
              {
                code: "088800",
                name: "에이스테크",
              },
              {
                code: "006890",
                name: "태경케미컬",
              },
              {
                code: "006980",
                name: "우성사료",
              },
            ],
            values: [0.08, 0.07, 0.12, 0.15, 0.01, 0.14, 0.08, 0.15, 0.07, 0.12],
          },
        },
      },
      {
        title: "x9vhxdnbao_2",
        portfolio: {
          returns: 26,
          risk: 91,
          sharpe: 0.7,
          weights: {
            items: [
              {
                code: "096775",
                name: "SK이노베이션우",
              },
              {
                code: "329750",
                name: "TIGER 미국달러단기채권액티브",
              },
              {
                code: "100130",
                name: "동국S&C",
              },
              {
                code: "277880",
                name: "티에스아이",
              },
              {
                code: "312610",
                name: "에이에프더블류",
              },
              {
                code: "102780",
                name: "KODEX 삼성그룹",
              },
              {
                code: "049180",
                name: "셀루메드",
              },
              {
                code: "204450",
                name: "KODEX China H 레버리지(H)",
              },
              {
                code: "158300",
                name: "에스에이티이엔지",
              },
              {
                code: "015260",
                name: "에이엔피",
              },
            ],
            values: [0.08, 0.07, 0.12, 0.15, 0.01, 0.14, 0.08, 0.15, 0.07, 0.12],
          },
        },
      },
      {
        title: "x9vhxdnbao_3",
        portfolio: {
          returns: 95,
          risk: 3,
          sharpe: 0.2,
          weights: {
            items: [
              {
                code: "031430",
                name: "신세계인터내셔날",
              },
              {
                code: "091230",
                name: "TIGER 반도체",
              },
              {
                code: "060370",
                name: "KT서브마린",
              },
              {
                code: "141020",
                name: "포티스",
              },
              {
                code: "096630",
                name: "에스코넥",
              },
              {
                code: "311060",
                name: "엘에이티",
              },
              {
                code: "065560",
                name: "녹원씨엔아이",
              },
              {
                code: "002140",
                name: "고려산업",
              },
              {
                code: "278530",
                name: "KODEX 200TR",
              },
              {
                code: "000060",
                name: "메리츠화재",
              },
            ],
            values: [0.08, 0.07, 0.12, 0.15, 0.01, 0.14, 0.08, 0.15, 0.07, 0.12],
          },
        },
      },
    ],
  },
  w6uxzuzsnt: {
    user: "w6uxzuzsnt@gmail.com",
    portfolios: [
      {
        title: "w6uxzuzsnt_0",
        portfolio: {
          returns: 4,
          risk: 14,
          sharpe: 1.1,
          weights: {
            items: [
              {
                code: "096870",
                name: "엘디티",
              },
              {
                code: "250780",
                name: "TIGER 코스닥150선물인버스",
              },
              {
                code: "190650",
                name: "코리아에셋투자증권",
              },
              {
                code: "095720",
                name: "웅진씽크빅",
              },
              {
                code: "025440",
                name: "대성엘텍",
              },
              {
                code: "295000",
                name: "KBSTAR 국채선물10년",
              },
              {
                code: "044380",
                name: "주연테크",
              },
              {
                code: "004800",
                name: "효성",
              },
              {
                code: "176750",
                name: "듀켐바이오",
              },
              {
                code: "266170",
                name: "뿌리깊은나무들",
              },
            ],
            values: [0.17, 0.11, 0.07, 0.08, 0.09, 0.14, 0.03, 0.11, 0.13, 0.06],
          },
        },
      },
      {
        title: "w6uxzuzsnt_1",
        portfolio: {
          returns: 45,
          risk: 43,
          sharpe: 1.1,
          weights: {
            items: [
              {
                code: "053080",
                name: "원방테크",
              },
              {
                code: "041590",
                name: "젬백스지오",
              },
              {
                code: "008770",
                name: "호텔신라",
              },
              {
                code: "021650",
                name: "한국큐빅",
              },
              {
                code: "010780",
                name: "아이에스동서",
              },
              {
                code: "003075",
                name: "코오롱글로벌우",
              },
              {
                code: "002700",
                name: "신일전자",
              },
              {
                code: "064240",
                name: "홈캐스트",
              },
              {
                code: "228810",
                name: "TIGER 미디어컨텐츠",
              },
              {
                code: "105780",
                name: "KBSTAR 5대그룹주",
              },
            ],
            values: [0.17, 0.11, 0.07, 0.08, 0.09, 0.14, 0.03, 0.11, 0.13, 0.06],
          },
        },
      },
      {
        title: "w6uxzuzsnt_2",
        portfolio: {
          returns: 49,
          risk: 43,
          sharpe: 0.1,
          weights: {
            items: [
              {
                code: "024830",
                name: "세원물산",
              },
              {
                code: "300610",
                name: "TIGER K게임",
              },
              {
                code: "334890",
                name: "이지스밸류리츠",
              },
              {
                code: "090080",
                name: "평화산업",
              },
              {
                code: "065440",
                name: "이루온",
              },
              {
                code: "381570",
                name: "HANARO Fn친환경에너지",
              },
              {
                code: "064240",
                name: "홈캐스트",
              },
              {
                code: "186230",
                name: "그린플러스",
              },
              {
                code: "027710",
                name: "팜스토리",
              },
              {
                code: "139280",
                name: "TIGER 경기방어",
              },
            ],
            values: [0.17, 0.11, 0.07, 0.08, 0.09, 0.14, 0.03, 0.11, 0.13, 0.06],
          },
        },
      },
    ],
  },
  g6bop7nb8c: {
    user: "g6bop7nb8c@gmail.com",
    portfolios: [
      {
        title: "g6bop7nb8c_0",
        portfolio: {
          returns: 8,
          risk: 74,
          sharpe: 0.8,
          weights: {
            items: [
              {
                code: "078860",
                name: "아이오케이",
              },
              {
                code: "357780",
                name: "솔브레인",
              },
              {
                code: "033320",
                name: "제이씨현시스템",
              },
              {
                code: "356890",
                name: "싸이버원",
              },
              {
                code: "333980",
                name: "ARIRANG KS퀄리티가중TR",
              },
              {
                code: "256440",
                name: "KINDEX 인도네시아MSCI(합성)",
              },
              {
                code: "004440",
                name: "삼일씨엔에스",
              },
              {
                code: "329560",
                name: "상상인이안제2호스팩",
              },
              {
                code: "078140",
                name: "대봉엘에스",
              },
              {
                code: "289480",
                name: "TIGER 200커버드콜ATM",
              },
            ],
            values: [0.07, 0.11, 0.16, 0.06, 0.14, 0.04, 0.13, 0.16, 0.12, 0.02],
          },
        },
      },
      {
        title: "g6bop7nb8c_1",
        portfolio: {
          returns: 38,
          risk: 37,
          sharpe: 1.2,
          weights: {
            items: [
              {
                code: "299070",
                name: "KINDEX 국채선물10년인버스",
              },
              {
                code: "046890",
                name: "서울반도체",
              },
              {
                code: "021650",
                name: "한국큐빅",
              },
              {
                code: "015540",
                name: "쎌마테라퓨틱스",
              },
              {
                code: "067630",
                name: "에이치엘비생명과학",
              },
              {
                code: "001770",
                name: "신화실업",
              },
              {
                code: "094360",
                name: "칩스앤미디어",
              },
              {
                code: "005940",
                name: "NH투자증권",
              },
              {
                code: "024850",
                name: "피에스엠씨",
              },
              {
                code: "024830",
                name: "세원물산",
              },
            ],
            values: [0.07, 0.11, 0.16, 0.06, 0.14, 0.04, 0.13, 0.16, 0.12, 0.02],
          },
        },
      },
    ],
  },
  alrarhgza9: {
    user: "alrarhgza9@gmail.com",
    portfolios: [
      {
        title: "alrarhgza9_0",
        portfolio: {
          returns: 45,
          risk: 63,
          sharpe: 1.1,
          weights: {
            items: [
              {
                code: "009275",
                name: "신원우",
              },
              {
                code: "089030",
                name: "테크윙",
              },
              {
                code: "007820",
                name: "에스엠코어",
              },
              {
                code: "079940",
                name: "가비아",
              },
              {
                code: "285490",
                name: "노바텍",
              },
              {
                code: "134380",
                name: "미원화학",
              },
              {
                code: "000060",
                name: "메리츠화재",
              },
              {
                code: "238500",
                name: "로보쓰리",
              },
              {
                code: "002960",
                name: "한국쉘석유",
              },
              {
                code: "140610",
                name: "엔솔바이오사이언스",
              },
            ],
            values: [0.14, 0.1, 0, 0.13, 0.15, 0.19, 0.05, 0.03, 0.19, 0.03],
          },
        },
      },
      {
        title: "alrarhgza9_1",
        portfolio: {
          returns: 84,
          risk: 31,
          sharpe: 0.3,
          weights: {
            items: [
              {
                code: "302430",
                name: "이노메트리",
              },
              {
                code: "097230",
                name: "한진중공업",
              },
              {
                code: "095190",
                name: "이엠코리아",
              },
              {
                code: "237880",
                name: "클리오",
              },
              {
                code: "007590",
                name: "동방아그로",
              },
              {
                code: "227830",
                name: "ARIRANG 코스피",
              },
              {
                code: "033230",
                name: "인성정보",
              },
              {
                code: "004540",
                name: "깨끗한나라",
              },
              {
                code: "068240",
                name: "다원시스",
              },
              {
                code: "004270",
                name: "남성",
              },
            ],
            values: [0.14, 0.1, 0, 0.13, 0.15, 0.19, 0.05, 0.03, 0.19, 0.03],
          },
        },
      },
    ],
  },
  moe2mj301o: {
    user: "moe2mj301o@gmail.com",
    portfolios: [
      {
        title: "moe2mj301o_0",
        portfolio: {
          returns: 45,
          risk: 24,
          sharpe: 0.8,
          weights: {
            items: [
              {
                code: "900300",
                name: "오가닉티코스메틱",
              },
              {
                code: "130730",
                name: "KOSEF 단기자금",
              },
              {
                code: "271060",
                name: "KODEX 3대농산물선물(H)",
              },
              {
                code: "214390",
                name: "경보제약",
              },
              {
                code: "001260",
                name: "남광토건",
              },
              {
                code: "019010",
                name: "베뉴지",
              },
              {
                code: "053260",
                name: "금강철강",
              },
              {
                code: "079950",
                name: "인베니아",
              },
              {
                code: "215600",
                name: "신라젠",
              },
              {
                code: "001680",
                name: "대상",
              },
            ],
            values: [0.1, 0.06, 0.09, 0.13, 0.13, 0.13, 0.12, 0.13, 0.09, 0.01],
          },
        },
      },
      {
        title: "moe2mj301o_1",
        portfolio: {
          returns: 57,
          risk: 87,
          sharpe: 0.4,
          weights: {
            items: [
              {
                code: "009200",
                name: "무림페이퍼",
              },
              {
                code: "270810",
                name: "KBSTAR 코스닥150",
              },
              {
                code: "053030",
                name: "바이넥스",
              },
              {
                code: "005750",
                name: "대림B&Co",
              },
              {
                code: "367480",
                name: "유안타제8호스팩",
              },
              {
                code: "003220",
                name: "대원제약",
              },
              {
                code: "204450",
                name: "KODEX China H 레버리지(H)",
              },
              {
                code: "003080",
                name: "성보화학",
              },
              {
                code: "102280",
                name: "쌍방울",
              },
              {
                code: "139310",
                name: "TIGER 금속선물(H)",
              },
            ],
            values: [0.1, 0.06, 0.09, 0.13, 0.13, 0.13, 0.12, 0.13, 0.09, 0.01],
          },
        },
      },
    ],
  },
  o41fk0ywjj: {
    user: "o41fk0ywjj@gmail.com",
    portfolios: [
      {
        title: "o41fk0ywjj_0",
        portfolio: {
          returns: 63,
          risk: 13,
          sharpe: 0.6,
          weights: {
            items: [
              {
                code: "131970",
                name: "테스나",
              },
              {
                code: "002360",
                name: "SH에너지화학",
              },
              {
                code: "204620",
                name: "글로벌텍스프리",
              },
              {
                code: "100790",
                name: "미래에셋벤처투자",
              },
              {
                code: "080440",
                name: "에스제이케이",
              },
              {
                code: "227540",
                name: "TIGER 200 헬스케어",
              },
              {
                code: "263050",
                name: "유틸렉스",
              },
              {
                code: "004700",
                name: "조광피혁",
              },
              {
                code: "264660",
                name: "씨앤지하이테크",
              },
              {
                code: "010640",
                name: "진양폴리",
              },
            ],
            values: [0.02, 0.01, 0.08, 0.04, 0.18, 0.12, 0.25, 0.05, 0.05, 0.2],
          },
        },
      },
      {
        title: "o41fk0ywjj_1",
        portfolio: {
          returns: 9,
          risk: 44,
          sharpe: 0.4,
          weights: {
            items: [
              {
                code: "136340",
                name: "KBSTAR 중기우량회사채",
              },
              {
                code: "228820",
                name: "TIGER KTOP30",
              },
              {
                code: "272290",
                name: "이녹스첨단소재",
              },
              {
                code: "073010",
                name: "케이에스피",
              },
              {
                code: "010420",
                name: "한솔PNS",
              },
              {
                code: "279530",
                name: "KODEX 고배당",
              },
              {
                code: "299070",
                name: "KINDEX 국채선물10년인버스",
              },
              {
                code: "065420",
                name: "에스아이리소스",
              },
              {
                code: "001940",
                name: "KISCO홀딩스",
              },
              {
                code: "225800",
                name: "KOSEF 미국달러선물레버리지",
              },
            ],
            values: [0.02, 0.01, 0.08, 0.04, 0.18, 0.12, 0.25, 0.05, 0.05, 0.2],
          },
        },
      },
      {
        title: "o41fk0ywjj_2",
        portfolio: {
          returns: 27,
          risk: 94,
          sharpe: 0.4,
          weights: {
            items: [
              {
                code: "001500",
                name: "현대차증권",
              },
              {
                code: "078890",
                name: "가온미디어",
              },
              {
                code: "216050",
                name: "인크로스",
              },
              {
                code: "091230",
                name: "TIGER 반도체",
              },
              {
                code: "282330",
                name: "BGF리테일",
              },
              {
                code: "033830",
                name: "티비씨",
              },
              {
                code: "294630",
                name: "서남",
              },
              {
                code: "130740",
                name: "티피씨글로벌",
              },
              {
                code: "097230",
                name: "한진중공업",
              },
              {
                code: "294400",
                name: "KOSEF 200TR",
              },
            ],
            values: [0.02, 0.01, 0.08, 0.04, 0.18, 0.12, 0.25, 0.05, 0.05, 0.2],
          },
        },
      },
    ],
  },
  jj4xnchtyu: {
    user: "jj4xnchtyu@gmail.com",
    portfolios: [
      {
        title: "jj4xnchtyu_0",
        portfolio: {
          returns: 36,
          risk: 95,
          sharpe: 1.1,
          weights: {
            items: [
              {
                code: "028300",
                name: "에이치엘비",
              },
              {
                code: "033540",
                name: "파라텍",
              },
              {
                code: "007370",
                name: "진양제약",
              },
              {
                code: "005990",
                name: "매일홀딩스",
              },
              {
                code: "025880",
                name: "케이씨피드",
              },
              {
                code: "253450",
                name: "스튜디오드래곤",
              },
              {
                code: "102780",
                name: "KODEX 삼성그룹",
              },
              {
                code: "114460",
                name: "KINDEX 국고채3년",
              },
              {
                code: "160550",
                name: "NEW",
              },
              {
                code: "269420",
                name: "KODEX S&P글로벌인프라(합성)",
              },
            ],
            values: [0.1, 0.22, 0.14, 0.09, 0.02, 0.04, 0.03, 0.1, 0.21, 0.05],
          },
        },
      },
      {
        title: "jj4xnchtyu_1",
        portfolio: {
          returns: 4,
          risk: 36,
          sharpe: 1,
          weights: {
            items: [
              {
                code: "015230",
                name: "대창단조",
              },
              {
                code: "045970",
                name: "코아시아",
              },
              {
                code: "114450",
                name: "KPX생명과학",
              },
              {
                code: "017000",
                name: "신원종합개발",
              },
              {
                code: "225190",
                name: "삼양옵틱스",
              },
              {
                code: "138070",
                name: "신진에스엠",
              },
              {
                code: "045060",
                name: "오공",
              },
              {
                code: "086520",
                name: "에코프로",
              },
              {
                code: "086390",
                name: "유니테스트",
              },
              {
                code: "000300",
                name: "대유플러스",
              },
            ],
            values: [0.1, 0.22, 0.14, 0.09, 0.02, 0.04, 0.03, 0.1, 0.21, 0.05],
          },
        },
      },
    ],
  },
  gzos0cujjq: {
    user: "gzos0cujjq@gmail.com",
    portfolios: [
      {
        title: "gzos0cujjq_0",
        portfolio: {
          returns: 29,
          risk: 74,
          sharpe: 0.7,
          weights: {
            items: [
              {
                code: "293940",
                name: "신한알파리츠",
              },
              {
                code: "084850",
                name: "아이티엠반도체",
              },
              {
                code: "250030",
                name: "진코스텍",
              },
              {
                code: "216280",
                name: "원텍",
              },
              {
                code: "145210",
                name: "세화아이엠씨",
              },
              {
                code: "314130",
                name: "지놈앤컴퍼니",
              },
              {
                code: "004700",
                name: "조광피혁",
              },
              {
                code: "219480",
                name: "KODEX 미국S&P500선물(H)",
              },
              {
                code: "263720",
                name: "디앤씨미디어",
              },
              {
                code: "009835",
                name: "한화솔루션우",
              },
            ],
            values: [0.04, 0.1, 0.17, 0.14, 0, 0.09, 0.14, 0.03, 0.16, 0.12],
          },
        },
      },
      {
        title: "gzos0cujjq_1",
        portfolio: {
          returns: 36,
          risk: 12,
          sharpe: 0.3,
          weights: {
            items: [
              {
                code: "290080",
                name: "KBSTAR 200고배당커버드콜ATM",
              },
              {
                code: "069620",
                name: "대웅제약",
              },
              {
                code: "025000",
                name: "KPX케미칼",
              },
              {
                code: "139260",
                name: "TIGER 200 IT",
              },
              {
                code: "201490",
                name: "미투온",
              },
              {
                code: "083470",
                name: "이엠앤아이",
              },
              {
                code: "134380",
                name: "미원화학",
              },
              {
                code: "130500",
                name: "GH신소재",
              },
              {
                code: "052690",
                name: "한전기술",
              },
              {
                code: "042670",
                name: "두산인프라코어",
              },
            ],
            values: [0.04, 0.1, 0.17, 0.14, 0, 0.09, 0.14, 0.03, 0.16, 0.12],
          },
        },
      },
      {
        title: "gzos0cujjq_2",
        portfolio: {
          returns: 56,
          risk: 71,
          sharpe: 0.2,
          weights: {
            items: [
              {
                code: "159580",
                name: "제로투세븐",
              },
              {
                code: "292050",
                name: "KBSTAR KRX300",
              },
              {
                code: "208850",
                name: "이비테크",
              },
              {
                code: "005420",
                name: "코스모화학",
              },
              {
                code: "025620",
                name: "제이준코스메틱",
              },
              {
                code: "025880",
                name: "케이씨피드",
              },
              {
                code: "183710",
                name: "KBSTAR 주식혼합",
              },
              {
                code: "047050",
                name: "포스코인터내셔널",
              },
              {
                code: "053450",
                name: "세코닉스",
              },
              {
                code: "117670",
                name: "알파홀딩스",
              },
            ],
            values: [0.04, 0.1, 0.17, 0.14, 0, 0.09, 0.14, 0.03, 0.16, 0.12],
          },
        },
      },
    ],
  },
  ou0eansjmb: {
    user: "ou0eansjmb@gmail.com",
    portfolios: [
      {
        title: "ou0eansjmb_0",
        portfolio: {
          returns: 45,
          risk: 46,
          sharpe: 1,
          weights: {
            items: [
              {
                code: "004890",
                name: "동일산업",
              },
              {
                code: "086060",
                name: "진바이오텍",
              },
              {
                code: "003120",
                name: "일성신약",
              },
              {
                code: "115570",
                name: "스타플렉스",
              },
              {
                code: "067900",
                name: "와이엔텍",
              },
              {
                code: "033160",
                name: "엠케이전자",
              },
              {
                code: "114630",
                name: "우노앤컴퍼니",
              },
              {
                code: "360200",
                name: "KINDEX 미국S&P500",
              },
              {
                code: "290660",
                name: "네오펙트",
              },
              {
                code: "152500",
                name: "KINDEX 레버리지",
              },
            ],
            values: [0.09, 0.13, 0.01, 0.08, 0.14, 0.13, 0.09, 0.13, 0.14, 0.07],
          },
        },
      },
      {
        title: "ou0eansjmb_1",
        portfolio: {
          returns: 89,
          risk: 68,
          sharpe: 0.6,
          weights: {
            items: [
              {
                code: "185490",
                name: "아이진",
              },
              {
                code: "066430",
                name: "와이오엠",
              },
              {
                code: "228850",
                name: "레이언스",
              },
              {
                code: "136490",
                name: "선진",
              },
              {
                code: "291130",
                name: "KINDEX 멕시코MSCI(합성)",
              },
              {
                code: "075580",
                name: "세진중공업",
              },
              {
                code: "071670",
                name: "에이테크솔루션",
              },
              {
                code: "016360",
                name: "삼성증권",
              },
              {
                code: "283580",
                name: "KODEX 중국본토CSI300",
              },
              {
                code: "137400",
                name: "피엔티",
              },
            ],
            values: [0.09, 0.13, 0.01, 0.08, 0.14, 0.13, 0.09, 0.13, 0.14, 0.07],
          },
        },
      },
      {
        title: "ou0eansjmb_2",
        portfolio: {
          returns: 95,
          risk: 24,
          sharpe: 0.6,
          weights: {
            items: [
              {
                code: "161580",
                name: "필옵틱스",
              },
              {
                code: "005160",
                name: "동국산업",
              },
              {
                code: "148780",
                name: "비플라이소프트",
              },
              {
                code: "214680",
                name: "디알텍",
              },
              {
                code: "238090",
                name: "앤디포스",
              },
              {
                code: "013360",
                name: "일성건설",
              },
              {
                code: "073070",
                name: "에이팸",
              },
              {
                code: "128940",
                name: "한미약품",
              },
              {
                code: "076340",
                name: "관악산업",
              },
              {
                code: "000720",
                name: "현대건설",
              },
            ],
            values: [0.09, 0.13, 0.01, 0.08, 0.14, 0.13, 0.09, 0.13, 0.14, 0.07],
          },
        },
      },
    ],
  },
  v0ff40vc2v: {
    user: "v0ff40vc2v@gmail.com",
    portfolios: [
      {
        title: "v0ff40vc2v_0",
        portfolio: {
          returns: 2,
          risk: 60,
          sharpe: 1.1,
          weights: {
            items: [
              {
                code: "023790",
                name: "동일철강",
              },
              {
                code: "198080",
                name: "엔피디",
              },
              {
                code: "004170",
                name: "신세계",
              },
              {
                code: "126640",
                name: "화신정공",
              },
              {
                code: "215100",
                name: "로보로보",
              },
              {
                code: "278620",
                name: "ARIRANG 단기채권액티브",
              },
              {
                code: "192440",
                name: "슈피겐코리아",
              },
              {
                code: "298540",
                name: "더네이쳐홀딩스",
              },
              {
                code: "006370",
                name: "대구백화점",
              },
              {
                code: "032850",
                name: "비트컴퓨터",
              },
            ],
            values: [0.07, 0.06, 0.08, 0.07, 0.09, 0.16, 0.15, 0.04, 0.14, 0.14],
          },
        },
      },
      {
        title: "v0ff40vc2v_1",
        portfolio: {
          returns: 16,
          risk: 31,
          sharpe: 0.4,
          weights: {
            items: [
              {
                code: "240810",
                name: "원익IPS",
              },
              {
                code: "122450",
                name: "KMH",
              },
              {
                code: "078140",
                name: "대봉엘에스",
              },
              {
                code: "220260",
                name: "켐트로스",
              },
              {
                code: "228340",
                name: "동양파일",
              },
              {
                code: "280930",
                name: "KODEX 미국러셀2000(H)",
              },
              {
                code: "353190",
                name: "엔에이치스팩16호",
              },
              {
                code: "208890",
                name: "미래엔에듀파트너",
              },
              {
                code: "104700",
                name: "한국철강",
              },
              {
                code: "110020",
                name: "전진바이오팜",
              },
            ],
            values: [0.07, 0.06, 0.08, 0.07, 0.09, 0.16, 0.15, 0.04, 0.14, 0.14],
          },
        },
      },
      {
        title: "v0ff40vc2v_2",
        portfolio: {
          returns: 59,
          risk: 67,
          sharpe: 0.5,
          weights: {
            items: [
              {
                code: "090150",
                name: "광진윈텍",
              },
              {
                code: "032580",
                name: "피델릭스",
              },
              {
                code: "143160",
                name: "아이디스",
              },
              {
                code: "228670",
                name: "레이",
              },
              {
                code: "053260",
                name: "금강철강",
              },
              {
                code: "010420",
                name: "한솔PNS",
              },
              {
                code: "066430",
                name: "와이오엠",
              },
              {
                code: "076340",
                name: "관악산업",
              },
              {
                code: "357550",
                name: "석경에이티",
              },
              {
                code: "032800",
                name: "판타지오",
              },
            ],
            values: [0.07, 0.06, 0.08, 0.07, 0.09, 0.16, 0.15, 0.04, 0.14, 0.14],
          },
        },
      },
    ],
  },
  "62hrf6hq8u": {
    user: "62hrf6hq8u@gmail.com",
    portfolios: [
      {
        title: "62hrf6hq8u_0",
        portfolio: {
          returns: 8,
          risk: 23,
          sharpe: 0.9,
          weights: {
            items: [
              {
                code: "078590",
                name: "OQP",
              },
              {
                code: "009070",
                name: "KCTC",
              },
              {
                code: "182490",
                name: "TIGER 단기선진하이일드(합성 H)",
              },
              {
                code: "066900",
                name: "디에이피",
              },
              {
                code: "304760",
                name: "HANARO KRX300",
              },
              {
                code: "365590",
                name: "엔에이치스팩18호",
              },
              {
                code: "215570",
                name: "크로넥스",
              },
              {
                code: "272210",
                name: "한화시스템",
              },
              {
                code: "011500",
                name: "한농화성",
              },
              {
                code: "038680",
                name: "에스넷",
              },
            ],
            values: [0.06, 0.2, 0.1, 0.17, 0.09, 0.04, 0.07, 0.16, 0.07, 0.05],
          },
        },
      },
      {
        title: "62hrf6hq8u_1",
        portfolio: {
          returns: 30,
          risk: 5,
          sharpe: 0.2,
          weights: {
            items: [
              {
                code: "082850",
                name: "우리바이오",
              },
              {
                code: "007210",
                name: "벽산",
              },
              {
                code: "900340",
                name: "윙입푸드",
              },
              {
                code: "079430",
                name: "현대리바트",
              },
              {
                code: "095610",
                name: "테스",
              },
              {
                code: "032800",
                name: "판타지오",
              },
              {
                code: "001630",
                name: "종근당홀딩스",
              },
              {
                code: "33626K",
                name: "두산퓨얼셀1우",
              },
              {
                code: "065450",
                name: "빅텍",
              },
              {
                code: "230240",
                name: "에치에프알",
              },
            ],
            values: [0.06, 0.2, 0.1, 0.17, 0.09, 0.04, 0.07, 0.16, 0.07, 0.05],
          },
        },
      },
      {
        title: "62hrf6hq8u_2",
        portfolio: {
          returns: 91,
          risk: 31,
          sharpe: 1.2,
          weights: {
            items: [
              {
                code: "220630",
                name: "해마로푸드서비스",
              },
              {
                code: "200710",
                name: "에이디테크놀로지",
              },
              {
                code: "153460",
                name: "네이블",
              },
              {
                code: "002720",
                name: "국제약품",
              },
              {
                code: "012790",
                name: "신일제약",
              },
              {
                code: "004170",
                name: "신세계",
              },
              {
                code: "009440",
                name: "KC그린홀딩스",
              },
              {
                code: "014190",
                name: "원익큐브",
              },
              {
                code: "084010",
                name: "대한제강",
              },
              {
                code: "267260",
                name: "현대일렉트릭",
              },
            ],
            values: [0.06, 0.2, 0.1, 0.17, 0.09, 0.04, 0.07, 0.16, 0.07, 0.05],
          },
        },
      },
      {
        title: "62hrf6hq8u_3",
        portfolio: {
          returns: 60,
          risk: 61,
          sharpe: 0.6,
          weights: {
            items: [
              {
                code: "003830",
                name: "대한화섬",
              },
              {
                code: "122260",
                name: "KOSEF 통안채1년",
              },
              {
                code: "192080",
                name: "더블유게임즈",
              },
              {
                code: "114920",
                name: "대주이엔티",
              },
              {
                code: "224020",
                name: "에스케이씨에스",
              },
              {
                code: "230240",
                name: "에치에프알",
              },
              {
                code: "272910",
                name: "KINDEX 중장기국공채액티브",
              },
              {
                code: "002600",
                name: "조흥",
              },
              {
                code: "079170",
                name: "한창산업",
              },
              {
                code: "065150",
                name: "MP그룹",
              },
            ],
            values: [0.06, 0.2, 0.1, 0.17, 0.09, 0.04, 0.07, 0.16, 0.07, 0.05],
          },
        },
      },
    ],
  },
  bq7o89sgjf: {
    user: "bq7o89sgjf@gmail.com",
    portfolios: [
      {
        title: "bq7o89sgjf_0",
        portfolio: {
          returns: 55,
          risk: 19,
          sharpe: 0.3,
          weights: {
            items: [
              {
                code: "279600",
                name: "미디어젠",
              },
              {
                code: "138520",
                name: "TIGER 삼성그룹펀더멘털",
              },
              {
                code: "023770",
                name: "플레이위드",
              },
              {
                code: "000700",
                name: "유수홀딩스",
              },
              {
                code: "002840",
                name: "미원상사",
              },
              {
                code: "304670",
                name: "KODEX 미국채울트라30년선물인버스(H)",
              },
              {
                code: "060300",
                name: "레드로버",
              },
              {
                code: "373790",
                name: "KOSEF 미국방어배당성장나스닥",
              },
              {
                code: "126880",
                name: "제이엔케이히터",
              },
              {
                code: "950210",
                name: "프레스티지바이오파마",
              },
            ],
            values: [0.07, 0.01, 0.11, 0.11, 0.13, 0.05, 0.13, 0.12, 0.14, 0.13],
          },
        },
      },
      {
        title: "bq7o89sgjf_1",
        portfolio: {
          returns: 35,
          risk: 30,
          sharpe: 1.1,
          weights: {
            items: [
              {
                code: "002460",
                name: "화성산업",
              },
              {
                code: "302440",
                name: "SK바이오사이언스",
              },
              {
                code: "363280",
                name: "티와이홀딩스",
              },
              {
                code: "150900",
                name: "파수",
              },
              {
                code: "039440",
                name: "에스티아이",
              },
              {
                code: "269620",
                name: "시스웍",
              },
              {
                code: "001725",
                name: "신영증권우",
              },
              {
                code: "004985",
                name: "성신양회우",
              },
              {
                code: "114570",
                name: "지스마트글로벌",
              },
              {
                code: "093510",
                name: "엔지브이아이",
              },
            ],
            values: [0.07, 0.01, 0.11, 0.11, 0.13, 0.05, 0.13, 0.12, 0.14, 0.13],
          },
        },
      },
      {
        title: "bq7o89sgjf_2",
        portfolio: {
          returns: 55,
          risk: 68,
          sharpe: 1.1,
          weights: {
            items: [
              {
                code: "040420",
                name: "정상제이엘에스",
              },
              {
                code: "017550",
                name: "수산중공업",
              },
              {
                code: "004450",
                name: "삼화왕관",
              },
              {
                code: "103230",
                name: "에스앤더블류",
              },
              {
                code: "039840",
                name: "디오",
              },
              {
                code: "004060",
                name: "SG세계물산",
              },
              {
                code: "020400",
                name: "대동금속",
              },
              {
                code: "276990",
                name: "KODEX 글로벌4차산업로보틱스(합성)",
              },
              {
                code: "157490",
                name: "TIGER 소프트웨어",
              },
              {
                code: "032685",
                name: "소프트센우",
              },
            ],
            values: [0.07, 0.01, 0.11, 0.11, 0.13, 0.05, 0.13, 0.12, 0.14, 0.13],
          },
        },
      },
    ],
  },
  n6oqq2m9yy: {
    user: "n6oqq2m9yy@gmail.com",
    portfolios: [
      {
        title: "n6oqq2m9yy_0",
        portfolio: {
          returns: 5,
          risk: 21,
          sharpe: 0.6,
          weights: {
            items: [
              {
                code: "012450",
                name: "한화에어로스페이스",
              },
              {
                code: "051500",
                name: "CJ프레시웨이",
              },
              {
                code: "078150",
                name: "HB테크놀러지",
              },
              {
                code: "263810",
                name: "상신전자",
              },
              {
                code: "053950",
                name: "경남제약",
              },
              {
                code: "001340",
                name: "백광산업",
              },
              {
                code: "000250",
                name: "삼천당제약",
              },
              {
                code: "226360",
                name: "KH E&T",
              },
              {
                code: "305090",
                name: "마이크로디지탈",
              },
              {
                code: "269620",
                name: "시스웍",
              },
            ],
            values: [0.03, 0.06, 0.18, 0.04, 0.22, 0.08, 0, 0, 0.2, 0.19],
          },
        },
      },
      {
        title: "n6oqq2m9yy_1",
        portfolio: {
          returns: 100,
          risk: 26,
          sharpe: 0.3,
          weights: {
            items: [
              {
                code: "036710",
                name: "심텍홀딩스",
              },
              {
                code: "268600",
                name: "셀리버리",
              },
              {
                code: "049180",
                name: "셀루메드",
              },
              {
                code: "273130",
                name: "KODEX 종합채권(AA-이상)액티브",
              },
              {
                code: "000670",
                name: "영풍",
              },
              {
                code: "270020",
                name: "이십일스토어",
              },
              {
                code: "114810",
                name: "아이원스",
              },
              {
                code: "126880",
                name: "제이엔케이히터",
              },
              {
                code: "037370",
                name: "EG",
              },
              {
                code: "078520",
                name: "에이블씨엔씨",
              },
            ],
            values: [0.03, 0.06, 0.18, 0.04, 0.22, 0.08, 0, 0, 0.2, 0.19],
          },
        },
      },
      {
        title: "n6oqq2m9yy_2",
        portfolio: {
          returns: 12,
          risk: 95,
          sharpe: 0.7,
          weights: {
            items: [
              {
                code: "024090",
                name: "디씨엠",
              },
              {
                code: "093920",
                name: "서원인텍",
              },
              {
                code: "006220",
                name: "제주은행",
              },
              {
                code: "310870",
                name: "한국제8호스팩",
              },
              {
                code: "105330",
                name: "케이엔더블유",
              },
              {
                code: "003160",
                name: "디아이",
              },
              {
                code: "131370",
                name: "알서포트",
              },
              {
                code: "012750",
                name: "에스원",
              },
              {
                code: "069140",
                name: "누리플랜",
              },
              {
                code: "047050",
                name: "포스코인터내셔널",
              },
            ],
            values: [0.03, 0.06, 0.18, 0.04, 0.22, 0.08, 0, 0, 0.2, 0.19],
          },
        },
      },
    ],
  },
  q43gjlncd0: {
    user: "q43gjlncd0@gmail.com",
    portfolios: [
      {
        title: "q43gjlncd0_0",
        portfolio: {
          returns: 97,
          risk: 66,
          sharpe: 1,
          weights: {
            items: [
              {
                code: "307070",
                name: "SK4호스팩",
              },
              {
                code: "002760",
                name: "보락",
              },
              {
                code: "024120",
                name: "KB오토시스",
              },
              {
                code: "043290",
                name: "케이맥",
              },
              {
                code: "072950",
                name: "빛샘전자",
              },
              {
                code: "328380",
                name: "미래에셋대우스팩3호",
              },
              {
                code: "369370",
                name: "대신밸런스제9호스팩",
              },
              {
                code: "007540",
                name: "샘표",
              },
              {
                code: "364980",
                name: "TIGER KRX2차전지K-뉴딜",
              },
              {
                code: "064850",
                name: "에프앤가이드",
              },
            ],
            values: [0.03, 0.13, 0.04, 0.18, 0.23, 0.16, 0.04, 0.02, 0.07, 0.1],
          },
        },
      },
      {
        title: "q43gjlncd0_1",
        portfolio: {
          returns: 77,
          risk: 79,
          sharpe: 0.2,
          weights: {
            items: [
              {
                code: "195930",
                name: "TIGER 유로스탁스50(합성 H)",
              },
              {
                code: "264660",
                name: "씨앤지하이테크",
              },
              {
                code: "016670",
                name: "포비스티앤씨",
              },
              {
                code: "159580",
                name: "제로투세븐",
              },
              {
                code: "187870",
                name: "디바이스이엔지",
              },
              {
                code: "200250",
                name: "KOSEF 인도Nifty50(합성)",
              },
              {
                code: "017900",
                name: "광전자",
              },
              {
                code: "010280",
                name: "쌍용정보통신",
              },
              {
                code: "216080",
                name: "제테마",
              },
              {
                code: "023960",
                name: "에쓰씨엔지니어링",
              },
            ],
            values: [0.03, 0.13, 0.04, 0.18, 0.23, 0.16, 0.04, 0.02, 0.07, 0.1],
          },
        },
      },
      {
        title: "q43gjlncd0_2",
        portfolio: {
          returns: 30,
          risk: 57,
          sharpe: 0.2,
          weights: {
            items: [
              {
                code: "002410",
                name: "범양건영",
              },
              {
                code: "360140",
                name: "KODEX 200롱코스닥150숏선물",
              },
              {
                code: "064350",
                name: "현대로템",
              },
              {
                code: "205470",
                name: "휴마시스",
              },
              {
                code: "025950",
                name: "동신건설",
              },
              {
                code: "060480",
                name: "국일신동",
              },
              {
                code: "281740",
                name: "레이크머티리얼즈",
              },
              {
                code: "079160",
                name: "CJ CGV",
              },
              {
                code: "090470",
                name: "제이스텍",
              },
              {
                code: "026890",
                name: "디피씨",
              },
            ],
            values: [0.03, 0.13, 0.04, 0.18, 0.23, 0.16, 0.04, 0.02, 0.07, 0.1],
          },
        },
      },
    ],
  },
  "5nd4h7v8bb": {
    user: "5nd4h7v8bb@gmail.com",
    portfolios: [
      {
        title: "5nd4h7v8bb_0",
        portfolio: {
          returns: 65,
          risk: 41,
          sharpe: 0.3,
          weights: {
            items: [
              {
                code: "012200",
                name: "계양전기",
              },
              {
                code: "365780",
                name: "KINDEX 국고채10년",
              },
              {
                code: "213500",
                name: "한솔제지",
              },
              {
                code: "267260",
                name: "현대일렉트릭",
              },
              {
                code: "007820",
                name: "에스엠코어",
              },
              {
                code: "337840",
                name: "유엑스엔",
              },
              {
                code: "094840",
                name: "슈프리마에이치큐",
              },
              {
                code: "011155",
                name: "CJ씨푸드1우",
              },
              {
                code: "033340",
                name: "좋은사람들",
              },
              {
                code: "233160",
                name: "TIGER 코스닥150 레버리지",
              },
            ],
            values: [0.09, 0.08, 0.02, 0.09, 0.11, 0.13, 0.17, 0.13, 0.08, 0.11],
          },
        },
      },
      {
        title: "5nd4h7v8bb_1",
        portfolio: {
          returns: 51,
          risk: 69,
          sharpe: 0.8,
          weights: {
            items: [
              {
                code: "032680",
                name: "소프트센",
              },
              {
                code: "226330",
                name: "신테카바이오",
              },
              {
                code: "030210",
                name: "KTB투자증권",
              },
              {
                code: "305720",
                name: "KODEX 2차전지산업",
              },
              {
                code: "900290",
                name: "GRT",
              },
              {
                code: "364690",
                name: "KODEX 혁신기술테마액티브",
              },
              {
                code: "237440",
                name: "TIGER 경기방어채권혼합",
              },
              {
                code: "211270",
                name: "AP위성",
              },
              {
                code: "067080",
                name: "대화제약",
              },
              {
                code: "139220",
                name: "TIGER 200 건설",
              },
            ],
            values: [0.09, 0.08, 0.02, 0.09, 0.11, 0.13, 0.17, 0.13, 0.08, 0.11],
          },
        },
      },
      {
        title: "5nd4h7v8bb_2",
        portfolio: {
          returns: 60,
          risk: 61,
          sharpe: 0.2,
          weights: {
            items: [
              {
                code: "046210",
                name: "파나진",
              },
              {
                code: "002790",
                name: "아모레G",
              },
              {
                code: "131390",
                name: "피앤이솔루션",
              },
              {
                code: "215620",
                name: "흥국 S&P코리아로우볼",
              },
              {
                code: "218420",
                name: "KODEX 미국S&P에너지(합성)",
              },
              {
                code: "106240",
                name: "파인테크닉스",
              },
              {
                code: "016740",
                name: "두올",
              },
              {
                code: "046390",
                name: "삼화네트웍스",
              },
              {
                code: "069960",
                name: "현대백화점",
              },
              {
                code: "341310",
                name: "이앤에치",
              },
            ],
            values: [0.09, 0.08, 0.02, 0.09, 0.11, 0.13, 0.17, 0.13, 0.08, 0.11],
          },
        },
      },
      {
        title: "5nd4h7v8bb_3",
        portfolio: {
          returns: 92,
          risk: 35,
          sharpe: 0.1,
          weights: {
            items: [
              {
                code: "267770",
                name: "TIGER 200선물레버리지",
              },
              {
                code: "000970",
                name: "한국주철관",
              },
              {
                code: "302180",
                name: "TIGER 국채선물10년인버스",
              },
              {
                code: "003680",
                name: "한성기업",
              },
              {
                code: "052600",
                name: "한네트",
              },
              {
                code: "067770",
                name: "세진티에스",
              },
              {
                code: "111870",
                name: "삼본전자",
              },
              {
                code: "003495",
                name: "대한항공우",
              },
              {
                code: "246250",
                name: "에스엘에스바이오",
              },
              {
                code: "322000",
                name: "현대에너지솔루션",
              },
            ],
            values: [0.09, 0.08, 0.02, 0.09, 0.11, 0.13, 0.17, 0.13, 0.08, 0.11],
          },
        },
      },
    ],
  },
  kysq1dwtpz: {
    user: "kysq1dwtpz@gmail.com",
    portfolios: [
      {
        title: "kysq1dwtpz_0",
        portfolio: {
          returns: 3,
          risk: 47,
          sharpe: 0.8,
          weights: {
            items: [
              {
                code: "069330",
                name: "유아이디",
              },
              {
                code: "224020",
                name: "에스케이씨에스",
              },
              {
                code: "151910",
                name: "나노스",
              },
              {
                code: "005745",
                name: "크라운해태홀딩스우",
              },
              {
                code: "071840",
                name: "롯데하이마트",
              },
              {
                code: "015020",
                name: "이스타코",
              },
              {
                code: "010690",
                name: "화신",
              },
              {
                code: "089010",
                name: "켐트로닉스",
              },
              {
                code: "214260",
                name: "라파스",
              },
              {
                code: "039830",
                name: "오로라",
              },
            ],
            values: [0.17, 0.14, 0.16, 0.04, 0.08, 0.06, 0.1, 0.16, 0.07, 0.03],
          },
        },
      },
      {
        title: "kysq1dwtpz_1",
        portfolio: {
          returns: 42,
          risk: 71,
          sharpe: 1,
          weights: {
            items: [
              {
                code: "074610",
                name: "이엔플러스",
              },
              {
                code: "302920",
                name: "더콘텐츠온",
              },
              {
                code: "011690",
                name: "유양디앤유",
              },
              {
                code: "005440",
                name: "현대그린푸드",
              },
              {
                code: "025880",
                name: "케이씨피드",
              },
              {
                code: "092780",
                name: "동양피스톤",
              },
              {
                code: "166480",
                name: "코아스템",
              },
              {
                code: "333940",
                name: "ARIRANG KS로우볼가중TR",
              },
              {
                code: "024950",
                name: "삼천리자전거",
              },
              {
                code: "257990",
                name: "나우코스",
              },
            ],
            values: [0.17, 0.14, 0.16, 0.04, 0.08, 0.06, 0.1, 0.16, 0.07, 0.03],
          },
        },
      },
    ],
  },
  mfpnhmiebk: {
    user: "mfpnhmiebk@gmail.com",
    portfolios: [
      {
        title: "mfpnhmiebk_0",
        portfolio: {
          returns: 95,
          risk: 4,
          sharpe: 1.1,
          weights: {
            items: [
              {
                code: "123700",
                name: "SJM",
              },
              {
                code: "039980",
                name: "리노스",
              },
              {
                code: "007070",
                name: "GS리테일",
              },
              {
                code: "049950",
                name: "미래컴퍼니",
              },
              {
                code: "214370",
                name: "케어젠",
              },
              {
                code: "091340",
                name: "S&K폴리텍",
              },
              {
                code: "067630",
                name: "에이치엘비생명과학",
              },
              {
                code: "225800",
                name: "KOSEF 미국달러선물레버리지",
              },
              {
                code: "051500",
                name: "CJ프레시웨이",
              },
              {
                code: "292110",
                name: "TIGER 대형가치",
              },
            ],
            values: [0.13, 0.08, 0.07, 0.17, 0.09, 0.12, 0.04, 0.03, 0.17, 0.1],
          },
        },
      },
      {
        title: "mfpnhmiebk_1",
        portfolio: {
          returns: 84,
          risk: 24,
          sharpe: 0.5,
          weights: {
            items: [
              {
                code: "002995",
                name: "금호건설우",
              },
              {
                code: "379800",
                name: "KODEX 미국S&P500TR",
              },
              {
                code: "207940",
                name: "삼성바이오로직스",
              },
              {
                code: "114190",
                name: "강원",
              },
              {
                code: "066830",
                name: "제노텍",
              },
              {
                code: "031440",
                name: "신세계푸드",
              },
              {
                code: "161000",
                name: "애경유화",
              },
              {
                code: "094800",
                name: "맵스리얼티1",
              },
              {
                code: "006910",
                name: "보성파워텍",
              },
              {
                code: "365000",
                name: "TIGER KRX인터넷K-뉴딜",
              },
            ],
            values: [0.13, 0.08, 0.07, 0.17, 0.09, 0.12, 0.04, 0.03, 0.17, 0.1],
          },
        },
      },
      {
        title: "mfpnhmiebk_2",
        portfolio: {
          returns: 47,
          risk: 14,
          sharpe: 1.2,
          weights: {
            items: [
              {
                code: "037370",
                name: "EG",
              },
              {
                code: "204270",
                name: "제이앤티씨",
              },
              {
                code: "139250",
                name: "TIGER 200 에너지화학",
              },
              {
                code: "005490",
                name: "POSCO",
              },
              {
                code: "080010",
                name: "이상네트웍스",
              },
              {
                code: "304840",
                name: "피플바이오",
              },
              {
                code: "261270",
                name: "KODEX 미국달러선물인버스",
              },
              {
                code: "040350",
                name: "큐로컴",
              },
              {
                code: "287310",
                name: "KBSTAR 200경기소비재",
              },
              {
                code: "005360",
                name: "모나미",
              },
            ],
            values: [0.13, 0.08, 0.07, 0.17, 0.09, 0.12, 0.04, 0.03, 0.17, 0.1],
          },
        },
      },
    ],
  },
  "97ejyq1oiq": {
    user: "97ejyq1oiq@gmail.com",
    portfolios: [
      {
        title: "97ejyq1oiq_0",
        portfolio: {
          returns: 100,
          risk: 46,
          sharpe: 0.6,
          weights: {
            items: [
              {
                code: "002360",
                name: "SH에너지화학",
              },
              {
                code: "353190",
                name: "엔에이치스팩16호",
              },
              {
                code: "008290",
                name: "원풍물산",
              },
              {
                code: "036800",
                name: "나이스정보통신",
              },
              {
                code: "009070",
                name: "KCTC",
              },
              {
                code: "381560",
                name: "HANARO Fn전기&수소차",
              },
              {
                code: "174880",
                name: "장원테크",
              },
              {
                code: "091090",
                name: "세원셀론텍",
              },
              {
                code: "096240",
                name: "청담러닝",
              },
              {
                code: "086820",
                name: "바이오솔루션",
              },
            ],
            values: [0.11, 0.07, 0.02, 0.06, 0.17, 0.13, 0.12, 0.14, 0.09, 0.1],
          },
        },
      },
      {
        title: "97ejyq1oiq_1",
        portfolio: {
          returns: 83,
          risk: 81,
          sharpe: 1,
          weights: {
            items: [
              {
                code: "003030",
                name: "세아제강지주",
              },
              {
                code: "252710",
                name: "TIGER 200선물인버스2X",
              },
              {
                code: "900080",
                name: "에스앤씨엔진그룹",
              },
              {
                code: "099140",
                name: "KODEX China H",
              },
              {
                code: "051380",
                name: "피씨디렉트",
              },
              {
                code: "050540",
                name: "한국코퍼레이션",
              },
              {
                code: "019660",
                name: "글로본",
              },
              {
                code: "039830",
                name: "오로라",
              },
              {
                code: "002785",
                name: "진흥기업우B",
              },
              {
                code: "009440",
                name: "KC그린홀딩스",
              },
            ],
            values: [0.11, 0.07, 0.02, 0.06, 0.17, 0.13, 0.12, 0.14, 0.09, 0.1],
          },
        },
      },
    ],
  },
  "078147javt": {
    user: "078147javt@gmail.com",
    portfolios: [
      {
        title: "078147javt_0",
        portfolio: {
          returns: 23,
          risk: 20,
          sharpe: 0.4,
          weights: {
            items: [
              {
                code: "104830",
                name: "원익머트리얼즈",
              },
              {
                code: "003495",
                name: "대한항공우",
              },
              {
                code: "045970",
                name: "코아시아",
              },
              {
                code: "001500",
                name: "현대차증권",
              },
              {
                code: "058110",
                name: "멕아이씨에스",
              },
              {
                code: "002025",
                name: "코오롱우",
              },
              {
                code: "145670",
                name: "KINDEX 인버스",
              },
              {
                code: "122690",
                name: "서진오토모티브",
              },
              {
                code: "232830",
                name: "시큐센",
              },
              {
                code: "035000",
                name: "지투알",
              },
            ],
            values: [0.11, 0.05, 0.2, 0.17, 0.01, 0.08, 0.1, 0.06, 0.14, 0.08],
          },
        },
      },
    ],
  },
  wq2f38mm0e: {
    user: "wq2f38mm0e@gmail.com",
    portfolios: [
      {
        title: "wq2f38mm0e_0",
        portfolio: {
          returns: 41,
          risk: 17,
          sharpe: 0.8,
          weights: {
            items: [
              {
                code: "228670",
                name: "레이",
              },
              {
                code: "273060",
                name: "와이즈버즈",
              },
              {
                code: "092300",
                name: "현우산업",
              },
              {
                code: "003850",
                name: "보령제약",
              },
              {
                code: "010780",
                name: "아이에스동서",
              },
              {
                code: "009155",
                name: "삼성전기우",
              },
              {
                code: "363570",
                name: "KODEX 장기종합채권(AA-이상)액티브KAP",
              },
              {
                code: "051380",
                name: "피씨디렉트",
              },
              {
                code: "009730",
                name: "코센",
              },
              {
                code: "257990",
                name: "나우코스",
              },
            ],
            values: [0.1, 0.13, 0.15, 0.13, 0.18, 0.07, 0.05, 0.01, 0.07, 0.11],
          },
        },
      },
      {
        title: "wq2f38mm0e_1",
        portfolio: {
          returns: 28,
          risk: 93,
          sharpe: 0.3,
          weights: {
            items: [
              {
                code: "000540",
                name: "흥국화재",
              },
              {
                code: "307950",
                name: "현대오토에버",
              },
              {
                code: "015540",
                name: "쎌마테라퓨틱스",
              },
              {
                code: "123890",
                name: "한국자산신탁",
              },
              {
                code: "266470",
                name: "바이오인프라생명과학",
              },
              {
                code: "208350",
                name: "지란지교시큐리티",
              },
              {
                code: "00279K",
                name: "아모레G3우(전환)",
              },
              {
                code: "230980",
                name: "에이트원",
              },
              {
                code: "252410",
                name: "KBSTAR 200선물인버스",
              },
              {
                code: "033540",
                name: "파라텍",
              },
            ],
            values: [0.1, 0.13, 0.15, 0.13, 0.18, 0.07, 0.05, 0.01, 0.07, 0.11],
          },
        },
      },
      {
        title: "wq2f38mm0e_2",
        portfolio: {
          returns: 62,
          risk: 61,
          sharpe: 0,
          weights: {
            items: [
              {
                code: "290650",
                name: "엘앤씨바이오",
              },
              {
                code: "366330",
                name: "신한제7호스팩",
              },
              {
                code: "035080",
                name: "인터파크",
              },
              {
                code: "006140",
                name: "피제이전자",
              },
              {
                code: "011780",
                name: "금호석유",
              },
              {
                code: "251970",
                name: "펌텍코리아",
              },
              {
                code: "036930",
                name: "주성엔지니어링",
              },
              {
                code: "014470",
                name: "부방",
              },
              {
                code: "106190",
                name: "하이텍팜",
              },
              {
                code: "369370",
                name: "대신밸런스제9호스팩",
              },
            ],
            values: [0.1, 0.13, 0.15, 0.13, 0.18, 0.07, 0.05, 0.01, 0.07, 0.11],
          },
        },
      },
    ],
  },
  pislfpdco5: {
    user: "pislfpdco5@gmail.com",
    portfolios: [
      {
        title: "pislfpdco5_0",
        portfolio: {
          returns: 39,
          risk: 8,
          sharpe: 1,
          weights: {
            items: [
              {
                code: "002690",
                name: "동일제강",
              },
              {
                code: "078130",
                name: "국일제지",
              },
              {
                code: "083640",
                name: "인콘",
              },
              {
                code: "012620",
                name: "원일특강",
              },
              {
                code: "094800",
                name: "맵스리얼티1",
              },
              {
                code: "053030",
                name: "바이넥스",
              },
              {
                code: "088800",
                name: "에이스테크",
              },
              {
                code: "322310",
                name: "오로스테크놀로지",
              },
              {
                code: "277630",
                name: "TIGER 코스피",
              },
              {
                code: "364690",
                name: "KODEX 혁신기술테마액티브",
              },
            ],
            values: [0.24, 0.11, 0.13, 0.23, 0.02, 0.01, 0.04, 0.01, 0.16, 0.04],
          },
        },
      },
      {
        title: "pislfpdco5_1",
        portfolio: {
          returns: 26,
          risk: 30,
          sharpe: 0,
          weights: {
            items: [
              {
                code: "227830",
                name: "ARIRANG 코스피",
              },
              {
                code: "001560",
                name: "제일연마",
              },
              {
                code: "166400",
                name: "TIGER 200커버드콜5%OTM",
              },
              {
                code: "143210",
                name: "핸즈코퍼레이션",
              },
              {
                code: "226980",
                name: "KODEX 200 중소형",
              },
              {
                code: "285020",
                name: "KBSTAR 200철강소재",
              },
              {
                code: "004870",
                name: "티웨이홀딩스",
              },
              {
                code: "090460",
                name: "비에이치",
              },
              {
                code: "334890",
                name: "이지스밸류리츠",
              },
              {
                code: "065150",
                name: "MP그룹",
              },
            ],
            values: [0.24, 0.11, 0.13, 0.23, 0.02, 0.01, 0.04, 0.01, 0.16, 0.04],
          },
        },
      },
      {
        title: "pislfpdco5_2",
        portfolio: {
          returns: 61,
          risk: 57,
          sharpe: 0.9,
          weights: {
            items: [
              {
                code: "263810",
                name: "상신전자",
              },
              {
                code: "094360",
                name: "칩스앤미디어",
              },
              {
                code: "114460",
                name: "KINDEX 국고채3년",
              },
              {
                code: "039830",
                name: "오로라",
              },
              {
                code: "251340",
                name: "KODEX 코스닥150선물인버스",
              },
              {
                code: "298340",
                name: "ARIRANG 국채선물3년",
              },
              {
                code: "058970",
                name: "엠로",
              },
              {
                code: "011040",
                name: "경동제약",
              },
              {
                code: "145670",
                name: "KINDEX 인버스",
              },
              {
                code: "252730",
                name: "KBSTAR 모멘텀로우볼",
              },
            ],
            values: [0.24, 0.11, 0.13, 0.23, 0.02, 0.01, 0.04, 0.01, 0.16, 0.04],
          },
        },
      },
    ],
  },
  t339yq4cd5: {
    user: "t339yq4cd5@gmail.com",
    portfolios: [
      {
        title: "t339yq4cd5_0",
        portfolio: {
          returns: 95,
          risk: 52,
          sharpe: 0.8,
          weights: {
            items: [
              {
                code: "067630",
                name: "에이치엘비생명과학",
              },
              {
                code: "083790",
                name: "크리스탈지노믹스",
              },
              {
                code: "364980",
                name: "TIGER KRX2차전지K-뉴딜",
              },
              {
                code: "217480",
                name: "에스디생명공학",
              },
              {
                code: "350520",
                name: "이지스레지던스리츠",
              },
              {
                code: "052600",
                name: "한네트",
              },
              {
                code: "086460",
                name: "에스엔피제네틱스",
              },
              {
                code: "079940",
                name: "가비아",
              },
              {
                code: "005820",
                name: "원림",
              },
              {
                code: "950210",
                name: "프레스티지바이오파마",
              },
            ],
            values: [0.2, 0.1, 0.07, 0.01, 0.17, 0.06, 0.18, 0.15, 0, 0.05],
          },
        },
      },
    ],
  },
  o8xajjcp96: {
    user: "o8xajjcp96@gmail.com",
    portfolios: [
      {
        title: "o8xajjcp96_0",
        portfolio: {
          returns: 20,
          risk: 68,
          sharpe: 0.1,
          weights: {
            items: [
              {
                code: "900110",
                name: "이스트아시아홀딩스",
              },
              {
                code: "032300",
                name: "한국파마",
              },
              {
                code: "213090",
                name: "미래테크놀로지",
              },
              {
                code: "087260",
                name: "모바일어플라이언스",
              },
              {
                code: "005800",
                name: "신영와코루",
              },
              {
                code: "000640",
                name: "동아쏘시오홀딩스",
              },
              {
                code: "311690",
                name: "천랩",
              },
              {
                code: "069500",
                name: "KODEX 200",
              },
              {
                code: "253290",
                name: "KBSTAR 헬스케어채권혼합",
              },
              {
                code: "239890",
                name: "피엔에이치테크",
              },
            ],
            values: [0.12, 0.12, 0.08, 0.13, 0.13, 0.02, 0.07, 0.12, 0.1, 0.12],
          },
        },
      },
      {
        title: "o8xajjcp96_1",
        portfolio: {
          returns: 11,
          risk: 35,
          sharpe: 0.5,
          weights: {
            items: [
              {
                code: "067920",
                name: "이글루시큐리티",
              },
              {
                code: "023150",
                name: "MH에탄올",
              },
              {
                code: "045340",
                name: "토탈소프트",
              },
              {
                code: "013890",
                name: "지누스",
              },
              {
                code: "174350",
                name: "TIGER 로우볼",
              },
              {
                code: "032190",
                name: "다우데이타",
              },
              {
                code: "000640",
                name: "동아쏘시오홀딩스",
              },
              {
                code: "024940",
                name: "PN풍년",
              },
              {
                code: "000860",
                name: "강남제비스코",
              },
              {
                code: "039440",
                name: "에스티아이",
              },
            ],
            values: [0.12, 0.12, 0.08, 0.13, 0.13, 0.02, 0.07, 0.12, 0.1, 0.12],
          },
        },
      },
      {
        title: "o8xajjcp96_2",
        portfolio: {
          returns: 4,
          risk: 67,
          sharpe: 0.4,
          weights: {
            items: [
              {
                code: "243870",
                name: "굿센",
              },
              {
                code: "140610",
                name: "엔솔바이오사이언스",
              },
              {
                code: "035460",
                name: "기산텔레콤",
              },
              {
                code: "245450",
                name: "씨앤에스링크",
              },
              {
                code: "232530",
                name: "이엠티",
              },
              {
                code: "005430",
                name: "한국공항",
              },
              {
                code: "309900",
                name: "티티씨디펜스",
              },
              {
                code: "001550",
                name: "조비",
              },
              {
                code: "204270",
                name: "제이앤티씨",
              },
              {
                code: "331380",
                name: "유진스팩5호",
              },
            ],
            values: [0.12, 0.12, 0.08, 0.13, 0.13, 0.02, 0.07, 0.12, 0.1, 0.12],
          },
        },
      },
      {
        title: "o8xajjcp96_3",
        portfolio: {
          returns: 82,
          risk: 7,
          sharpe: 0.2,
          weights: {
            items: [
              {
                code: "010820",
                name: "퍼스텍",
              },
              {
                code: "003925",
                name: "남양유업우",
              },
              {
                code: "213090",
                name: "미래테크놀로지",
              },
              {
                code: "216080",
                name: "제테마",
              },
              {
                code: "238720",
                name: "KINDEX 일본Nikkei225(H)",
              },
              {
                code: "001570",
                name: "금양",
              },
              {
                code: "005300",
                name: "롯데칠성",
              },
              {
                code: "330860",
                name: "네패스아크",
              },
              {
                code: "060720",
                name: "KH바텍",
              },
              {
                code: "054620",
                name: "APS홀딩스",
              },
            ],
            values: [0.12, 0.12, 0.08, 0.13, 0.13, 0.02, 0.07, 0.12, 0.1, 0.12],
          },
        },
      },
    ],
  },
  "27n83u3ruz": {
    user: "27n83u3ruz@gmail.com",
    portfolios: [
      {
        title: "27n83u3ruz_0",
        portfolio: {
          returns: 92,
          risk: 16,
          sharpe: 0.2,
          weights: {
            items: [
              {
                code: "002320",
                name: "한진",
              },
              {
                code: "135160",
                name: "지오씨",
              },
              {
                code: "111710",
                name: "남화산업",
              },
              {
                code: "010050",
                name: "우리종금",
              },
              {
                code: "300950",
                name: "KODEX 게임산업",
              },
              {
                code: "051160",
                name: "지어소프트",
              },
              {
                code: "219130",
                name: "타이거일렉",
              },
              {
                code: "217320",
                name: "썬테크",
              },
              {
                code: "058110",
                name: "멕아이씨에스",
              },
              {
                code: "236030",
                name: "씨알푸드",
              },
            ],
            values: [0.13, 0.13, 0.06, 0.04, 0.16, 0, 0.07, 0.14, 0.11, 0.16],
          },
        },
      },
      {
        title: "27n83u3ruz_1",
        portfolio: {
          returns: 74,
          risk: 95,
          sharpe: 1.1,
          weights: {
            items: [
              {
                code: "010420",
                name: "한솔PNS",
              },
              {
                code: "014970",
                name: "삼륭물산",
              },
              {
                code: "338220",
                name: "뷰노",
              },
              {
                code: "067080",
                name: "대화제약",
              },
              {
                code: "329650",
                name: "KODEX TRF3070",
              },
              {
                code: "000050",
                name: "경방",
              },
              {
                code: "005360",
                name: "모나미",
              },
              {
                code: "250000",
                name: "보라티알",
              },
              {
                code: "004770",
                name: "써니전자",
              },
              {
                code: "264660",
                name: "씨앤지하이테크",
              },
            ],
            values: [0.13, 0.13, 0.06, 0.04, 0.16, 0, 0.07, 0.14, 0.11, 0.16],
          },
        },
      },
    ],
  },
  "0zfvrxt8x0": {
    user: "0zfvrxt8x0@gmail.com",
    portfolios: [
      {
        title: "0zfvrxt8x0_0",
        portfolio: {
          returns: 70,
          risk: 46,
          sharpe: 0.3,
          weights: {
            items: [
              {
                code: "214870",
                name: "뉴지랩파마",
              },
              {
                code: "215480",
                name: "토박스코리아",
              },
              {
                code: "001440",
                name: "대한전선",
              },
              {
                code: "034810",
                name: "해성산업",
              },
              {
                code: "373530",
                name: "ARIRANG 신흥국MSCI인버스(합성 H)",
              },
              {
                code: "152380",
                name: "KODEX 국채선물10년",
              },
              {
                code: "195980",
                name: "ARIRANG 신흥국MSCI(합성 H)",
              },
              {
                code: "329020",
                name: "오션스톤",
              },
              {
                code: "166480",
                name: "코아스템",
              },
              {
                code: "242040",
                name: "나무기술",
              },
            ],
            values: [0.08, 0.05, 0.16, 0.3, 0.05, 0.02, 0.01, 0.13, 0.12, 0.09],
          },
        },
      },
      {
        title: "0zfvrxt8x0_1",
        portfolio: {
          returns: 4,
          risk: 72,
          sharpe: 0,
          weights: {
            items: [
              {
                code: "337150",
                name: "KODEX 200exTOP",
              },
              {
                code: "078650",
                name: "코렌",
              },
              {
                code: "025890",
                name: "한국주강",
              },
              {
                code: "105010",
                name: "TIGER 라틴35",
              },
              {
                code: "226950",
                name: "올릭스",
              },
              {
                code: "004830",
                name: "덕성",
              },
              {
                code: "082850",
                name: "우리바이오",
              },
              {
                code: "009420",
                name: "한올바이오파마",
              },
              {
                code: "080530",
                name: "코디",
              },
              {
                code: "286940",
                name: "롯데정보통신",
              },
            ],
            values: [0.08, 0.05, 0.16, 0.3, 0.05, 0.02, 0.01, 0.13, 0.12, 0.09],
          },
        },
      },
      {
        title: "0zfvrxt8x0_2",
        portfolio: {
          returns: 53,
          risk: 98,
          sharpe: 1.1,
          weights: {
            items: [
              {
                code: "234690",
                name: "녹십자웰빙",
              },
              {
                code: "145720",
                name: "덴티움",
              },
              {
                code: "004565",
                name: "현대비앤지스틸우",
              },
              {
                code: "036030",
                name: "KTH",
              },
              {
                code: "253250",
                name: "KOSEF 200선물레버리지",
              },
              {
                code: "047770",
                name: "코데즈컴바인",
              },
              {
                code: "169330",
                name: "엠브레인",
              },
              {
                code: "304100",
                name: "솔트룩스",
              },
              {
                code: "036180",
                name: "지더블유바이텍",
              },
              {
                code: "080530",
                name: "코디",
              },
            ],
            values: [0.08, 0.05, 0.16, 0.3, 0.05, 0.02, 0.01, 0.13, 0.12, 0.09],
          },
        },
      },
    ],
  },
  znjryap3o2: {
    user: "znjryap3o2@gmail.com",
    portfolios: [
      {
        title: "znjryap3o2_0",
        portfolio: {
          returns: 44,
          risk: 34,
          sharpe: 0.7,
          weights: {
            items: [
              {
                code: "034020",
                name: "두산중공업",
              },
              {
                code: "302190",
                name: "TIGER 중장기국채",
              },
              {
                code: "000325",
                name: "노루홀딩스우",
              },
              {
                code: "049430",
                name: "코메론",
              },
              {
                code: "280920",
                name: "ARIRANG 주도업종",
              },
              {
                code: "011300",
                name: "성안",
              },
              {
                code: "174350",
                name: "TIGER 로우볼",
              },
              {
                code: "179900",
                name: "유티아이",
              },
              {
                code: "170790",
                name: "파이오링크",
              },
              {
                code: "018880",
                name: "한온시스템",
              },
            ],
            values: [0.11, 0.12, 0.04, 0.13, 0.09, 0.12, 0.13, 0.04, 0.11, 0.12],
          },
        },
      },
      {
        title: "znjryap3o2_1",
        portfolio: {
          returns: 60,
          risk: 75,
          sharpe: 1.2,
          weights: {
            items: [
              {
                code: "044960",
                name: "이글벳",
              },
              {
                code: "189300",
                name: "인텔리안테크",
              },
              {
                code: "368590",
                name: "KBSTAR 미국나스닥100",
              },
              {
                code: "309170",
                name: "ARIRANG KRX300IT",
              },
              {
                code: "319870",
                name: "KBSTAR KRX300미국달러선물혼합",
              },
              {
                code: "068790",
                name: "DMS",
              },
              {
                code: "082740",
                name: "HSD엔진",
              },
              {
                code: "348950",
                name: "제이알글로벌리츠",
              },
              {
                code: "006880",
                name: "신송홀딩스",
              },
              {
                code: "060250",
                name: "NHN한국사이버결제",
              },
            ],
            values: [0.11, 0.12, 0.04, 0.13, 0.09, 0.12, 0.13, 0.04, 0.11, 0.12],
          },
        },
      },
      {
        title: "znjryap3o2_2",
        portfolio: {
          returns: 21,
          risk: 92,
          sharpe: 0.4,
          weights: {
            items: [
              {
                code: "192400",
                name: "쿠쿠홀딩스",
              },
              {
                code: "130580",
                name: "나이스디앤비",
              },
              {
                code: "270870",
                name: "뉴트리",
              },
              {
                code: "180640",
                name: "한진칼",
              },
              {
                code: "039860",
                name: "나노엔텍",
              },
              {
                code: "007120",
                name: "미래아이앤지",
              },
              {
                code: "076080",
                name: "웰크론한텍",
              },
              {
                code: "077360",
                name: "덕산하이메탈",
              },
              {
                code: "330860",
                name: "네패스아크",
              },
              {
                code: "063440",
                name: "SM Life Design",
              },
            ],
            values: [0.11, 0.12, 0.04, 0.13, 0.09, 0.12, 0.13, 0.04, 0.11, 0.12],
          },
        },
      },
      {
        title: "znjryap3o2_3",
        portfolio: {
          returns: 98,
          risk: 56,
          sharpe: 0.5,
          weights: {
            items: [
              {
                code: "086250",
                name: "이노와이즈",
              },
              {
                code: "005030",
                name: "부산주공",
              },
              {
                code: "084110",
                name: "휴온스글로벌",
              },
              {
                code: "202960",
                name: "판도라티비",
              },
              {
                code: "179290",
                name: "엠아이텍",
              },
              {
                code: "151860",
                name: "KG ETS",
              },
              {
                code: "950110",
                name: "SBI핀테크솔루션즈",
              },
              {
                code: "127160",
                name: "매직마이크로",
              },
              {
                code: "077360",
                name: "덕산하이메탈",
              },
              {
                code: "307950",
                name: "현대오토에버",
              },
            ],
            values: [0.11, 0.12, 0.04, 0.13, 0.09, 0.12, 0.13, 0.04, 0.11, 0.12],
          },
        },
      },
    ],
  },
  h6rphtjucq: {
    user: "h6rphtjucq@gmail.com",
    portfolios: [
      {
        title: "h6rphtjucq_0",
        portfolio: {
          returns: 23,
          risk: 2,
          sharpe: 0.9,
          weights: {
            items: [
              {
                code: "005360",
                name: "모나미",
              },
              {
                code: "336160",
                name: "KBSTAR 금융채액티브",
              },
              {
                code: "016100",
                name: "리더스코스메틱",
              },
              {
                code: "950110",
                name: "SBI핀테크솔루션즈",
              },
              {
                code: "073070",
                name: "에이팸",
              },
              {
                code: "007310",
                name: "오뚜기",
              },
              {
                code: "078940",
                name: "코드네이처",
              },
              {
                code: "003240",
                name: "태광산업",
              },
              {
                code: "037760",
                name: "쎄니트",
              },
              {
                code: "381170",
                name: "TIGER 미국테크TOP10 INDXX",
              },
            ],
            values: [0.11, 0.11, 0.09, 0.12, 0.1, 0.09, 0.03, 0.12, 0.12, 0.11],
          },
        },
      },
      {
        title: "h6rphtjucq_1",
        portfolio: {
          returns: 95,
          risk: 0,
          sharpe: 0.6,
          weights: {
            items: [
              {
                code: "138070",
                name: "신진에스엠",
              },
              {
                code: "038530",
                name: "골드퍼시픽",
              },
              {
                code: "009320",
                name: "대우부품",
              },
              {
                code: "294630",
                name: "서남",
              },
              {
                code: "297090",
                name: "씨에스베어링",
              },
              {
                code: "348150",
                name: "고바이오랩",
              },
              {
                code: "005830",
                name: "DB손해보험",
              },
              {
                code: "359210",
                name: "KODEX 코스피TR",
              },
              {
                code: "003620",
                name: "쌍용차",
              },
              {
                code: "007575",
                name: "일양약품우",
              },
            ],
            values: [0.11, 0.11, 0.09, 0.12, 0.1, 0.09, 0.03, 0.12, 0.12, 0.11],
          },
        },
      },
    ],
  },
  mdscbbpt0h: {
    user: "mdscbbpt0h@gmail.com",
    portfolios: [
      {
        title: "mdscbbpt0h_0",
        portfolio: {
          returns: 37,
          risk: 41,
          sharpe: 1.2,
          weights: {
            items: [
              {
                code: "121440",
                name: "골프존뉴딘홀딩스",
              },
              {
                code: "322190",
                name: "에이스캠퍼",
              },
              {
                code: "228850",
                name: "레이언스",
              },
              {
                code: "317530",
                name: "캐리소프트",
              },
              {
                code: "224020",
                name: "에스케이씨에스",
              },
              {
                code: "322310",
                name: "오로스테크놀로지",
              },
              {
                code: "275290",
                name: "KODEX MSCI밸류",
              },
              {
                code: "236200",
                name: "슈프리마",
              },
              {
                code: "086980",
                name: "쇼박스",
              },
              {
                code: "327610",
                name: "펨토바이오메드",
              },
            ],
            values: [0.21, 0.01, 0.15, 0.08, 0.14, 0.07, 0.01, 0.14, 0.03, 0.17],
          },
        },
      },
      {
        title: "mdscbbpt0h_1",
        portfolio: {
          returns: 6,
          risk: 95,
          sharpe: 1.3,
          weights: {
            items: [
              {
                code: "065370",
                name: "위세아이텍",
              },
              {
                code: "208890",
                name: "미래엔에듀파트너",
              },
              {
                code: "033170",
                name: "시그네틱스",
              },
              {
                code: "038540",
                name: "상상인",
              },
              {
                code: "900070",
                name: "글로벌에스엠",
              },
              {
                code: "047080",
                name: "한빛소프트",
              },
              {
                code: "102940",
                name: "코오롱생명과학",
              },
              {
                code: "061970",
                name: "엘비세미콘",
              },
              {
                code: "008110",
                name: "대동전자",
              },
              {
                code: "014620",
                name: "성광벤드",
              },
            ],
            values: [0.21, 0.01, 0.15, 0.08, 0.14, 0.07, 0.01, 0.14, 0.03, 0.17],
          },
        },
      },
      {
        title: "mdscbbpt0h_2",
        portfolio: {
          returns: 16,
          risk: 84,
          sharpe: 0.1,
          weights: {
            items: [
              {
                code: "300720",
                name: "한일시멘트",
              },
              {
                code: "037560",
                name: "LG헬로비전",
              },
              {
                code: "230980",
                name: "에이트원",
              },
              {
                code: "045100",
                name: "한양이엔지",
              },
              {
                code: "009150",
                name: "삼성전기",
              },
              {
                code: "101060",
                name: "SBS미디어홀딩스",
              },
              {
                code: "057880",
                name: "필로시스헬스케어",
              },
              {
                code: "222110",
                name: "팬젠",
              },
              {
                code: "000390",
                name: "삼화페인트",
              },
              {
                code: "298540",
                name: "더네이쳐홀딩스",
              },
            ],
            values: [0.21, 0.01, 0.15, 0.08, 0.14, 0.07, 0.01, 0.14, 0.03, 0.17],
          },
        },
      },
      {
        title: "mdscbbpt0h_3",
        portfolio: {
          returns: 60,
          risk: 31,
          sharpe: 0.1,
          weights: {
            items: [
              {
                code: "007210",
                name: "벽산",
              },
              {
                code: "253240",
                name: "KOSEF 200선물인버스",
              },
              {
                code: "036800",
                name: "나이스정보통신",
              },
              {
                code: "238120",
                name: "얼라인드",
              },
              {
                code: "326240",
                name: "KBSTAR IT플러스",
              },
              {
                code: "109080",
                name: "옵티시스",
              },
              {
                code: "267060",
                name: "명진홀딩스",
              },
              {
                code: "107640",
                name: "한중엔시에스",
              },
              {
                code: "122690",
                name: "서진오토모티브",
              },
              {
                code: "149980",
                name: "하이로닉",
              },
            ],
            values: [0.21, 0.01, 0.15, 0.08, 0.14, 0.07, 0.01, 0.14, 0.03, 0.17],
          },
        },
      },
    ],
  },
  wvf63zt1dy: {
    user: "wvf63zt1dy@gmail.com",
    portfolios: [
      {
        title: "wvf63zt1dy_0",
        portfolio: {
          returns: 32,
          risk: 2,
          sharpe: 1.1,
          weights: {
            items: [
              {
                code: "092870",
                name: "엑시콘",
              },
              {
                code: "121600",
                name: "나노신소재",
              },
              {
                code: "033230",
                name: "인성정보",
              },
              {
                code: "115390",
                name: "락앤락",
              },
              {
                code: "301410",
                name: "ARIRANG 코스닥150선물인버스",
              },
              {
                code: "183700",
                name: "KBSTAR 채권혼합",
              },
              {
                code: "192650",
                name: "드림텍",
              },
              {
                code: "086790",
                name: "하나금융지주",
              },
              {
                code: "006805",
                name: "미래에셋증권우",
              },
              {
                code: "008350",
                name: "남선알미늄",
              },
            ],
            values: [0.02, 0.22, 0.03, 0.12, 0.06, 0.05, 0.2, 0.09, 0.13, 0.08],
          },
        },
      },
      {
        title: "wvf63zt1dy_1",
        portfolio: {
          returns: 60,
          risk: 58,
          sharpe: 0.3,
          weights: {
            items: [
              {
                code: "046970",
                name: "우리로",
              },
              {
                code: "292500",
                name: "SMART KRX300",
              },
              {
                code: "005860",
                name: "한일사료",
              },
              {
                code: "222080",
                name: "씨아이에스",
              },
              {
                code: "300280",
                name: "KBSTAR 중소형모멘텀로우볼",
              },
              {
                code: "088800",
                name: "에이스테크",
              },
              {
                code: "023760",
                name: "한국캐피탈",
              },
              {
                code: "225800",
                name: "KOSEF 미국달러선물레버리지",
              },
              {
                code: "011150",
                name: "CJ씨푸드",
              },
              {
                code: "028300",
                name: "에이치엘비",
              },
            ],
            values: [0.02, 0.22, 0.03, 0.12, 0.06, 0.05, 0.2, 0.09, 0.13, 0.08],
          },
        },
      },
      {
        title: "wvf63zt1dy_2",
        portfolio: {
          returns: 88,
          risk: 28,
          sharpe: 0.9,
          weights: {
            items: [
              {
                code: "000590",
                name: "CS홀딩스",
              },
              {
                code: "139240",
                name: "TIGER 200 철강소재",
              },
              {
                code: "119850",
                name: "지엔씨에너지",
              },
              {
                code: "315930",
                name: "KODEX Top5PlusTR",
              },
              {
                code: "277810",
                name: "레인보우로보틱스",
              },
              {
                code: "183700",
                name: "KBSTAR 채권혼합",
              },
              {
                code: "027740",
                name: "마니커",
              },
              {
                code: "002360",
                name: "SH에너지화학",
              },
              {
                code: "008350",
                name: "남선알미늄",
              },
              {
                code: "006050",
                name: "국영지앤엠",
              },
            ],
            values: [0.02, 0.22, 0.03, 0.12, 0.06, 0.05, 0.2, 0.09, 0.13, 0.08],
          },
        },
      },
      {
        title: "wvf63zt1dy_3",
        portfolio: {
          returns: 91,
          risk: 71,
          sharpe: 1.3,
          weights: {
            items: [
              {
                code: "252650",
                name: "KODEX 200동일가중",
              },
              {
                code: "244880",
                name: "나눔테크",
              },
              {
                code: "072870",
                name: "메가스터디",
              },
              {
                code: "131100",
                name: "스카이이앤엠",
              },
              {
                code: "014470",
                name: "부방",
              },
              {
                code: "274090",
                name: "켄코아에어로스페이스",
              },
              {
                code: "028670",
                name: "팬오션",
              },
              {
                code: "095660",
                name: "네오위즈",
              },
              {
                code: "171010",
                name: "램테크놀러지",
              },
              {
                code: "066410",
                name: "버킷스튜디오",
              },
            ],
            values: [0.02, 0.22, 0.03, 0.12, 0.06, 0.05, 0.2, 0.09, 0.13, 0.08],
          },
        },
      },
    ],
  },
  r9bbvmu2j2: {
    user: "r9bbvmu2j2@gmail.com",
    portfolios: [
      {
        title: "r9bbvmu2j2_0",
        portfolio: {
          returns: 89,
          risk: 24,
          sharpe: 1.2,
          weights: {
            items: [
              {
                code: "008290",
                name: "원풍물산",
              },
              {
                code: "042940",
                name: "상지카일룸",
              },
              {
                code: "000270",
                name: "기아",
              },
              {
                code: "131100",
                name: "스카이이앤엠",
              },
              {
                code: "065060",
                name: "지엔코",
              },
              {
                code: "289080",
                name: "SV인베스트먼트",
              },
              {
                code: "115610",
                name: "이미지스",
              },
              {
                code: "035080",
                name: "인터파크",
              },
              {
                code: "000150",
                name: "두산",
              },
              {
                code: "322400",
                name: "HANARO e커머스",
              },
            ],
            values: [0.1, 0.07, 0.14, 0.19, 0.08, 0.13, 0.13, 0.01, 0.15, 0.01],
          },
        },
      },
      {
        title: "r9bbvmu2j2_1",
        portfolio: {
          returns: 23,
          risk: 25,
          sharpe: 0.5,
          weights: {
            items: [
              {
                code: "080520",
                name: "오디텍",
              },
              {
                code: "002700",
                name: "신일전자",
              },
              {
                code: "118990",
                name: "모트렉스",
              },
              {
                code: "053110",
                name: "소리바다",
              },
              {
                code: "900270",
                name: "헝셩그룹",
              },
              {
                code: "068290",
                name: "삼성출판사",
              },
              {
                code: "321260",
                name: "유진스팩4호",
              },
              {
                code: "049430",
                name: "코메론",
              },
              {
                code: "046120",
                name: "오르비텍",
              },
              {
                code: "272210",
                name: "한화시스템",
              },
            ],
            values: [0.1, 0.07, 0.14, 0.19, 0.08, 0.13, 0.13, 0.01, 0.15, 0.01],
          },
        },
      },
      {
        title: "r9bbvmu2j2_2",
        portfolio: {
          returns: 62,
          risk: 64,
          sharpe: 0,
          weights: {
            items: [
              {
                code: "004990",
                name: "롯데지주",
              },
              {
                code: "277070",
                name: "린드먼아시아",
              },
              {
                code: "263700",
                name: "케어랩스",
              },
              {
                code: "223190",
                name: "KODEX 200가치저변동",
              },
              {
                code: "264900",
                name: "크라운제과",
              },
              {
                code: "302440",
                name: "SK바이오사이언스",
              },
              {
                code: "090460",
                name: "비에이치",
              },
              {
                code: "311690",
                name: "천랩",
              },
              {
                code: "277640",
                name: "TIGER 코스피대형주",
              },
              {
                code: "223250",
                name: "드림씨아이에스",
              },
            ],
            values: [0.1, 0.07, 0.14, 0.19, 0.08, 0.13, 0.13, 0.01, 0.15, 0.01],
          },
        },
      },
      {
        title: "r9bbvmu2j2_3",
        portfolio: {
          returns: 51,
          risk: 92,
          sharpe: 0.9,
          weights: {
            items: [
              {
                code: "304100",
                name: "솔트룩스",
              },
              {
                code: "223310",
                name: "경남제약헬스케어",
              },
              {
                code: "208860",
                name: "엔지스테크널러지",
              },
              {
                code: "292130",
                name: "TIGER 중소형성장",
              },
              {
                code: "185190",
                name: "수프로",
              },
              {
                code: "332620",
                name: "ARIRANG 미국장기우량회사채",
              },
              {
                code: "087260",
                name: "모바일어플라이언스",
              },
              {
                code: "064260",
                name: "다날",
              },
              {
                code: "250030",
                name: "진코스텍",
              },
              {
                code: "023960",
                name: "에쓰씨엔지니어링",
              },
            ],
            values: [0.1, 0.07, 0.14, 0.19, 0.08, 0.13, 0.13, 0.01, 0.15, 0.01],
          },
        },
      },
    ],
  },
  "7oi10m6xdq": {
    user: "7oi10m6xdq@gmail.com",
    portfolios: [
      {
        title: "7oi10m6xdq_0",
        portfolio: {
          returns: 17,
          risk: 44,
          sharpe: 0.6,
          weights: {
            items: [
              {
                code: "005965",
                name: "동부건설우",
              },
              {
                code: "102260",
                name: "동성코퍼레이션",
              },
              {
                code: "298380",
                name: "에이비엘바이오",
              },
              {
                code: "009275",
                name: "신원우",
              },
              {
                code: "122630",
                name: "KODEX 레버리지",
              },
              {
                code: "093320",
                name: "케이아이엔엑스",
              },
              {
                code: "315960",
                name: "KBSTAR 대형고배당10TR",
              },
              {
                code: "181710",
                name: "NHN",
              },
              {
                code: "058450",
                name: "일야",
              },
              {
                code: "290080",
                name: "KBSTAR 200고배당커버드콜ATM",
              },
            ],
            values: [0, 0.11, 0.11, 0.08, 0.05, 0.21, 0.07, 0.1, 0.16, 0.11],
          },
        },
      },
      {
        title: "7oi10m6xdq_1",
        portfolio: {
          returns: 8,
          risk: 41,
          sharpe: 0.3,
          weights: {
            items: [
              {
                code: "016380",
                name: "KG동부제철",
              },
              {
                code: "067990",
                name: "도이치모터스",
              },
              {
                code: "353810",
                name: "이지바이오",
              },
              {
                code: "150900",
                name: "파수",
              },
              {
                code: "378850",
                name: "화승알앤에이",
              },
              {
                code: "089590",
                name: "제주항공",
              },
              {
                code: "060900",
                name: "대한그린파워",
              },
              {
                code: "006920",
                name: "모헨즈",
              },
              {
                code: "285130",
                name: "SK케미칼",
              },
              {
                code: "084680",
                name: "이월드",
              },
            ],
            values: [0, 0.11, 0.11, 0.08, 0.05, 0.21, 0.07, 0.1, 0.16, 0.11],
          },
        },
      },
    ],
  },
  wbh4gzd3uu: {
    user: "wbh4gzd3uu@gmail.com",
    portfolios: [
      {
        title: "wbh4gzd3uu_0",
        portfolio: {
          returns: 57,
          risk: 85,
          sharpe: 1.2,
          weights: {
            items: [
              {
                code: "220260",
                name: "켐트로스",
              },
              {
                code: "105780",
                name: "KBSTAR 5대그룹주",
              },
              {
                code: "224880",
                name: "SGA클라우드서비스",
              },
              {
                code: "002025",
                name: "코오롱우",
              },
              {
                code: "008500",
                name: "일정실업",
              },
              {
                code: "300080",
                name: "플리토",
              },
              {
                code: "051390",
                name: "YW",
              },
              {
                code: "319870",
                name: "KBSTAR KRX300미국달러선물혼합",
              },
              {
                code: "058610",
                name: "에스피지",
              },
              {
                code: "266470",
                name: "바이오인프라생명과학",
              },
            ],
            values: [0.07, 0.02, 0.04, 0.21, 0.08, 0.04, 0.21, 0.14, 0.18, 0.01],
          },
        },
      },
      {
        title: "wbh4gzd3uu_1",
        portfolio: {
          returns: 11,
          risk: 34,
          sharpe: 1,
          weights: {
            items: [
              {
                code: "270520",
                name: "지엔원에너지",
              },
              {
                code: "192400",
                name: "쿠쿠홀딩스",
              },
              {
                code: "005389",
                name: "현대차3우B",
              },
              {
                code: "318020",
                name: "포인트모바일",
              },
              {
                code: "117680",
                name: "KODEX 철강",
              },
              {
                code: "230480",
                name: "KOSEF 미국달러선물인버스2X",
              },
              {
                code: "284620",
                name: "카이노스메드",
              },
              {
                code: "094820",
                name: "일진파워",
              },
              {
                code: "013120",
                name: "동원개발",
              },
              {
                code: "086250",
                name: "이노와이즈",
              },
            ],
            values: [0.07, 0.02, 0.04, 0.21, 0.08, 0.04, 0.21, 0.14, 0.18, 0.01],
          },
        },
      },
      {
        title: "wbh4gzd3uu_2",
        portfolio: {
          returns: 80,
          risk: 18,
          sharpe: 0.7,
          weights: {
            items: [
              {
                code: "236810",
                name: "엔비티",
              },
              {
                code: "006570",
                name: "대림통상",
              },
              {
                code: "226380",
                name: "KINDEX Fn성장소비주도주",
              },
              {
                code: "089790",
                name: "제이티",
              },
              {
                code: "349720",
                name: "이베스트스팩5호",
              },
              {
                code: "292190",
                name: "KODEX KRX300",
              },
              {
                code: "900100",
                name: "뉴프라이드",
              },
              {
                code: "121440",
                name: "골프존뉴딘홀딩스",
              },
              {
                code: "078930",
                name: "GS",
              },
              {
                code: "056000",
                name: "COWON",
              },
            ],
            values: [0.07, 0.02, 0.04, 0.21, 0.08, 0.04, 0.21, 0.14, 0.18, 0.01],
          },
        },
      },
      {
        title: "wbh4gzd3uu_3",
        portfolio: {
          returns: 97,
          risk: 40,
          sharpe: 0.1,
          weights: {
            items: [
              {
                code: "067170",
                name: "오텍",
              },
              {
                code: "138910",
                name: "KODEX 구리선물(H)",
              },
              {
                code: "014620",
                name: "성광벤드",
              },
              {
                code: "016600",
                name: "큐캐피탈",
              },
              {
                code: "112610",
                name: "씨에스윈드",
              },
              {
                code: "078600",
                name: "대주전자재료",
              },
              {
                code: "006340",
                name: "대원전선",
              },
              {
                code: "153360",
                name: "하이골드3호",
              },
              {
                code: "318410",
                name: "비비씨",
              },
              {
                code: "900280",
                name: "골든센츄리",
              },
            ],
            values: [0.07, 0.02, 0.04, 0.21, 0.08, 0.04, 0.21, 0.14, 0.18, 0.01],
          },
        },
      },
    ],
  },
  y2a5ubbz76: {
    user: "y2a5ubbz76@gmail.com",
    portfolios: [
      {
        title: "y2a5ubbz76_0",
        portfolio: {
          returns: 18,
          risk: 9,
          sharpe: 0.1,
          weights: {
            items: [
              {
                code: "065660",
                name: "안트로젠",
              },
              {
                code: "034220",
                name: "LG디스플레이",
              },
              {
                code: "148780",
                name: "비플라이소프트",
              },
              {
                code: "317530",
                name: "캐리소프트",
              },
              {
                code: "220100",
                name: "퓨쳐켐",
              },
              {
                code: "243070",
                name: "휴온스",
              },
              {
                code: "306520",
                name: "HANARO 200선물인버스",
              },
              {
                code: "236810",
                name: "엔비티",
              },
              {
                code: "227830",
                name: "ARIRANG 코스피",
              },
              {
                code: "064820",
                name: "케이프",
              },
            ],
            values: [0.13, 0.13, 0.12, 0.09, 0.02, 0.23, 0.03, 0.03, 0.09, 0.15],
          },
        },
      },
      {
        title: "y2a5ubbz76_1",
        portfolio: {
          returns: 85,
          risk: 74,
          sharpe: 0.1,
          weights: {
            items: [
              {
                code: "066575",
                name: "LG전자우",
              },
              {
                code: "302920",
                name: "더콘텐츠온",
              },
              {
                code: "000145",
                name: "하이트진로홀딩스우",
              },
              {
                code: "226400",
                name: "오스테오닉",
              },
              {
                code: "228670",
                name: "레이",
              },
              {
                code: "002780",
                name: "진흥기업",
              },
              {
                code: "104460",
                name: "디와이피엔에프",
              },
              {
                code: "051630",
                name: "진양화학",
              },
              {
                code: "120115",
                name: "코오롱인더우",
              },
              {
                code: "138230",
                name: "KOSEF 미국달러선물",
              },
            ],
            values: [0.13, 0.13, 0.12, 0.09, 0.02, 0.23, 0.03, 0.03, 0.09, 0.15],
          },
        },
      },
      {
        title: "y2a5ubbz76_2",
        portfolio: {
          returns: 61,
          risk: 72,
          sharpe: 1.1,
          weights: {
            items: [
              {
                code: "057540",
                name: "옴니시스템",
              },
              {
                code: "026150",
                name: "특수건설",
              },
              {
                code: "000080",
                name: "하이트진로",
              },
              {
                code: "291230",
                name: "삼성스팩2호",
              },
              {
                code: "331910",
                name: "KOSEF Fn중소형",
              },
              {
                code: "084730",
                name: "팅크웨어",
              },
              {
                code: "000670",
                name: "영풍",
              },
              {
                code: "00088K",
                name: "한화3우B",
              },
              {
                code: "051980",
                name: "센트럴바이오",
              },
              {
                code: "001725",
                name: "신영증권우",
              },
            ],
            values: [0.13, 0.13, 0.12, 0.09, 0.02, 0.23, 0.03, 0.03, 0.09, 0.15],
          },
        },
      },
    ],
  },
  "9aa0sj5sou": {
    user: "9aa0sj5sou@gmail.com",
    portfolios: [
      {
        title: "9aa0sj5sou_0",
        portfolio: {
          returns: 41,
          risk: 8,
          sharpe: 0.7,
          weights: {
            items: [
              {
                code: "217600",
                name: "켐온",
              },
              {
                code: "033600",
                name: "럭슬",
              },
              {
                code: "049720",
                name: "고려신용정보",
              },
              {
                code: "375270",
                name: "KBSTAR 글로벌데이터센터리츠나스닥(합성)",
              },
              {
                code: "336060",
                name: "유안타제5호스팩",
              },
              {
                code: "251600",
                name: "ARIRANG 고배당주채권혼합",
              },
              {
                code: "161390",
                name: "한국타이어앤테크놀로지",
              },
              {
                code: "036620",
                name: "감성코퍼레이션",
              },
              {
                code: "356540",
                name: "KINDEX KIS종합채권(AA-이상)액티브",
              },
              {
                code: "047560",
                name: "이스트소프트",
              },
            ],
            values: [0.09, 0.1, 0.04, 0.01, 0.16, 0.05, 0.14, 0.19, 0.12, 0.1],
          },
        },
      },
      {
        title: "9aa0sj5sou_1",
        portfolio: {
          returns: 46,
          risk: 51,
          sharpe: 0.3,
          weights: {
            items: [
              {
                code: "024090",
                name: "디씨엠",
              },
              {
                code: "307510",
                name: "TIGER 의료기기",
              },
              {
                code: "273140",
                name: "KODEX 단기변동금리부채권액티브",
              },
              {
                code: "003547",
                name: "대신증권2우B",
              },
              {
                code: "066430",
                name: "와이오엠",
              },
              {
                code: "033560",
                name: "블루콤",
              },
              {
                code: "298050",
                name: "효성첨단소재",
              },
              {
                code: "004255",
                name: "NPC우",
              },
              {
                code: "066410",
                name: "버킷스튜디오",
              },
              {
                code: "170790",
                name: "파이오링크",
              },
            ],
            values: [0.09, 0.1, 0.04, 0.01, 0.16, 0.05, 0.14, 0.19, 0.12, 0.1],
          },
        },
      },
    ],
  },
  "3uk0cfp2sn": {
    user: "3uk0cfp2sn@gmail.com",
    portfolios: [
      {
        title: "3uk0cfp2sn_0",
        portfolio: {
          returns: 22,
          risk: 92,
          sharpe: 0.3,
          weights: {
            items: [
              {
                code: "079810",
                name: "디이엔티",
              },
              {
                code: "33626L",
                name: "두산퓨얼셀2우B",
              },
              {
                code: "040420",
                name: "정상제이엘에스",
              },
              {
                code: "101140",
                name: "인바이오젠",
              },
              {
                code: "073110",
                name: "엘엠에스",
              },
              {
                code: "241690",
                name: "유니테크노",
              },
              {
                code: "306520",
                name: "HANARO 200선물인버스",
              },
              {
                code: "237370",
                name: "KODEX 배당성장채권혼합",
              },
              {
                code: "333940",
                name: "ARIRANG KS로우볼가중TR",
              },
              {
                code: "057030",
                name: "YBM넷",
              },
            ],
            values: [0.15, 0.03, 0.12, 0.03, 0.15, 0.15, 0.01, 0.13, 0.05, 0.17],
          },
        },
      },
      {
        title: "3uk0cfp2sn_1",
        portfolio: {
          returns: 29,
          risk: 98,
          sharpe: 0.7,
          weights: {
            items: [
              {
                code: "300640",
                name: "KBSTAR 게임테마",
              },
              {
                code: "065650",
                name: "메디프론",
              },
              {
                code: "090710",
                name: "휴림로봇",
              },
              {
                code: "067390",
                name: "아스트",
              },
              {
                code: "085660",
                name: "차바이오텍",
              },
              {
                code: "068330",
                name: "일신바이오",
              },
              {
                code: "078160",
                name: "메디포스트",
              },
              {
                code: "292050",
                name: "KBSTAR KRX300",
              },
              {
                code: "900070",
                name: "글로벌에스엠",
              },
              {
                code: "003800",
                name: "에이스침대",
              },
            ],
            values: [0.15, 0.03, 0.12, 0.03, 0.15, 0.15, 0.01, 0.13, 0.05, 0.17],
          },
        },
      },
      {
        title: "3uk0cfp2sn_2",
        portfolio: {
          returns: 83,
          risk: 52,
          sharpe: 0.6,
          weights: {
            items: [
              {
                code: "068270",
                name: "셀트리온",
              },
              {
                code: "054220",
                name: "비츠로시스",
              },
              {
                code: "271060",
                name: "KODEX 3대농산물선물(H)",
              },
              {
                code: "000520",
                name: "삼일제약",
              },
              {
                code: "211560",
                name: "TIGER 배당성장",
              },
              {
                code: "128660",
                name: "피제이메탈",
              },
              {
                code: "059120",
                name: "아진엑스텍",
              },
              {
                code: "011560",
                name: "세보엠이씨",
              },
              {
                code: "312610",
                name: "에이에프더블류",
              },
              {
                code: "133820",
                name: "화인베스틸",
              },
            ],
            values: [0.15, 0.03, 0.12, 0.03, 0.15, 0.15, 0.01, 0.13, 0.05, 0.17],
          },
        },
      },
      {
        title: "3uk0cfp2sn_3",
        portfolio: {
          returns: 31,
          risk: 93,
          sharpe: 0.4,
          weights: {
            items: [
              {
                code: "054540",
                name: "삼영엠텍",
              },
              {
                code: "036710",
                name: "심텍홀딩스",
              },
              {
                code: "170920",
                name: "엘티씨",
              },
              {
                code: "245620",
                name: "EDGC",
              },
              {
                code: "085660",
                name: "차바이오텍",
              },
              {
                code: "310870",
                name: "한국제8호스팩",
              },
              {
                code: "051980",
                name: "센트럴바이오",
              },
              {
                code: "33637K",
                name: "솔루스첨단소재1우",
              },
              {
                code: "096690",
                name: "에이루트",
              },
              {
                code: "289220",
                name: "자이언트스텝",
              },
            ],
            values: [0.15, 0.03, 0.12, 0.03, 0.15, 0.15, 0.01, 0.13, 0.05, 0.17],
          },
        },
      },
    ],
  },
  bbw58y5aw8: {
    user: "bbw58y5aw8@gmail.com",
    portfolios: [
      {
        title: "bbw58y5aw8_0",
        portfolio: {
          returns: 90,
          risk: 53,
          sharpe: 0.1,
          weights: {
            items: [
              {
                code: "176710",
                name: "파워 중기국고채",
              },
              {
                code: "261060",
                name: "TIGER 코스닥150IT",
              },
              {
                code: "174350",
                name: "TIGER 로우볼",
              },
              {
                code: "014915",
                name: "성문전자우",
              },
              {
                code: "035200",
                name: "프럼파스트",
              },
              {
                code: "047050",
                name: "포스코인터내셔널",
              },
              {
                code: "003080",
                name: "성보화학",
              },
              {
                code: "353490",
                name: "미래에셋대우스팩 5호",
              },
              {
                code: "102120",
                name: "어보브반도체",
              },
              {
                code: "255440",
                name: "야스",
              },
            ],
            values: [0.14, 0.13, 0.07, 0.07, 0.14, 0.14, 0.12, 0.1, 0.07, 0.01],
          },
        },
      },
      {
        title: "bbw58y5aw8_1",
        portfolio: {
          returns: 70,
          risk: 36,
          sharpe: 0.1,
          weights: {
            items: [
              {
                code: "017550",
                name: "수산중공업",
              },
              {
                code: "199290",
                name: "바이오프로테크",
              },
              {
                code: "091990",
                name: "셀트리온헬스케어",
              },
              {
                code: "238500",
                name: "로보쓰리",
              },
              {
                code: "357550",
                name: "석경에이티",
              },
              {
                code: "082660",
                name: "코스나인",
              },
              {
                code: "003670",
                name: "포스코케미칼",
              },
              {
                code: "191420",
                name: "테고사이언스",
              },
              {
                code: "216050",
                name: "인크로스",
              },
              {
                code: "335810",
                name: "프리시젼바이오",
              },
            ],
            values: [0.14, 0.13, 0.07, 0.07, 0.14, 0.14, 0.12, 0.1, 0.07, 0.01],
          },
        },
      },
    ],
  },
  fs8ixmdyq9: {
    user: "fs8ixmdyq9@gmail.com",
    portfolios: [
      {
        title: "fs8ixmdyq9_0",
        portfolio: {
          returns: 7,
          risk: 78,
          sharpe: 0,
          weights: {
            items: [
              {
                code: "017000",
                name: "신원종합개발",
              },
              {
                code: "052020",
                name: "에스티큐브",
              },
              {
                code: "088350",
                name: "한화생명",
              },
              {
                code: "030610",
                name: "교보증권",
              },
              {
                code: "005290",
                name: "동진쎄미켐",
              },
              {
                code: "310200",
                name: "애니플러스",
              },
              {
                code: "000075",
                name: "삼양홀딩스우",
              },
              {
                code: "076080",
                name: "웰크론한텍",
              },
              {
                code: "114190",
                name: "강원",
              },
              {
                code: "071840",
                name: "롯데하이마트",
              },
            ],
            values: [0.16, 0.05, 0.08, 0.1, 0.06, 0.1, 0.11, 0.09, 0.14, 0.11],
          },
        },
      },
      {
        title: "fs8ixmdyq9_1",
        portfolio: {
          returns: 21,
          risk: 83,
          sharpe: 0,
          weights: {
            items: [
              {
                code: "032830",
                name: "삼성생명",
              },
              {
                code: "084695",
                name: "대상홀딩스우",
              },
              {
                code: "280360",
                name: "롯데제과",
              },
              {
                code: "266870",
                name: "파워풀엑스",
              },
              {
                code: "145720",
                name: "덴티움",
              },
              {
                code: "160550",
                name: "NEW",
              },
              {
                code: "054410",
                name: "케이피티유",
              },
              {
                code: "023410",
                name: "유진기업",
              },
              {
                code: "067010",
                name: "이씨에스",
              },
              {
                code: "054620",
                name: "APS홀딩스",
              },
            ],
            values: [0.16, 0.05, 0.08, 0.1, 0.06, 0.1, 0.11, 0.09, 0.14, 0.11],
          },
        },
      },
      {
        title: "fs8ixmdyq9_2",
        portfolio: {
          returns: 20,
          risk: 52,
          sharpe: 0.9,
          weights: {
            items: [
              {
                code: "017390",
                name: "서울가스",
              },
              {
                code: "047820",
                name: "초록뱀미디어",
              },
              {
                code: "103230",
                name: "에스앤더블류",
              },
              {
                code: "096040",
                name: "이트론",
              },
              {
                code: "154040",
                name: "솔루에타",
              },
              {
                code: "276240",
                name: "엘리비젼",
              },
              {
                code: "229000",
                name: "젠큐릭스",
              },
              {
                code: "067010",
                name: "이씨에스",
              },
              {
                code: "336260",
                name: "두산퓨얼셀",
              },
              {
                code: "033790",
                name: "스카이문스테크놀로지",
              },
            ],
            values: [0.16, 0.05, 0.08, 0.1, 0.06, 0.1, 0.11, 0.09, 0.14, 0.11],
          },
        },
      },
    ],
  },
  gagxdggdbf: {
    user: "gagxdggdbf@gmail.com",
    portfolios: [
      {
        title: "gagxdggdbf_0",
        portfolio: {
          returns: 38,
          risk: 12,
          sharpe: 1,
          weights: {
            items: [
              {
                code: "290550",
                name: "디케이티",
              },
              {
                code: "024800",
                name: "유성티엔에스",
              },
              {
                code: "199800",
                name: "툴젠",
              },
              {
                code: "337150",
                name: "KODEX 200exTOP",
              },
              {
                code: "111820",
                name: "지와이커머스",
              },
              {
                code: "229000",
                name: "젠큐릭스",
              },
              {
                code: "282690",
                name: "동아타이어",
              },
              {
                code: "021040",
                name: "대호특수강",
              },
              {
                code: "099750",
                name: "이지케어텍",
              },
              {
                code: "028080",
                name: "휴맥스홀딩스",
              },
            ],
            values: [0.11, 0.08, 0.14, 0.18, 0.06, 0.02, 0.1, 0.18, 0.04, 0.09],
          },
        },
      },
      {
        title: "gagxdggdbf_1",
        portfolio: {
          returns: 51,
          risk: 12,
          sharpe: 0.9,
          weights: {
            items: [
              {
                code: "239610",
                name: "에이치엘사이언스",
              },
              {
                code: "006260",
                name: "LS",
              },
              {
                code: "093370",
                name: "후성",
              },
              {
                code: "047560",
                name: "이스트소프트",
              },
              {
                code: "007630",
                name: "폴루스바이오팜",
              },
              {
                code: "291620",
                name: "KOSEF 코스닥150선물인버스",
              },
              {
                code: "025820",
                name: "이구산업",
              },
              {
                code: "137610",
                name: "TIGER 농산물선물Enhanced(H)",
              },
              {
                code: "075180",
                name: "새론오토모티브",
              },
              {
                code: "223310",
                name: "경남제약헬스케어",
              },
            ],
            values: [0.11, 0.08, 0.14, 0.18, 0.06, 0.02, 0.1, 0.18, 0.04, 0.09],
          },
        },
      },
      {
        title: "gagxdggdbf_2",
        portfolio: {
          returns: 61,
          risk: 93,
          sharpe: 1.1,
          weights: {
            items: [
              {
                code: "032960",
                name: "동일기연",
              },
              {
                code: "049080",
                name: "기가레인",
              },
              {
                code: "062970",
                name: "피피아이",
              },
              {
                code: "073490",
                name: "이노와이어리스",
              },
              {
                code: "305080",
                name: "TIGER 미국채10년선물",
              },
              {
                code: "005960",
                name: "동부건설",
              },
              {
                code: "307510",
                name: "TIGER 의료기기",
              },
              {
                code: "122310",
                name: "제노레이",
              },
              {
                code: "110990",
                name: "디아이티",
              },
              {
                code: "266470",
                name: "바이오인프라생명과학",
              },
            ],
            values: [0.11, 0.08, 0.14, 0.18, 0.06, 0.02, 0.1, 0.18, 0.04, 0.09],
          },
        },
      },
    ],
  },
  vh9tdvsnrt: {
    user: "vh9tdvsnrt@gmail.com",
    portfolios: [
      {
        title: "vh9tdvsnrt_0",
        portfolio: {
          returns: 94,
          risk: 70,
          sharpe: 0.1,
          weights: {
            items: [
              {
                code: "019770",
                name: "서연탑메탈",
              },
              {
                code: "054930",
                name: "유신",
              },
              {
                code: "004100",
                name: "태양금속",
              },
              {
                code: "012600",
                name: "센트럴인사이트",
              },
              {
                code: "292160",
                name: "TIGER KRX300",
              },
              {
                code: "364970",
                name: "TIGER KRX바이오K-뉴딜",
              },
              {
                code: "279060",
                name: "이노벡스",
              },
              {
                code: "091230",
                name: "TIGER 반도체",
              },
              {
                code: "078890",
                name: "가온미디어",
              },
              {
                code: "253150",
                name: "ARIRANG 200선물레버리지",
              },
            ],
            values: [0.01, 0.12, 0.12, 0.11, 0.09, 0.1, 0.16, 0.11, 0.04, 0.15],
          },
        },
      },
      {
        title: "vh9tdvsnrt_1",
        portfolio: {
          returns: 72,
          risk: 68,
          sharpe: 0.5,
          weights: {
            items: [
              {
                code: "214310",
                name: "세미콘라이트",
              },
              {
                code: "027710",
                name: "팜스토리",
              },
              {
                code: "051380",
                name: "피씨디렉트",
              },
              {
                code: "135160",
                name: "지오씨",
              },
              {
                code: "290130",
                name: "KBSTAR ESG사회책임투자",
              },
              {
                code: "021240",
                name: "코웨이",
              },
              {
                code: "004490",
                name: "세방전지",
              },
              {
                code: "199150",
                name: "데이터스트림즈",
              },
              {
                code: "093640",
                name: "다믈멀티미디어",
              },
              {
                code: "005440",
                name: "현대그린푸드",
              },
            ],
            values: [0.01, 0.12, 0.12, 0.11, 0.09, 0.1, 0.16, 0.11, 0.04, 0.15],
          },
        },
      },
      {
        title: "vh9tdvsnrt_2",
        portfolio: {
          returns: 45,
          risk: 9,
          sharpe: 0.8,
          weights: {
            items: [
              {
                code: "329650",
                name: "KODEX TRF3070",
              },
              {
                code: "018500",
                name: "동원금속",
              },
              {
                code: "005830",
                name: "DB손해보험",
              },
              {
                code: "148070",
                name: "KOSEF 국고채10년",
              },
              {
                code: "285010",
                name: "KBSTAR 200중공업",
              },
              {
                code: "137930",
                name: "마이다스 200커버드콜5%OTM",
              },
              {
                code: "367340",
                name: "DB금융스팩8호",
              },
              {
                code: "168300",
                name: "KTOP 코스피50",
              },
              {
                code: "152100",
                name: "ARIRANG 200",
              },
              {
                code: "047770",
                name: "코데즈컴바인",
              },
            ],
            values: [0.01, 0.12, 0.12, 0.11, 0.09, 0.1, 0.16, 0.11, 0.04, 0.15],
          },
        },
      },
    ],
  },
  y578aonfqw: {
    user: "y578aonfqw@gmail.com",
    portfolios: [
      {
        title: "y578aonfqw_0",
        portfolio: {
          returns: 78,
          risk: 37,
          sharpe: 0.3,
          weights: {
            items: [
              {
                code: "278280",
                name: "천보",
              },
              {
                code: "002880",
                name: "대유에이텍",
              },
              {
                code: "112040",
                name: "위메이드",
              },
              {
                code: "104520",
                name: "KOSEF 블루칩",
              },
              {
                code: "241180",
                name: "TIGER 일본니케이225",
              },
              {
                code: "043220",
                name: "에이치엘비파워",
              },
              {
                code: "038680",
                name: "에스넷",
              },
              {
                code: "265690",
                name: "KINDEX 러시아MSCI(합성)",
              },
              {
                code: "121600",
                name: "나노신소재",
              },
              {
                code: "182480",
                name: "TIGER 미국MSCI리츠(합성 H)",
              },
            ],
            values: [0.15, 0.13, 0.04, 0.14, 0.03, 0.16, 0.15, 0.05, 0.03, 0.11],
          },
        },
      },
      {
        title: "y578aonfqw_1",
        portfolio: {
          returns: 17,
          risk: 48,
          sharpe: 1.3,
          weights: {
            items: [
              {
                code: "092600",
                name: "앤씨앤",
              },
              {
                code: "315960",
                name: "KBSTAR 대형고배당10TR",
              },
              {
                code: "228820",
                name: "TIGER KTOP30",
              },
              {
                code: "053980",
                name: "오상자이엘",
              },
              {
                code: "126700",
                name: "하이비젼시스템",
              },
              {
                code: "333620",
                name: "엔시스",
              },
              {
                code: "151860",
                name: "KG ETS",
              },
              {
                code: "368470",
                name: "KINDEX Fn K-뉴딜디지털플러스",
              },
              {
                code: "101160",
                name: "월덱스",
              },
              {
                code: "069500",
                name: "KODEX 200",
              },
            ],
            values: [0.15, 0.13, 0.04, 0.14, 0.03, 0.16, 0.15, 0.05, 0.03, 0.11],
          },
        },
      },
      {
        title: "y578aonfqw_2",
        portfolio: {
          returns: 3,
          risk: 86,
          sharpe: 1.1,
          weights: {
            items: [
              {
                code: "104830",
                name: "원익머트리얼즈",
              },
              {
                code: "900300",
                name: "오가닉티코스메틱",
              },
              {
                code: "291630",
                name: "KOSEF 코스닥150선물레버리지",
              },
              {
                code: "000725",
                name: "현대건설우",
              },
              {
                code: "263690",
                name: "디알젬",
              },
              {
                code: "046110",
                name: "한일네트웍스",
              },
              {
                code: "367360",
                name: "DB금융스팩9호",
              },
              {
                code: "278420",
                name: "ARIRANG ESG우수기업",
              },
              {
                code: "003650",
                name: "미창석유",
              },
              {
                code: "950160",
                name: "코오롱티슈진",
              },
            ],
            values: [0.15, 0.13, 0.04, 0.14, 0.03, 0.16, 0.15, 0.05, 0.03, 0.11],
          },
        },
      },
    ],
  },
  u1y8ws61tl: {
    user: "u1y8ws61tl@gmail.com",
    portfolios: [
      {
        title: "u1y8ws61tl_0",
        portfolio: {
          returns: 78,
          risk: 43,
          sharpe: 1.2,
          weights: {
            items: [
              {
                code: "133820",
                name: "화인베스틸",
              },
              {
                code: "261060",
                name: "TIGER 코스닥150IT",
              },
              {
                code: "073110",
                name: "엘엠에스",
              },
              {
                code: "049520",
                name: "유아이엘",
              },
              {
                code: "036640",
                name: "HRS",
              },
              {
                code: "052600",
                name: "한네트",
              },
              {
                code: "273140",
                name: "KODEX 단기변동금리부채권액티브",
              },
              {
                code: "266420",
                name: "KODEX 헬스케어",
              },
              {
                code: "278990",
                name: "EMB",
              },
              {
                code: "033640",
                name: "네패스",
              },
            ],
            values: [0.04, 0.03, 0.13, 0.1, 0.02, 0.21, 0.14, 0.01, 0.16, 0.16],
          },
        },
      },
      {
        title: "u1y8ws61tl_1",
        portfolio: {
          returns: 8,
          risk: 31,
          sharpe: 0.4,
          weights: {
            items: [
              {
                code: "078340",
                name: "컴투스",
              },
              {
                code: "214420",
                name: "토니모리",
              },
              {
                code: "005070",
                name: "코스모신소재",
              },
              {
                code: "049830",
                name: "승일",
              },
              {
                code: "322780",
                name: "코퍼스코리아",
              },
              {
                code: "007590",
                name: "동방아그로",
              },
              {
                code: "002820",
                name: "SUN&L",
              },
              {
                code: "035000",
                name: "지투알",
              },
              {
                code: "258250",
                name: "셀젠텍",
              },
              {
                code: "228670",
                name: "레이",
              },
            ],
            values: [0.04, 0.03, 0.13, 0.1, 0.02, 0.21, 0.14, 0.01, 0.16, 0.16],
          },
        },
      },
    ],
  },
  jym1p4jthp: {
    user: "jym1p4jthp@gmail.com",
    portfolios: [
      {
        title: "jym1p4jthp_0",
        portfolio: {
          returns: 63,
          risk: 43,
          sharpe: 0.4,
          weights: {
            items: [
              {
                code: "073240",
                name: "금호타이어",
              },
              {
                code: "290520",
                name: "신도기연",
              },
              {
                code: "192820",
                name: "코스맥스",
              },
              {
                code: "110020",
                name: "전진바이오팜",
              },
              {
                code: "002690",
                name: "동일제강",
              },
              {
                code: "253290",
                name: "KBSTAR 헬스케어채권혼합",
              },
              {
                code: "048530",
                name: "인트론바이오",
              },
              {
                code: "032685",
                name: "소프트센우",
              },
              {
                code: "162120",
                name: "루켄테크놀러지스",
              },
              {
                code: "335810",
                name: "프리시젼바이오",
              },
            ],
            values: [0.02, 0.05, 0.01, 0, 0.22, 0.22, 0.12, 0.13, 0.18, 0.04],
          },
        },
      },
    ],
  },
  nxxcr69ux2: {
    user: "nxxcr69ux2@gmail.com",
    portfolios: [
      {
        title: "nxxcr69ux2_0",
        portfolio: {
          returns: 36,
          risk: 11,
          sharpe: 0.2,
          weights: {
            items: [
              {
                code: "338220",
                name: "뷰노",
              },
              {
                code: "025820",
                name: "이구산업",
              },
              {
                code: "250730",
                name: "KBSTAR 차이나HSCEI(H)",
              },
              {
                code: "033340",
                name: "좋은사람들",
              },
              {
                code: "012170",
                name: "키위미디어그룹",
              },
              {
                code: "000440",
                name: "중앙에너비스",
              },
              {
                code: "001790",
                name: "대한제당",
              },
              {
                code: "160600",
                name: "이큐셀",
              },
              {
                code: "291230",
                name: "삼성스팩2호",
              },
              {
                code: "002690",
                name: "동일제강",
              },
            ],
            values: [0.12, 0.05, 0.12, 0.18, 0.08, 0.12, 0.02, 0.16, 0.03, 0.1],
          },
        },
      },
      {
        title: "nxxcr69ux2_1",
        portfolio: {
          returns: 73,
          risk: 42,
          sharpe: 0.7,
          weights: {
            items: [
              {
                code: "241590",
                name: "화승엔터프라이즈",
              },
              {
                code: "003560",
                name: "IHQ",
              },
              {
                code: "095570",
                name: "AJ네트웍스",
              },
              {
                code: "009410",
                name: "태영건설",
              },
              {
                code: "009620",
                name: "삼보산업",
              },
              {
                code: "145210",
                name: "세화아이엠씨",
              },
              {
                code: "021080",
                name: "에이티넘인베스트",
              },
              {
                code: "007370",
                name: "진양제약",
              },
              {
                code: "068760",
                name: "셀트리온제약",
              },
              {
                code: "014580",
                name: "태경비케이",
              },
            ],
            values: [0.12, 0.05, 0.12, 0.18, 0.08, 0.12, 0.02, 0.16, 0.03, 0.1],
          },
        },
      },
    ],
  },
  kszhs2qiuy: {
    user: "kszhs2qiuy@gmail.com",
    portfolios: [
      {
        title: "kszhs2qiuy_0",
        portfolio: {
          returns: 67,
          risk: 24,
          sharpe: 0.2,
          weights: {
            items: [
              {
                code: "104520",
                name: "KOSEF 블루칩",
              },
              {
                code: "000300",
                name: "대유플러스",
              },
              {
                code: "318010",
                name: "팜스빌",
              },
              {
                code: "069110",
                name: "코스온",
              },
              {
                code: "001420",
                name: "태원물산",
              },
              {
                code: "251370",
                name: "와이엠티",
              },
              {
                code: "102120",
                name: "어보브반도체",
              },
              {
                code: "018880",
                name: "한온시스템",
              },
              {
                code: "029960",
                name: "코엔텍",
              },
              {
                code: "261140",
                name: "TIGER 우선주",
              },
            ],
            values: [0.06, 0.05, 0.04, 0.14, 0.14, 0.09, 0.17, 0.1, 0.14, 0.06],
          },
        },
      },
      {
        title: "kszhs2qiuy_1",
        portfolio: {
          returns: 11,
          risk: 64,
          sharpe: 0.7,
          weights: {
            items: [
              {
                code: "224810",
                name: "엄지하우스",
              },
              {
                code: "105840",
                name: "우진",
              },
              {
                code: "039310",
                name: "세중",
              },
              {
                code: "199800",
                name: "툴젠",
              },
              {
                code: "294630",
                name: "서남",
              },
              {
                code: "290650",
                name: "엘앤씨바이오",
              },
              {
                code: "012790",
                name: "신일제약",
              },
              {
                code: "295020",
                name: "KBSTAR 국채선물10년인버스",
              },
              {
                code: "003010",
                name: "혜인",
              },
              {
                code: "341850",
                name: "TIGER KIS부동산인프라채권TR",
              },
            ],
            values: [0.06, 0.05, 0.04, 0.14, 0.14, 0.09, 0.17, 0.1, 0.14, 0.06],
          },
        },
      },
      {
        title: "kszhs2qiuy_2",
        portfolio: {
          returns: 95,
          risk: 46,
          sharpe: 0.6,
          weights: {
            items: [
              {
                code: "016360",
                name: "삼성증권",
              },
              {
                code: "037350",
                name: "성도이엔지",
              },
              {
                code: "111820",
                name: "지와이커머스",
              },
              {
                code: "371470",
                name: "TIGER 차이나바이오테크SOLACTIVE",
              },
              {
                code: "248070",
                name: "솔루엠",
              },
              {
                code: "140660",
                name: "위월드",
              },
              {
                code: "001200",
                name: "유진투자증권",
              },
              {
                code: "129890",
                name: "앱코",
              },
              {
                code: "302920",
                name: "더콘텐츠온",
              },
              {
                code: "228800",
                name: "TIGER 여행레저",
              },
            ],
            values: [0.06, 0.05, 0.04, 0.14, 0.14, 0.09, 0.17, 0.1, 0.14, 0.06],
          },
        },
      },
    ],
  },
  "1pdoka5j9h": {
    user: "1pdoka5j9h@gmail.com",
    portfolios: [
      {
        title: "1pdoka5j9h_0",
        portfolio: {
          returns: 4,
          risk: 8,
          sharpe: 0.2,
          weights: {
            items: [
              {
                code: "171010",
                name: "램테크놀러지",
              },
              {
                code: "038500",
                name: "삼표시멘트",
              },
              {
                code: "114120",
                name: "크루셜텍",
              },
              {
                code: "011320",
                name: "유니크",
              },
              {
                code: "019440",
                name: "세아특수강",
              },
              {
                code: "069460",
                name: "대호에이엘",
              },
              {
                code: "156080",
                name: "KODEX MSCI Korea",
              },
              {
                code: "227420",
                name: "도부마스크",
              },
              {
                code: "284420",
                name: "휴럼",
              },
              {
                code: "065440",
                name: "이루온",
              },
            ],
            values: [0.13, 0.15, 0.07, 0.05, 0, 0.16, 0.15, 0.13, 0.09, 0.07],
          },
        },
      },
      {
        title: "1pdoka5j9h_1",
        portfolio: {
          returns: 17,
          risk: 67,
          sharpe: 0.9,
          weights: {
            items: [
              {
                code: "081660",
                name: "휠라홀딩스",
              },
              {
                code: "066620",
                name: "국보디자인",
              },
              {
                code: "002720",
                name: "국제약품",
              },
              {
                code: "123010",
                name: "아이에이네트웍스",
              },
              {
                code: "024850",
                name: "피에스엠씨",
              },
              {
                code: "030790",
                name: "비케이탑스",
              },
              {
                code: "115960",
                name: "연우",
              },
              {
                code: "012510",
                name: "더존비즈온",
              },
              {
                code: "950220",
                name: "네오이뮨텍(Reg.S)",
              },
              {
                code: "194700",
                name: "노바렉스",
              },
            ],
            values: [0.13, 0.15, 0.07, 0.05, 0, 0.16, 0.15, 0.13, 0.09, 0.07],
          },
        },
      },
      {
        title: "1pdoka5j9h_2",
        portfolio: {
          returns: 40,
          risk: 5,
          sharpe: 0.1,
          weights: {
            items: [
              {
                code: "008830",
                name: "대동기어",
              },
              {
                code: "080220",
                name: "제주반도체",
              },
              {
                code: "006050",
                name: "국영지앤엠",
              },
              {
                code: "248070",
                name: "솔루엠",
              },
              {
                code: "046970",
                name: "우리로",
              },
              {
                code: "082660",
                name: "코스나인",
              },
              {
                code: "140520",
                name: "대창스틸",
              },
              {
                code: "163430",
                name: "디피코",
              },
              {
                code: "195990",
                name: "에이비프로바이오",
              },
              {
                code: "305090",
                name: "마이크로디지탈",
              },
            ],
            values: [0.13, 0.15, 0.07, 0.05, 0, 0.16, 0.15, 0.13, 0.09, 0.07],
          },
        },
      },
    ],
  },
};
