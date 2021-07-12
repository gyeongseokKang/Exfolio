import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Checkbox } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "10px",
      position: "relative",
    },
    header: {
      borderBottom: "1px solid lavender",
    },
    stockBody: {
      overflowY: "scroll",
      overflowX: "hidden",
      maxHeight: "500px",
    },
    stockItem: {
      display: "flex",
      alignItems: "center",
      "&:hover": {
        backgroundColor: "lavender",
        cursor: "pointer",
      },
      "&:nth-child(even)": {
        backgroundColor: "#F5F5F5",
        "&:hover": {
          backgroundColor: "lavender",
        },
      },
    },
    stockCode: {
      float: "left",
      width: "80px",
      fontSize: "0.8rem",
      color: "gray",
    },
    stockName: {
      float: "left",
      width: "160px",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden",
    },
    noMatchedText: {
      display: "flex",
      justifyContent: "center",
      fontSize: "0.8rem",
      color: "gray",
    },
    "@global": {
      "*::-webkit-scrollbar": {
        width: "0.4em",
      },
      "*::-webkit-scrollbar-track": {
        "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
      },
      "*::-webkit-scrollbar-thumb": {
        backgroundColor: "#2E2E2E",
        outline: "1px solid #E6E6FF",
        borderRadius: "20px",
      },
    },
  })
);

interface StockDialogBodyProp {
  searchQuery: string;
  onAdd(name: string, code: string): void;
  onDelete(name: string): void;
  matchedStocks: {
    code: string;
    name: string;
    checked: boolean;
  }[];
}

const StockDialogBody = ({ searchQuery, onAdd, onDelete, matchedStocks }: StockDialogBodyProp) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.header}>
          <div style={{ float: "left", width: "100px" }}>코드</div>
          <div style={{ float: "left", width: "145px" }}>주식명</div>
          <div>선택</div>
        </div>
        <div className={classes.stockBody}>
          {matchedStocks
            .map((StockData: { code: string; name: string; checked: boolean }) => (
              <BodyItem
                StockData={StockData}
                searchQuery={searchQuery}
                onAdd={onAdd}
                onDelete={onDelete}
                matchedStocks={matchedStocks}
              />
            ))
            .slice(0, 100)}
          {matchedStocks.length === 0 ? (
            <div className={classes.noMatchedText}>검색된 결과가 없습니다.</div>
          ) : undefined}
          {matchedStocks.length > 100 ? (
            <div className={classes.noMatchedText}>
              검색된 100개를 초과했습니다.
              <br />
              구체적인 정보를 입력해주세요
            </div>
          ) : undefined}
        </div>
      </div>
    </>
  );
};

interface BodyItemProp {
  searchQuery: string;
  onAdd(name: string, code: string): void;
  onDelete(name: string): void;
  matchedStocks: {
    code: string;
    name: string;
    checked: boolean;
  }[];
  StockData: { code: string; name: string; checked: boolean };
}

const BodyItem = ({ StockData, searchQuery, onAdd, onDelete, matchedStocks }: BodyItemProp) => {
  const classes = useStyles();

  const bodyRowClicked = (e: any) => {
    if (e.target.innerText.length > 0) {
      const targetStock = matchedStocks.find(
        (item) => item.name === e.target.innerText || item.code === e.target.innerText
      );
      if (targetStock) {
        onAdd(targetStock.name, targetStock.code);
      }
    }
  };
  const onCheckboxClicked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetStock = matchedStocks.find((item) => item.code === e.target.id.split("_")[0]);
    if (targetStock === undefined) return;
    if (e.target.checked) {
      onAdd(targetStock.name, targetStock.code);
    } else {
      onDelete(targetStock.name);
    }
  };
  return (
    <div className={classes.stockItem} key={StockData.code + "layout"} onClick={bodyRowClicked}>
      <div className={classes.stockCode} id={`${StockData.code}_code`}>
        {StockData.code.includes(searchQuery) ? (
          <>
            {StockData.code.split(searchQuery)[0]}
            <span style={{ color: "#3F51B5" }}>{searchQuery}</span>
            {StockData.code.split(searchQuery)[1]}
          </>
        ) : (
          StockData.code
        )}
      </div>
      <div className={classes.stockName} id={`${StockData.name}_name`}>
        {StockData.name.includes(searchQuery) ? (
          <>
            {StockData.name.split(searchQuery)[0]}
            <span style={{ color: "#3F51B5" }}>{searchQuery}</span>
            {StockData.name.split(searchQuery)[1]}
          </>
        ) : (
          StockData.name
        )}
      </div>
      <Checkbox
        id={`${StockData.code}_checkbox`}
        checked={StockData.checked}
        color="primary"
        onChange={onCheckboxClicked}
      />
    </div>
  );
};

export default StockDialogBody;
