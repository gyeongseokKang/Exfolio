import React, { useLayoutEffect, useState } from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

import AssessmentIcon from "@material-ui/icons/Assessment";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import GoogleLogIO from "../common/login/GoogleLogIO";
import HomeIcon from "@material-ui/icons/Home";
import MenuItem from "./component/MenuItem";
import PostAddIcon from "@material-ui/icons/PostAdd";
import TopLogoLayout from "./component/TopLogoLayout";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#EEEEEE",
      transition: "all 0.5s ease",
      position: "sticky",
      top: "0",
    },
    leftBar: {
      height: "100vh",
      float: "left",
      borderRadius: "0px 20px 20px 0px / 0px 20px 20px 0px",
      "& > hr": {
        margin: "10px 15px 10px 15px",
      },
    },
    topBar: {
      display: "flex",
      alignItems: "center",
      "& > hr": {
        margin: "0px",
      },
    },
  })
);

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

function LNB() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState<boolean>(true);
  const [width, height] = useWindowSize();
  return (
    <div
      className={`${classes.root} ${
        width < 800 ? classes.topBar : classes.leftBar
      }`}
    >
      <TopLogoLayout
        expanded={expanded}
        width={width}
        setExpanded={setExpanded}
      />
      <hr />
      <MenuItem
        expanded={expanded}
        width={width}
        icon={<HomeIcon />}
        to={"/"}
        title={"홈"}
      />
      <MenuItem
        expanded={expanded}
        width={width}
        icon={<PostAddIcon />}
        to={"/create"}
        title={"생성"}
      />
      <MenuItem
        expanded={expanded}
        width={width}
        icon={<FindInPageIcon />}
        to={"/analysis"}
        title={"분석"}
      />
      <MenuItem
        expanded={expanded}
        width={width}
        icon={<AssessmentIcon />}
        to={"/performance"}
        title={"성과방"}
      />
      <MenuItem
        expanded={expanded}
        width={width}
        icon={<AssignmentIndIcon />}
        to={"/individual"}
        title={"내 포트폴리오"}
      />
      {/* <GoogleLogIO expanded={expanded} width={width} /> */}
    </div>
  );
}

export default LNB;
