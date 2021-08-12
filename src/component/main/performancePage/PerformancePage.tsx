import React, { useEffect, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import PerformanceCard from "./component/PerformanceCard";
import { getUserPerformance, UserPerformance } from "src/service/getUserPerformance";

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
  const [userPerformances, setUserPerformances] = useState<UserPerformance[]>();

  useEffect(() => {
    getUserPerformance().then((res) => {
      setUserPerformances(res);
    });
  }, []);

  return (
    <>
      <div className={classes.root}>
        <div className={classes.cards}>
          {userPerformances &&
            userPerformances.map((item, index) => {
              return (
                <PerformanceCard
                  key={item.id}
                  rating={index}
                  userInfo={{ userId: item.id, userName: item.user }}
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
