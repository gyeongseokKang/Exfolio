import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "1rem",
    fontWeight: 500,
    fontFamily: "Noto Sans CJK KR",
  },
}));

interface LoadingProgressProp {
  width?: number | string;
  height?: number | string;
  description?: string;
}
const LoadingProgress = ({ width, height, description = "..." }: LoadingProgressProp) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root} style={{ height: height, width: width }}>
        <h3>{description}</h3>
        <CircularProgress size={70} />
      </div>
    </>
  );
};

export default LoadingProgress;
