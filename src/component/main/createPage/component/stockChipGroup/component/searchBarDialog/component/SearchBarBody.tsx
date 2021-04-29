import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Checkbox } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "10px",
      position: "relative",
    },
    header: {
      borderBottom: "1px solid lavender",
    },
    stockItem: {
      marginBottom: "1px",
      marginRight: "2px",
      "&:hover": {
        backgroundColor: "lavender",
        cursor: "pointer",
      },
    },
    stockCode: {
      float: "left",
      width: "80px",
      fontSize: "0.8rem",
      color: "gray",
      paddingTop: "15px",
    },
    stockName: {
      float: "left",
      width: "140px",
      paddingTop: "12px",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden",
    },
    upScroll: {
      position: "sticky",
      bottom: "0",
      marginLeft: "270px",
    },
    "@global": {
      "*::-webkit-scrollbar": {
        width: "0.4em",
      },
      "*::-webkit-scrollbar-track": {
        "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
      },
      "*::-webkit-scrollbar-thumb": {
        backgroundColor: "lavender",
        outline: "1px solid slategrey",
      },
    },
  })
);

interface SearchBarBodyProp {
  onAdd(name: string, code: string): void;
  onDelete(name: string): void;
  matchedStocks: any;
}

const SearchBarBody = ({ onAdd, onDelete, matchedStocks }: SearchBarBodyProp) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.header}>
          <div style={{ float: "left", width: "80px" }}>코드</div>
          <div style={{ float: "left", width: "140px" }}>주식명</div>
          <div>보유</div>
        </div>
        <div style={{ overflowY: "scroll", overflowX: "hidden", maxHeight: "500px" }}>
          {matchedStocks.map((StockData: any) => (
            <div
              className={classes.stockItem}
              id={StockData.name}
              onClick={(e: any) => {
                if (e.target.innerText.length > 0) {
                  let codeElement: HTMLElement | null = document.querySelector(`#${e.target.id.split("_")[0]}_code`);
                  let nameElement: HTMLElement | null = document.querySelector(`#${e.target.id.split("_")[0]}_name`);
                  if (codeElement && nameElement) {
                    onAdd(nameElement.innerText, codeElement.innerText);
                  }
                }
              }}
            >
              <div className={classes.stockCode} id={`${StockData.name}_code`}>
                {StockData.code}
              </div>
              <div className={classes.stockName} id={`${StockData.name}_name`}>
                {StockData.name}
              </div>
              <Checkbox
                id={StockData.name}
                checked={StockData.checked}
                color="primary"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (e.target.checked) {
                    let codeElement: HTMLElement | null = document.querySelector(`#${e.target.id.split("_")[0]}_code`);
                    let nameElement: HTMLElement | null = document.querySelector(`#${e.target.id.split("_")[0]}_name`);
                    if (codeElement && nameElement) onAdd(nameElement.innerText, codeElement.innerText);
                  } else {
                    onDelete(e.target.id);
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
      {/* <ArrowUpwardIcon className={classes.upScroll} /> */}
    </>
  );
};

export default SearchBarBody;
