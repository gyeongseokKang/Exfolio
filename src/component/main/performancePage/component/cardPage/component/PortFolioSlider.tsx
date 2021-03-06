import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";

import PortfolioInfoCardWithBtn from "src/component/common/widget/PortfolioInfoCardWithBtn";
import { RRSW } from "src/service/getEfficientFrontier";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "./PortFolioSlider.scss";
import { RRSW_2, UserPerformance } from "src/service/getUserPerformance";

const useStyles = makeStyles((theme: Theme) => ({
  root: { margin: "1.5rem 1rem 1rem 1rem", height: "500px" },
  sliderContainer: { display: "flex", alignItems: "center", flexDirection: "column-reverse" },
  swiperSlide: {
    // width: "300px !important",
    height: "480px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
}));

interface PortFolioSliderProp {
  changePF: (PF: RRSW_2) => void;
  portfolios: UserPerformance["portfolios"];
}

SwiperCore.use([Navigation, Pagination]);

const PortFolioSlider = ({ changePF, portfolios }: PortFolioSliderProp) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(undefined);
  const changeIndex = (PFIndex: number) => {
    setSelectedIndex(PFIndex);
    changePF(portfolios[PFIndex].portfolio);
  };

  return (
    <>
      <div className={classes.root}>
        <>
          <Swiper
            className={classes.sliderContainer}
            spaceBetween={0}
            slidesPerView={3}
            freeMode={true}
            pagination={{
              clickable: true,
              type: "bullets",
              bulletElement: "span",
              bulletClass: "timeline-icon",
              bulletActiveClass: "timeline-icon-active",
              renderBullet: function (index, className) {
                return `<span class=${className}>⦿</span>`;
              },
            }}
          >
            {portfolios.map((item, index) => {
              const info = {
                returns: item.portfolio.returns,
                risk: item.portfolio.risk,
                sharpe: item.portfolio.sharpe,
                weights: {
                  items: item.portfolio.weights.items.map((item) => item.name),
                  values: item.portfolio.weights.values,
                },
              };
              return (
                <SwiperSlide key={item.title} className={classes.swiperSlide}>
                  <PortfolioInfoCardWithBtn
                    title={item.title}
                    info={info}
                    selected={selectedIndex === index}
                    setSelected={() => changeIndex(index)}
                    onPfClick={() => {}}
                    buttonText={"Detail"}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
      </div>
    </>
  );
};
export default PortFolioSlider;

const testPF = [
  {
    returns: 0.2659209472375861,
    risk: 0.2656814237028593,
    sharpe: 1,
    weights: {
      items: [
        "삼성전자",
        "SK하이닉스",
        "현대차",
        "POSCO",
        "KB금융",
        "신한지주",
        "기아",
        "현대모비스",
        "하나금융지주",
        "KT&G",
        "",
      ],
      values: [0.25, 0.23, 0.13, 0.09, 0.08, 0.07, 0.05, 0.04, 0.04, 0.03, 0.01],
    },
  },
  {
    returns: 0.14367630713717183,
    risk: 0.23019540364261667,
    sharpe: 1,
    weights: {
      items: [
        "삼성전자",
        "SK하이닉스",
        "NAVER",
        "LG화학",
        "삼성SDI",
        "셀트리온",
        "현대차",
        "현대모비스",
        "엔씨소프트",
        "",
      ],
      values: [0.24, 0.16, 0.11, 0.09, 0.08, 0.07, 0.07, 0.04, 0.04, 0.09],
    },
  },
  {
    returns: 0.23219276955651735,
    risk: 0.2535974821500911,
    sharpe: 1,
    weights: {
      items: [
        "삼성전자",
        "SK하이닉스",
        "NAVER",
        "현대차",
        "POSCO",
        "현대모비스",
        "KB금융",
        "신한지주",
        "하나금융지주",
        "삼성전자우",
        "KT&G",
        "",
      ],
      values: [0.25, 0.21, 0.15, 0.1, 0.06, 0.06, 0.05, 0.04, 0.03, 0.03, 0.03, 0],
    },
  },
  {
    returns: 0.10060480047749554,
    risk: 0.21273517236499592,
    sharpe: 1,
    weights: {
      items: [
        "삼성전자",
        "SK하이닉스",
        "NAVER",
        "현대차",
        "기아",
        "현대모비스",
        "엔씨소프트",
        "LG생활건강",
        "SK이노베이션",
        "삼성전기",
        "SK",
        "아모레퍼시픽",
        "HMM",
        "한국전력",
        "삼성화재",
        "금호석유",
        "코웨이",
        "한국타이어앤테크놀로지",
        "미래에셋증권",
        "현대글로비스",
        "유한양행",
        "S-Oil",
        "CJ제일제당",
        "에이치엘비",
        "LG이노텍",
        "두산중공업",
        "삼성증권",
        "한미약품",
        "OCI",
        "제넥신",
        "만도",
        "휠라홀딩스",
        "삼성엔지니어링",
        "녹십자",
        "DB하이텍",
        "아모레G",
        "원익IPS",
        "리노공업",
        "현대미포조선",
        "CJ ENM",
        "현대엘리베이",
        "고영",
        "효성티앤씨",
        "BGF리테일",
        "동국제강",
        "한샘",
        "현대위아",
        "에코프로",
        "한국가스공사",
        "한화생명",
        "롯데정밀화학",
        "대한유화",
        "LS ELECTRIC",
        "포스코인터내셔널",
        "농심",
        "오뚜기",
        "효성첨단소재",
        "녹십자홀딩스",
        "쌍용C&E",
        "한전KPS",
        "효성",
        "서울반도체",
        "대웅제약",
        "다우기술",
        "GS홈쇼핑",
        "메디포스트",
        "LG하우시스",
        "동아에스티",
        "유나이티드제약",
        "테스나",
        "동아쏘시오홀딩스",
        "테스",
        "안랩",
        "한국앤컴퍼니",
        "코미팜",
        "한전기술",
        "파트론",
        "텔콘RF제약",
        "디오",
        "에스엘",
        "JW중외제약",
        "올릭스",
        "휴온스",
        "녹십자셀",
        "삼양홀딩스",
        "이녹스첨단소재",
        "지트리비앤티",
        "빙그레",
        "제주항공",
        "효성중공업",
        "해성디에스",
        "한라홀딩스",
        "동화약품",
        "두산",
        "삼진제약",
        "한솔제지",
        "파멥신",
        "풀무원",
        "대원제약",
        "매일유업",
        "한독",
        "애경산업",
        "BGF",
        "휴온스글로벌",
        "삼양사",
        "일동제약",
        "네오팜",
        "HSD엔진",
        "현대약품",
        "대덕",
        "써니전자",
        "KSS해운",
        "삼천리",
        "서울식품",
        "농심홀딩스",
        "쌍방울",
        "한솔홀딩스",
        "SPC삼립",
        "CJ프레시웨이",
        "클리오",
        "미래컴퍼니",
        "한국화장품",
        "지역난방공사",
        "이수페타시스",
        "대교",
        "일성신약",
        "경동도시가스",
        "한국화장품제조",
        "주연테크",
        "화승알앤에이",
        "화승코퍼레이션",
        "신흥",
        "성문전자",
        "코아스",
        "금호전기",
        "",
      ],
      values: [
        0.26, 0.14, 0.09, 0.06, 0.04, 0.04, 0.03, 0.03, 0.03, 0.02, 0.02, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01,
        0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.01,
      ],
    },
  },
  {
    returns: 0.05105401597019599,
    risk: 0.18576972132625355,
    sharpe: 1,
    weights: {
      items: [
        "삼성전자",
        "SK하이닉스",
        "NAVER",
        "LG화학",
        "삼성SDI",
        "셀트리온",
        "현대차",
        "POSCO",
        "기아",
        "현대모비스",
        "KB금융",
        "LG전자",
        "엔씨소프트",
        "신한지주",
        "LG생활건강",
        "SK텔레콤",
        "SK이노베이션",
        "삼성물산",
        "삼성바이오로직스",
        "하나금융지주",
        "삼성전기",
        "SK",
        "넷마블",
        "LG",
        "KT&G",
        "아모레퍼시픽",
        "한국전력",
        "삼성생명",
        "삼성에스디에스",
        "한국조선해양",
        "KT",
        "삼성화재",
        "LG디스플레이",
        "우리금융지주",
        "한온시스템",
        "롯데케미칼",
        "코웨이",
        "한국타이어앤테크놀로지",
        "LG유플러스",
        "고려아연",
        "현대건설",
        "이마트",
        "S-Oil",
        "현대글로비스",
        "강원랜드",
        "기업은행",
        "하이브",
        "SK바이오팜",
        "아모레G",
        "",
      ],
      values: [
        0.31, 0.08, 0.05, 0.04, 0.04, 0.03, 0.03, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.01, 0.01,
        0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.04,
      ],
    },
  },
];
