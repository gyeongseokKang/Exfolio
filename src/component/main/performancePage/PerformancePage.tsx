import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import PerformanceCard from "./component/PerformanceCard";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
  },
  cards: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

const PerformancePage = () => {
  const classes = useStyles();
  const testCard = [
    {
      rating: 1,
      name: "kang",
      portfolios: [
        {
          name: "main PF",
          shares: [121, 12412, 12312, 12312],
          date: "12년 3개월",
        },
        {
          name: "main PF",
          shares: [121, 12412, 12312, 12312],
          date: "12년 3개월",
        },
      ],
    },
    {
      rating: 2,
      name: "kang1",
      portfolios: [
        {
          name: "main PF",
          shares: [121, 12412, 12312, 12312],
          date: "12년 3개월",
        },
        {
          name: "main PF",
          shares: [121, 12412, 12312, 12312],
          date: "12년 3개월",
        },
      ],
    },
    {
      rating: 3,
      name: "kang2",
      portfolios: [
        {
          name: "main PF",
          shares: [121, 12412, 12312, 12312],
          date: "12년 3개월",
        },
        {
          name: "main PF",
          shares: [121, 12412, 12312, 12312],
          date: "12년 3개월",
        },
      ],
    },
    {
      rating: 4,
      name: "kang3",
      portfolios: [
        {
          name: "main PF",
          shares: [121, 12412, 12312, 12312],
          date: "12년 3개월",
        },
        {
          name: "main PF",
          shares: [121, 12412, 12312, 12312],
          date: "12년 3개월",
        },
      ],
    },
    {
      rating: 5,
      name: "kang3",
      portfolios: [
        {
          name: "main PF",
          shares: [121, 12412, 12312, 12312],
          date: "12년 3개월",
        },
        {
          name: "main PF",
          shares: [121, 12412, 12312, 12312],
          date: "12년 3개월",
        },
      ],
    },
    {
      rating: 6,
      name: "kang3",
      portfolios: [
        {
          name: "main PF",
          shares: [121, 12412, 12312, 12312],
          date: "12년 3개월",
        },
        {
          name: "main PF",
          shares: [121, 12412, 12312, 12312],
          date: "12년 3개월",
        },
      ],
    },
  ];
  console.log("ddd");
  return (
    <>
      <div className={classes.root}>
        <div className={classes.cards}>
          {testCard.map((item) => {
            return (
              <PerformanceCard key={item.name} rating={item.rating} userName={item.name} portfolios={item.portfolios} />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default PerformancePage;
