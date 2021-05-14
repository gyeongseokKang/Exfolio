import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button, Popover } from "@material-ui/core";
import StockDialogInput from "./component/StockDialogInput";
import StockDialogBody from "./component/StockDialogBody";
import StockData from "./stockList.json";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    searchInput: {},
    closeBtn: {
      marginTop: "5px",
      fontSize: "0.8rem",
      fontWeight: 500,
      fontFamily: "Noto Sans CJK KR",
    },
  })
);

const matchStock = (stockList: { code: string; name: string }[], query: string, checkedList: { name: string; code: string; weight: number }[]) => {
  if (!query) {
    return [];
  }

  if (!isNaN(Number(query)) && query.length < 3) {
    return [];
  }

  return stockList
    .filter((stock: { code: string; name: string }) => {
      return stock.code.includes(query) || stock.name.toLowerCase().includes(query);
    })
    .map((stock: { code: string; name: string }) => {
      let checked = checkedList.some((item) => item.name === stock.name);
      return { ...stock, checked: checked };
    });
};

interface addStockDialogProp {
  onOpen: boolean;
  anchorEl: HTMLButtonElement | null;
  setAnchorEl: (anchorEl: HTMLButtonElement | null) => void;
  onAdd(name: string, code: string): void;
  onDelete(name: string): void;
  checkedList: {
    name: string;
    code: string;
    weight: number;
  }[];
}

const AddStockDialog = ({ onOpen, anchorEl, setAnchorEl, onAdd, onDelete, checkedList }: addStockDialogProp) => {
  const classes = useStyles();

  const [searchQuery, setSearchQuery] = useState("");
  const matchedStocks = matchStock(StockData.stockList, searchQuery, checkedList);
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Popover
        id={"search"}
        open={onOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        PaperProps={{
          style: { maxHeight: "610px", width: "320px" },
        }}
      >
        <StockDialogInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Button className={classes.closeBtn} onClick={() => handleClose()}>
          닫기
        </Button>
        <StockDialogBody searchQuery={searchQuery} onAdd={onAdd} onDelete={onDelete} matchedStocks={matchedStocks} />
      </Popover>
    </>
  );
};

export default AddStockDialog;