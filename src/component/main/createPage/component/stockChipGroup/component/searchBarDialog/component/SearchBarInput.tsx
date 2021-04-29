import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import BackspaceIcon from "@material-ui/icons/Backspace";
import CloseIcon from "@material-ui/icons/Close";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "sticky",
      top: "0",
      display: "flex",
      justifyContent: "center",
      paddingTop: "10px",
    },
    input: {
      borderWidth: "0px 0px 1px 0px",
      borderBlockColor: "blue",
    },
    form: {
      "&:focus-visible": {
        backgroundColor: "red",
      },
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
        <SearchIcon fontSize={"small"} />
        <form className={classes.form} action="/" method="get">
          <input
            autoComplete="off"
            className={classes.input}
            value={searchQuery}
            onInput={(e: any) => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="삼성전자 or 005930"
            name=""
          />
        </form>
        <BackspaceIcon
          fontSize={"small"}
          style={{}}
          onClick={() => {
            setSearchQuery("");
          }}
        />
      </div>
    </>
  );
};

export default SearchBarInput;
