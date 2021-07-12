import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import applogo from "./applogo.png";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "50px",
      display: "flex",
      alignItems: "center",
      marginLeft: "10px",
      marginTop: "20px",
      "& > img": {
        width: "36px",
        height: "36px",
      },
      "& > div": {
        fontSize: "1.75rem",
        animation: `$fade-in 1000ms`,
      },
    },
    menuButton: {
      borderRadius: "50%",
      marginLeft: "10px",
      marginRight: "10px",
      padding: "2px",
    },
    "@keyframes fade-in": {
      "0%": {
        opacity: 0,
        transform: "translateX(-30%)",
      },
      "100%": {
        opacity: 1,
        transform: "translateX(0)",
      },
    },
  })
);

interface TopLogoLayoutProp {
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
}

const TopLogoLayout = ({ expanded = true, setExpanded }: TopLogoLayoutProp) => {
  const classes = useStyles();
  const menuIconClicked = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <div className={classes.root}>
        <IconButton className={classes.menuButton} onClick={menuIconClicked}>
          <MenuIcon />
        </IconButton>
        {expanded ? (
          <>
            <img src={applogo} alt="logo" />
            <div>Dr.Folio</div>
          </>
        ) : undefined}
      </div>
    </>
  );
};

export default TopLogoLayout;
