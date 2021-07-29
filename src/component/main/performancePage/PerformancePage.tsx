import React from "react";
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
const testCard = [
  {
    rating: 1,
    name: "kang0",
    id: "kang0_id",
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
    id: "kang1_id",
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
    id: "kang2_id",
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
    name: "kang4",
    id: "kang4_id",
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
    name: "kang5",
    id: "kang5_id",
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
    name: "kang6",
    id: "kang6_id",
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
const PerformancePage = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.cards}>
          {testCard.map((item) => {
            return (
              <PerformanceCard
                key={item.name}
                rating={item.rating}
                userInfo={{ userId: item.id, userName: item.name }}
                portfolios={item.portfolios}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default PerformancePage;
