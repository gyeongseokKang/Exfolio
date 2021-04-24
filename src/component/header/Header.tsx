import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import applogo from "./applogo.png"; //"@res/applogo.png";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      paddingLeft: "100px",
      height: "150px",
      "& div": {
        float: "left",
      },
      "& img": {
        width: "50px",
        height: "50px",
      },
    },
    homepage: {
      fontSize: "2rem",
      float: "left",
      fontWeight: "bold",
    },
    link: {
      fontSize: "1rem",
      float: "left",
      padding: "10px",
      "& > *": {
        padding: "5px",
        color: "#509FD7",
      },
    },
  })
);

function Header({ history }: any) {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <div>
        <div>
          <img src={applogo} alt="logo" />
        </div>
        <div className={classes.homepage}>Dr.포폴</div>
        <div className={classes.link}>
          <Link to="/">홈</Link>
          <Link to="/create">생성</Link>
          <Link to="/analysis">분석</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
