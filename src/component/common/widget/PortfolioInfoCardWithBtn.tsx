import { Button, Paper } from "@material-ui/core";
import React from "react";
import PortfolioInfoCard from "./PortfolioInfoCard";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { RRSW } from "src/service/getEfficientFrontier";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { position: "relative", width: "280px" },
    selectButton: {
      position: "absolute",
      bottom: "5px",
      right: "5px",
      "&:hover": {
        cursor: "pointer",
      },
    },
  })
);

interface PortfolioInfoCardWithBtnProp {
  title: string;
  info: RRSW;
  buttonText?: string;
  selected?: boolean;
  setSelected?: any;
  onPfClick?: (info: RRSW) => void;
}

export default function PortfolioInfoCardWithBtn({
  title,
  info,
  buttonText = "SELECT",
  selected = false,
  setSelected,
  onPfClick,
}: PortfolioInfoCardWithBtnProp) {
  const classes = useStyles();
  return (
    <Paper
      className={classes.root}
      elevation={0}
      style={{
        border: selected ? "2px solid #303F9F" : "",
        bottom: selected ? "5px" : "",
      }}
    >
      <PortfolioInfoCard
        values={info.weights.values}
        labels={info.weights.items}
        title={title}
        volatility={info.risk}
        returns={info.returns}
        sharpe={info.sharpe}
      />
      {onPfClick !== undefined ? (
        <Button
          variant="contained"
          color="primary"
          size="small"
          className={classes.selectButton}
          onClick={() => {
            onPfClick(info);
            setSelected && setSelected();
          }}
        >
          {buttonText}
        </Button>
      ) : undefined}
    </Paper>
  );
}
