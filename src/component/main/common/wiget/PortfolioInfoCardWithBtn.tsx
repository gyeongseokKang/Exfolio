import { Button, Paper } from "@material-ui/core";
import React from "react";
import PortfolioInfoCard from "./PortfolioInfoCard";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { RRSW } from "src/service/getEfficientFrontier";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { position: "relative" },
    selectButton: {
      position: "absolute",
      bottom: "-15px",
      right: "25px",
      "&:hover": {
        cursor: "pointer",
      },
    },
  })
);

interface PortfolioInfoCardWithBtnProp {
  title: string;
  info: RRSW;
  onPfClick: (info: RRSW) => void;
}

export default function PortfolioInfoCardWithBtn({ title, info, onPfClick }: PortfolioInfoCardWithBtnProp) {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={0}>
      <PortfolioInfoCard
        values={info.weights.values}
        labels={info.weights.items}
        title={title}
        volatility={info.risk}
        returns={info.returns}
        sharpe={info.sharpe}
      />
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.selectButton}
        onClick={() => {
          onPfClick(info);
        }}
      >
        Select
      </Button>
    </Paper>
  );
}
