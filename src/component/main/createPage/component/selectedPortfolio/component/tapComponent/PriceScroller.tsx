import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  numberLayout: {
    display: "flex",
    flexFlow: "column",
    height: "1.5rem",
    overflowY: "hidden",
  },
});
interface PriceScrollerProp {
  numberLength: number;
  currentNumber: string | number;
  prefix?: string;
  suffix?: string;
}
export default function PriceScroller({ numberLength, currentNumber, prefix, suffix }: PriceScrollerProp) {
  const classes = useStyles();
  useEffect(() => {
    for (let i = 0; i < numberLength; i++) {
      setTimeout(() => {
        let targetNumberEl: HTMLElement | null = document.getElementById(`${i}_${currentNumber.toString()[i]}`);
        if (targetNumberEl) {
          targetNumberEl.scrollIntoView();
        }
      }, i * 250);
    }
  }, [numberLength, currentNumber]);

  return (
    <div className={classes.root}>
      <>
        {prefix}
        {[...Array(numberLength)].map((item, index) => {
          return (
            <span className={classes.numberLayout} key={"test" + index}>
              <div>-</div>
              <div id={`${index}_9`}>9</div>
              <div id={`${index}_8`}>8</div>
              <div id={`${index}_7`}>7</div>
              <div id={`${index}_6`}>6</div>
              <div id={`${index}_5`}>5</div>
              <div id={`${index}_4`}>4</div>
              <div id={`${index}_3`}>3</div>
              <div id={`${index}_2`}>2</div>
              <div id={`${index}_1`}>1</div>
              <div id={`${index}_0`}>0</div>
            </span>
          );
        })}
        {suffix}
      </>
    </div>
  );
}
