import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      paddingTop: "10px",
    },
    input: {
      borderLeftWidth: "0px",
      borderRightWidth: "0px",
      borderTopWidth: "0px",
      borderBottomWidth: "1px",
      borderBlockColor: "blue",
    },
  })
);

interface searchBarProp {
  searchQuery: string;
  setSearchQuery: any;
}

const SearchBarInput = ({ searchQuery, setSearchQuery }: searchBarProp) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <SearchIcon style={{ float: "left" }} />
        <form action="/" method="get" style={{ float: "left", paddingLeft: "20px", paddingRight: "20px" }}>
          <input
            autoComplete="off"
            className={classes.input}
            value={searchQuery}
            onInput={(e: any) => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="원하는 주식을 입력하세요"
            name=""
          />
        </form>
        <CloseIcon
          onClick={() => {
            setSearchQuery("");
          }}
        />
      </div>
    </>
  );
};

export default SearchBarInput;
