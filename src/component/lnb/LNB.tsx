import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React, { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import PostAddIcon from "@material-ui/icons/PostAdd";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import TopLogoLayout from "./component/TopLogoLayout";
import MenuItem from "./component/MenuItem";

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
  })
);

function LNB({ history }: any) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState<boolean>(true);
  return (
    <div className={classes.root} style={{ width: expanded ? "250px" : "80px" }}>
      <TopLogoLayout expanded={expanded} setExpanded={setExpanded} />
      <hr />
      <MenuItem expanded={expanded} icon={<HomeIcon />} to={"/"} title={"홈"} />
      <MenuItem expanded={expanded} icon={<PostAddIcon />} to={"/create"} title={"생성"} />
      <MenuItem expanded={expanded} icon={<FindInPageIcon />} to={"/analysis"} title={"분석"} />
      <MenuItem expanded={expanded} icon={<AssignmentIndIcon />} to={"/propensity"} title={"성향"} />
    </div>
  );
}

export default LNB;
