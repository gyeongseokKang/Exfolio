import React, { useEffect, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { getUserInfo } from "src/service/getUserInfo";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
  },
  cards: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

const MyPortfolios = () => {
  const classes = useStyles();
  // const [userPerformances, setUserPerformances] = useState<UserPerformance[]>();

  useEffect(() => {
    getUserInfo("aaa").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <>
      <div className={classes.root}>my portfolio</div>
      <div className={classes.root}>내 성향</div>
    </>
  );
};
export default MyPortfolios;
