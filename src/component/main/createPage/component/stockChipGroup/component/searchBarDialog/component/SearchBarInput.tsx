import SearchIcon from "@material-ui/icons/Search";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      float: "left",
      justifyContent: "center",
      paddingTop: "10px",
      paddingLeft: "10px",
    },
    input: {
      borderWidth: "0px 0px 1px 0px",
      borderBlockColor: "blue",
      marginLeft: "-20px",
      marginRight: "-20px",
      paddingLeft: "20px",
      paddingRight: "70px",
      fontWeight: 500,
      fontFamily: "Noto Sans CJK KR",
      zIndex: 10,
      "&:hover": {
        background: "#E0E0E0",
        cursor: "pointer",
      },
    },
    closeIcon: {
      marginTop: "2px",
      transition: "all 0.3s ease",
      "&:hover": {
        cursor: "pointer",
        transform: "rotate(90deg)",
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
        <SearchIcon fontSize={"small"} style={{ marginTop: "2px", zIndex: 11 }} />
        <form action="/" method="get">
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
        <HighlightOffIcon
          className={classes.closeIcon}
          fontSize={"small"}
          onClick={() => {
            setSearchQuery("");
          }}
        />
      </div>
    </>
  );
};

export default SearchBarInput;
