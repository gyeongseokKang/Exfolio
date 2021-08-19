import React, { useEffect, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Propensity from "./component/Propensity";
import MyPortfolios from "./component/MyPortfolios";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
  },
  cards: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

const IndividualPage = () => {
  const classes = useStyles();

  return (
    <>
      <MyPortfolios />
      <Propensity />
    </>
  );
};
export default IndividualPage;
