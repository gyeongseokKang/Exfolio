import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import analysisPF from "./analysisPF.jpg";
import createPF from "./createPF.png";
import PerformancePage from "./performancePage/PerformancePage";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
    },
    cardLayout: {
      display: "flex",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
      "& > div": {
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        transition: "0.3s",
        maxWidth: "400px",
        margin: "10px",
        "&:hover": {
          boxShadow: "0 16px 24px 0 rgba(172, 34, 34, 0.2)",
          cursor: "pointer",
        },
        "& > img": {
          width: "400px",
          height: "400px",
        },
        "& > div": {
          padding: "5px",
        },
      },
    },
  })
);

function Main() {
  const classes = useStyles();
  let history = useHistory();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.cardLayout}>
          <div
            onClick={() => {
              history.push("/create");
            }}
          >
            <img src={createPF} alt="Avatar" />
            <div>
              <h2>Create PortFolio</h2>
              <p>유저가 원하는 비중의 포트폴리오를 생성합니다</p>
            </div>
          </div>

          <div
            onClick={() => {
              history.push("/analysis");
            }}
          >
            <img src={analysisPF} alt="Avatar" />
            <div>
              <h2>Analysis PortFolio</h2>
              <p>다양한 모델을 통해 유저의 포트폴리오를 분석 및 평가</p>
            </div>
          </div>
        </div>
        <hr style={{ margin: "10px 15px 10px 15px" }} />
        <PerformancePage />
      </div>
    </>
  );
}

export default Main;
