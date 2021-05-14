import React from "react";
import { Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: "10px",
      paddingRight: "10px",
      marginTop: "20px",
      fontWeight: 500,
      fontStyle: "normal",
      fontFamily: "Noto Sans CJK KR",
      "&:hover": {
        backgroundColor: "#E6E6FA",
      },
    },
    link: {
      color: "black",
      textDecoration: "none",
      "& .MuiSvgIcon-root": {
        fontSize: "2rem",
        margin: "0px 20px 0px 10px",
      },
    },
    iconTitleV: {
      display: "flex",
      alignItems: "center",
    },
    iconTextH: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    bottomText: {
      margin: "0px 20px 0px 10px",
      fontSize: "0.75rem",
    },
  })
);

interface TopLogoLayoutProp {
  icon: any;
  expanded: boolean;
  to: string;
  title: string;
}

const MenuItem = ({ icon, expanded = true, to, title }: TopLogoLayoutProp) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link className={classes.link} to={to}>
        <div className={classes.iconTitleV}>
          <div className={classes.iconTextH}>
            {icon}
            {!expanded ? <div className={classes.bottomText}>{title}</div> : undefined}
          </div>
          {expanded ? <>{title} </> : undefined}
        </div>
      </Link>
    </div>
  );
};

export default MenuItem;
