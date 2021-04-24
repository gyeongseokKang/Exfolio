import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Plot from "react-plotly.js";
import RecommendPortfolioItem from "./RecommendPortfolioItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      listStyle: "none",
      width: "80%",
      padding: theme.spacing(0.5),
      margin: 0,
    },
    chip: {
      margin: theme.spacing(0.5),
    },
    button: {
      width: "15%",
      margin: "10px 10px 10px 10px",
      fontSize: "2rem",
      fontWeight: "bold",
      "&:hover": {
        background: "#f00",
        boxShadow: "0 16px 24px 0 rgba(172, 34, 34, 0.2)",
        cursor: "pointer",
      },
    },
  })
);

export default function RecommendPortfolio() {
  const classes = useStyles();

  return (
    <>
      <div style={{ display: "flex" }}>
        <Paper
          component="ul"
          className={classes.root}
          style={{
            margin: "10px 10px 10px 10px",
          }}
        >
          <RecommendPortfolioItem />
        </Paper>
      </div>
    </>
  );
}
