import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AutoGraphIcon from "@material-ui/icons/AutoGraph";
import BugReportIcon from "@material-ui/icons/BugReport";
import CelebrationIcon from "@material-ui/icons/Celebration";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HearingIcon from "@material-ui/icons/Hearing";
import MovingIcon from "@material-ui/icons/Moving";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    "& > .MuiSvgIcon-root": {
      fontSize: "2.5rem",
    },
  },
}));

interface PortFolioBadgeProp {
  userName: string;
  PFCount: {
    public: number;
    private: number;
    delete: number;
  };
}

const PortFolioBadge = ({ userName, PFCount }: PortFolioBadgeProp) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AttachMoneyIcon />
      <AutoGraphIcon />
      <BugReportIcon />
      <CelebrationIcon />
      <FavoriteIcon />
      <HearingIcon />
      <MovingIcon />
    </div>
  );
};

export default PortFolioBadge;
