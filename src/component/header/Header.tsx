import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import applogo from "./applogo.png"; //"@res/applogo.png";
import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import PostAddIcon from "@material-ui/icons/PostAdd";
import FindInPageIcon from "@material-ui/icons/FindInPage";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "250px",
      backgroundColor: "#EEEEEE",
      height: "100vh",
      float: "left",
      borderRadius: "0px 20px 20px 0px / 0px 20px 20px 0px",
      "& img": {
        width: "50px",
        height: "50px",
      },
    },
    appName: {
      fontSize: "2rem",
      fontWeight: "bold",
    },
    menu: {
      fontSize: "1rem",
      "& > *": {
        paddingBottom: "40px",
        paddingLeft: "20px",
      },
    },
    link: {
      color: "black",
      textDecoration: "none",
      "& div": {
        paddingTop: "10px",
      },
    },
  })
);

function Header({ history }: any) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div style={{ paddingTop: "20px", paddingLeft: "20px" }}>
        <img src={applogo} alt="logo" style={{ float: "left" }} />
        <div className={classes.appName}>Dr.Folio</div>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <div className={classes.menu}>
        <div>
          <Link className={classes.link} to="/">
            <HomeIcon style={{ fontSize: 40, float: "left" }} />
            <div> 메인 화면</div>
          </Link>
        </div>
        <div>
          <Link className={classes.link} to="/create">
            <PostAddIcon style={{ fontSize: 40, float: "left" }} />
            <div> 생성 </div>
          </Link>
        </div>
        <div>
          <Link className={classes.link} to="/analysis">
            <FindInPageIcon style={{ fontSize: 40, float: "left" }} />
            <div> 분석 </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
