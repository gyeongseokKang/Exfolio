import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";

import PortfolioInfoCardWithBtn from "src/component/common/widget/PortfolioInfoCardWithBtn";

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
    height: "480px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
}));

interface PortFolioSliderProp {
  changePF: (PF: RRSW_2) => void;
  publicIdList: string[];
  portfolios: UserPerformance["portfolios"];
}

SwiperCore.use([Navigation, Pagination]);

const PortFolioSlider = ({ changePF, portfolios, publicIdList }: PortFolioSliderProp) => {
  const classes = useStyles();

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
                    selected={publicIdList.includes(item.title)}
                    setSelected={() => {}}
                    onPfClick={() => {}}
                    buttonText={publicIdList.includes(item.title) ? "비공개하기" : "공개하기"}
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
