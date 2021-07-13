import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React, { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import PostAddIcon from "@material-ui/icons/PostAdd";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import AssessmentIcon from "@material-ui/icons/Assessment";
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
      transition: "all 0.5s ease",
    },
  })
);

function LNB() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState<boolean>(true);
  return (
    <div className={classes.root} style={{ width: expanded ? "250px" : "80px" }}>
      <TopLogoLayout expanded={expanded} setExpanded={setExpanded} />
      <hr style={{ margin: "10px 15px 10px 15px" }} />
      <MenuItem expanded={expanded} icon={<HomeIcon />} to={"/"} title={"홈"} />
      <MenuItem expanded={expanded} icon={<PostAddIcon />} to={"/create"} title={"생성"} />
      <MenuItem expanded={expanded} icon={<FindInPageIcon />} to={"/analysis"} title={"분석"} />
      <MenuItem expanded={expanded} icon={<AssignmentIndIcon />} to={"/propensity"} title={"성향"} />
      <MenuItem expanded={expanded} icon={<AssessmentIcon />} to={"/performance"} title={"성과방"} />
    </div>
  );
}

export default LNB;
