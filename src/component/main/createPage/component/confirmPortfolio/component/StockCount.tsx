import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  stockName: {
    fontWeight: 500,
    fontFamily: "Noto Sans CJK KR",
    width: "100px",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
});

interface StockCountProp {
  name: string;
  price: number;
  count: number;
}

export default function StockCount({ name, price, count }: StockCountProp) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div style={{ width: "100px", float: "left" }}>{name}</div>
      <div style={{ width: "100px", float: "left" }}>{price}원</div>
      <div style={{ width: "100px", float: "left" }}>{count}주</div>
    </div>
  );
}
