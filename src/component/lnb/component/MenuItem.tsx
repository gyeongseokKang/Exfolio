import React from "react";
import { Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "0px 20px 10px 20px",
      padding: "10px 0px 10px 5px",
      borderRadius: "10px",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#E6E6FA",
      },
    },
    link: {
      alignItems: "center",
      color: "black",
      textDecoration: "none",
      "& .MuiSvgIcon-root": {
        fontSize: "2rem",
      },
    },
    expandedOn: {
      display: "flex",
      paddingLeft: "1rem",
      fontSize: "1rem",
      animation: `$fade-in 1000ms`,
    },
    expandedOff: {
      display: "flex",
      justifyContent: "center",
      fontSize: "0.75rem",
    },
    "@keyframes fade-in": {
      "0%": {
        opacity: 0,
        transform: "translateX(100%)",
      },
      "100%": {
        opacity: 1,
        transform: "translateX(0)",
      },
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
      <Link className={classes.link} to={to} style={{ display: expanded ? "flex" : "inline-block" }}>
        {icon}
        {expanded ? (
          <div className={classes.expandedOn}>{title}</div>
        ) : (
          <div className={classes.expandedOff}>{title}</div>
        )}
      </Link>
    </div>
  );
};

export default MenuItem;
