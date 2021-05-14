import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#EEEEEE",
      height: "100vh",
      float: "left",
      borderRadius: "0px 20px 20px 0px / 0px 20px 20px 0px",
      "& img": {
        width: "50px",
        height: "50px",
      },
    },
    button: {
      margin: "10px 10px 10px 10px",
      padding: "0px 20px 0px 10px",
      height: "2rem",
      minWidth: "130px",
      borderRadius: "10px",
      fontSize: "1rem",
      fontWeight: 500,
      fontFamily: "Noto Sans CJK KR",
      "& .MuiSvgIcon-root": {
        transition: "all 0.3s ease",
        marginRight: "10px",
      },
      "&:hover": {
        color: "white",
        fontWeight: "normal",
        background: "#303F9F",
        boxShadow: "0 8px 16px 0 rgba(172, 34, 34, 0.2)",
        cursor: "pointer",
        "& .MuiSvgIcon-root": {
          transform: "rotate(90deg)",
        },
      },
    },
  })
);

interface AddStockButtonProp {
  onClick: (event: any) => void;
}
function AddStockButton({ onClick }: AddStockButtonProp) {
  const classes = useStyles();

  return (
    <>
      <Button className={classes.button} variant="contained" size="small" onClick={onClick}>
        <AddCircleIcon />
        주식 추가
      </Button>
    </>
  );
}

export default AddStockButton;
