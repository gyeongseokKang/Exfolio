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
  return (
    <>
      <div className={classes.root}>
        <div className={classes.cards}>
          <PerformanceCard />
          <PerformanceCard />
          <PerformanceCard />
          <PerformanceCard />
          <PerformanceCard />
          <PerformanceCard />
          <PerformanceCard />
          <PerformanceCard />
          <PerformanceCard />
          <PerformanceCard />
        </div>
      </div>
    </>
  );
};
export default PerformancePage;
