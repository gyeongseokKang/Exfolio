import React, { useState } from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Popover } from "@material-ui/core";
import SearchBarInput from "./component/SearchBarInput";
import StockData from "./stockList.json";
import SearchBarBody from "./component/SearchBarBody";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
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

interface searchBarDialogProp {
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

const SearchBarDialog = ({ onOpen, anchorEl, setAnchorEl, onAdd, onDelete, checkedList }: searchBarDialogProp) => {
  const classes = useStyles();

  const [searchQuery, setSearchQuery] = useState("");
  const matchedStocks = matchStock(StockData.stockList, searchQuery, checkedList);
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className={classes.root}>
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
          <SearchBarInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <SearchBarBody onAdd={onAdd} onDelete={onDelete} matchedStocks={matchedStocks} />
        </Popover>
      </div>
    </>
  );
};

export default SearchBarDialog;
