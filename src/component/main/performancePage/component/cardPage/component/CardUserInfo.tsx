import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: { display: "flex", alignItems: "center", justifyContent: "space-around" },
  countTable: {
    "& > thead > tr > th": {
      color: "#168",
      background: "#f0f6f9",
      borderBottom: "1px solid",
      padding: "5px",
    },
    "& > tbody > tr > th": {
      color: "#168",
    },
  },
}));

interface CardUserInfoProp {
  userName: string;
  PFCount: {
    public: number;
    private: number;
    delete: number;
  };
}

const CardUserInfo = ({ userName, PFCount }: CardUserInfoProp) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>{userName}</div>
      <table className={classes.countTable}>
        <thead>
          <tr>
            <th>Public</th>
            <th>Private</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{PFCount.public}</th>
            <th>{PFCount.private}</th>
            <th>{PFCount.delete}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CardUserInfo;
