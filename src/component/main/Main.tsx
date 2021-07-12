import React from "react";
import { Paper } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import analysisPF from "./analysisPF.jpg";
import createPF from "./createPF.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "left",
      flexWrap: "wrap",
    },
    card: {
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
      transition: "0.3s",
      maxWidth: "400px",
      margin: "200px 120px 120px 120px",
      float: "left",
      "&:hover": {
        boxShadow: "0 16px 24px 0 rgba(172, 34, 34, 0.2)",
        cursor: "pointer",
      },
      "& img": {
        width: "100%",
        height: "400px",
      },
      "& div": {
        paddingTop: "10px",
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
        <Paper elevation={0}>
          <div
            className={classes.card}
            onClick={() => {
              history.push("/create");
            }}
          >
            <img src={createPF} alt="Avatar" />
            <div className="container" style={{ paddingLeft: "30px" }}>
              <h2>Create PortFolio</h2>
              <p>유저가 원하는 비중의 포트폴리오를 생성합니다</p>
            </div>
          </div>

          <div
            className={classes.card}
            onClick={() => {
              history.push("/analysis");
            }}
          >
            <img src={analysisPF} alt="Avatar" />
            <div className="container" style={{ paddingLeft: "30px" }}>
              <h2>Analysis PortFolio</h2>
              <p>다양한 모델을 통해 유저의 포트폴리오를 분석 및 평가</p>
            </div>
          </div>
        </Paper>
      </div>
    </>
  );
}

export default Main;
