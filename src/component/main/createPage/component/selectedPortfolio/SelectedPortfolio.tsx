/* eslint-disable @typescript-eslint/no-unused-vars */
import { Card, CircularProgress } from "@material-ui/core";
import React from "react";
import PortfolioInfoCard from "src/component/main/common/wiget/PortfolioInfoCard";
import PortfolioTabLayout from "./component/PortfolioTabLayout";

interface stockInfo {
  name: string;
  code: string;
  weight: number;
}

interface SelectedPortfolioProp {
  stockList: stockInfo[];
  selectedPF: RRSW;
  onChangeSelectedPF: (PF: RRSW) => void;
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

const SelectedPortfolio = ({ stockList, selectedPF, onChangeSelectedPF }: SelectedPortfolioProp) => {
  //여기서 axios로 연결
  let frontierData = testSpecific;
  const [loading, setLoading] = React.useState(false);
  const timer = React.useRef<number>();

  const handleType = (portfolio: RRSW) => {
    setLoading(true);
    onChangeSelectedPF(portfolio);
    timer.current = window.setTimeout(() => {
      setLoading(false);
    }, 750);
  };

  return (
    <>
      <div className="SelectedPortfolio" style={{ display: "flex" }}>
        <div style={{ paddingRight: "20px" }}>
          <PortfolioTabLayout handleType={handleType} frontierData={frontierData} />
        </div>
        <div>
          <Card style={{ textAlign: "center" }}>
            {!loading ? (
              <>
                <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>Selected PF</div>
                <PortfolioInfoCard
                  values={selectedPF.weights.values}
                  labels={selectedPF.weights.items}
                  title={""}
                  volatility={selectedPF.risk}
                  returns={selectedPF.returns}
                  sharpe={selectedPF.sharpe}
                />
              </>
            ) : (
              <Card
                style={{
                  textAlign: "center",
                  width: "300px",
                  height: "400px",
                }}
              >
                <CircularProgress size={70} style={{ marginTop: "165px" }} />
              </Card>
            )}
          </Card>
        </div>
      </div>
    </>
  );
};

export default SelectedPortfolio;

let testSpecific = {
  frontier: [
    {
      returns: 0.13326866421198919,
      risk: 0.13101735677365461,
      sharpe: 0.8645317460317258,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.09893, 0.42469, 0.47637],
      },
    },
    {
      returns: 0.13653842929227195,
      risk: 0.1320167005317016,
      sharpe: 0.8827552031137696,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.07719, 0.45099, 0.47182],
      },
    },
    {
      returns: 0.13922153134058973,
      risk: 0.1330108870999089,
      sharpe: 0.896329119668516,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.05943, 0.47265, 0.46792],
      },
    },
    {
      returns: 0.1415703664649831,
      risk: 0.13401180816108807,
      sharpe: 0.9071616011542072,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.04383, 0.49156, 0.4646],
      },
    },
    {
      returns: 0.14367967869915513,
      risk: 0.13501483035060932,
      sharpe: 0.9160451365081981,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0298, 0.50852, 0.46168],
      },
    },
    {
      returns: 0.1456158872893045,
      risk: 0.13601915764426284,
      sharpe: 0.9235161389385569,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.01681, 0.52399, 0.4592],
      },
    },
    {
      returns: 0.14740969733328424,
      risk: 0.13701907940304694,
      sharpe: 0.9298682919807371,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0048, 0.53833, 0.45687],
      },
    },
    {
      returns: 0.14903989076155555,
      risk: 0.13800945272635035,
      sharpe: 0.9350076260168937,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.5575, 0.4425],
      },
    },
    {
      returns: 0.15045287411112224,
      risk: 0.13902235804750698,
      sharpe: 0.9383589513461111,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.57831, 0.42169],
      },
    },
    {
      returns: 0.1516639232534839,
      risk: 0.14001176631222945,
      sharpe: 0.9403775605535205,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.59613, 0.40387],
      },
    },
    {
      returns: 0.15278047972058875,
      risk: 0.14102104549316954,
      sharpe: 0.9415649930564448,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.61257, 0.38743],
      },
    },
    {
      returns: 0.15378858575211296,
      risk: 0.14201047525216612,
      sharpe: 0.9421036406965497,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.62741, 0.37259],
      },
    },
    {
      returns: 0.15476360269142048,
      risk: 0.1430367044030164,
      sharpe: 0.9421609876561065,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.64177, 0.35823],
      },
    },
    {
      returns: 0.15565640230956987,
      risk: 0.1440343639845682,
      sharpe: 0.9418335913511866,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.65491, 0.34509],
      },
    },
    {
      returns: 0.15650700011850727,
      risk: 0.14503532911142272,
      sharpe: 0.9411982649664372,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.66743, 0.33257],
      },
    },
    {
      returns: 0.1573131326431943,
      risk: 0.14602883121816984,
      sharpe: 0.9403152206158926,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.6793, 0.3207],
      },
    },
    {
      returns: 0.15809626835692772,
      risk: 0.14703480889999845,
      sharpe: 0.9392079970046412,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.69083, 0.30917],
      },
    },
    {
      returns: 0.15886653375497253,
      risk: 0.14806264678432887,
      sharpe: 0.9378903914722558,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.70217, 0.29783],
      },
    },
    {
      returns: 0.15957553594331755,
      risk: 0.14904177684709494,
      sharpe: 0.9364859900087679,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.71261, 0.28739],
      },
    },
    {
      returns: 0.16027849759776674,
      risk: 0.15004337667574755,
      sharpe: 0.9349196259486797,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.72295, 0.27705],
      },
    },
    {
      returns: 0.1609800300900256,
      risk: 0.15107305616649824,
      sharpe: 0.9331910909027413,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.73328, 0.26672],
      },
    },
    {
      returns: 0.16163142376562611,
      risk: 0.1520551400824515,
      sharpe: 0.9314477872226277,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.74287, 0.25713],
      },
    },
    {
      returns: 0.16226893941369236,
      risk: 0.15303984310091825,
      sharpe: 0.9296202644423565,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.75226, 0.24774],
      },
    },
    {
      returns: 0.16289067304254634,
      risk: 0.15402218870067663,
      sharpe: 0.927727843942258,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.76141, 0.23859],
      },
    },
    {
      returns: 0.16353891918557759,
      risk: 0.15506908673531883,
      sharpe: 0.92564496385136,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.77095, 0.22905],
      },
    },
    {
      returns: 0.16412179771991262,
      risk: 0.15602979807065565,
      sharpe: 0.9236812423140439,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.77953, 0.22047],
      },
    },
    {
      returns: 0.1647295491177136,
      risk: 0.15705066951232075,
      sharpe: 0.9215468457863496,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.78848, 0.21152],
      },
    },
    {
      returns: 0.1653352607966281,
      risk: 0.15808716375557505,
      sharpe: 0.9193362531403045,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.7974, 0.2026],
      },
    },
    {
      returns: 0.16593368872359898,
      risk: 0.15912960063048323,
      sharpe: 0.9170744358397114,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.80621, 0.19379],
      },
    },
    {
      returns: 0.16645480664344164,
      risk: 0.16005199672638126,
      sharpe: 0.9150451705630087,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.81388, 0.18612],
      },
    },
    {
      returns: 0.16703269451116814,
      risk: 0.16109049483053878,
      sharpe: 0.9127335207818505,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.82239, 0.17761],
      },
    },
    {
      returns: 0.1676161160260824,
      risk: 0.16215536356557297,
      sharpe: 0.9103375477702831,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.83097, 0.16902],
      },
    },
    {
      returns: 0.16814737474527042,
      risk: 0.16313918096805993,
      sharpe: 0.9081041958539399,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.8388, 0.1612],
      },
    },
    {
      returns: 0.16865249125190923,
      risk: 0.16408694462997236,
      sharpe: 0.9059373467348734,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.84623, 0.15377],
      },
    },
    {
      returns: 0.16916247096203707,
      risk: 0.1650559634404727,
      sharpe: 0.9037084625896137,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.85374, 0.14626],
      },
    },
    {
      returns: 0.1696957678676338,
      risk: 0.16608205908053197,
      sharpe: 0.9013361749991757,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.86159, 0.13841],
      },
    },
    {
      returns: 0.17021582471858684,
      risk: 0.1670950217086807,
      sharpe: 0.8989844412030321,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.86925, 0.13075],
      },
    },
    {
      returns: 0.17071869184736413,
      risk: 0.16808588215136483,
      sharpe: 0.8966766864550756,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.87665, 0.12335],
      },
    },
    {
      returns: 0.1712063750100679,
      risk: 0.16905731566024582,
      sharpe: 0.8944089430234838,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.88383, 0.11617],
      },
    },
    {
      returns: 0.17169892639643786,
      risk: 0.17004876813730885,
      sharpe: 0.8920907105539625,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.89108, 0.10892],
      },
    },
    {
      returns: 0.17218755582411024,
      risk: 0.17104237587464602,
      sharpe: 0.889765211959204,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.89827, 0.10173],
      },
    },
    {
      returns: 0.17271775728387048,
      risk: 0.1721314650554795,
      sharpe: 0.887215810512321,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.90608, 0.09392],
      },
    },
    {
      returns: 0.17320634306938637,
      risk: 0.17314494313288617,
      sharpe: 0.8848444563108192,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.91327, 0.08673],
      },
    },
    {
      returns: 0.17366521445026528,
      risk: 0.17410526525127237,
      sharpe: 0.8825994677903188,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.92003, 0.07997],
      },
    },
    {
      returns: 0.17413277818643622,
      risk: 0.17509215480527365,
      sharpe: 0.8802951700369036,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.92691, 0.07309],
      },
    },
    {
      returns: 0.17460053463826217,
      risk: 0.17608781759650188,
      sharpe: 0.8779740515185613,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.9338, 0.0662],
      },
    },
    {
      returns: 0.1750725127114622,
      risk: 0.17710089357497322,
      sharpe: 0.8756167717799482,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.94074, 0.05926],
      },
    },
    {
      returns: 0.17557093732136297,
      risk: 0.17817984178804033,
      sharpe: 0.8731118838147106,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.94808, 0.05192],
      },
    },
    {
      returns: 0.17602058122337302,
      risk: 0.17916109579129677,
      sharpe: 0.8708396236039998,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.9547, 0.0453],
      },
    },
    {
      returns: 0.1764128830421699,
      risk: 0.18002324274095033,
      sharpe: 0.8688482701494538,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.96048, 0.03952],
      },
    },
    {
      returns: 0.17687560252242984,
      risk: 0.18104732082822614,
      sharpe: 0.8664895001195301,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.96729, 0.03271],
      },
    },
    {
      returns: 0.17732585609816917,
      risk: 0.18205113678160037,
      sharpe: 0.8641849695610901,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.97392, 0.02608],
      },
    },
    {
      returns: 0.17777769663167206,
      risk: 0.1830656475303572,
      sharpe: 0.8618640294351692,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.98057, 0.01943],
      },
    },
    {
      returns: 0.1782046951242084,
      risk: 0.18403081252620873,
      sharpe: 0.8596641668453086,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.98685, 0.01315],
      },
    },
    {
      returns: 0.17863312175868043,
      risk: 0.18500539801273078,
      sharpe: 0.8574513147327972,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.99316, 0.00684],
      },
    },
    {
      returns: 0.17906861482162473,
      risk: 0.18600231940479478,
      sharpe: 0.8551969423319151,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 0.99957, 0.00043],
      },
    },
  ],
  specific: {
    max_returns: {
      returns: 0.17909763448675378,
      risk: 0.18606897117477664,
      sharpe: 0.8550465640899988,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 1.0, 0.0],
      },
    },
    max_sharpe: {
      returns: 0.1790976344867547,
      risk: 0.18606897117477716,
      sharpe: 0.8550465640900013,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.0, 1.0, 0.0],
      },
    },
    min_risk: {
      returns: 0.12240824150775552,
      risk: 0.12940595360772536,
      sharpe: 0.791371947369521,
      weights: {
        items: ["현대차", "삼성전자", "SK텔레콤"],
        values: [0.17079, 0.33698, 0.49222],
      },
    },
  },
};
