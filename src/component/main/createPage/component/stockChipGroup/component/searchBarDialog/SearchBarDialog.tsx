import React, { useState } from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Popover, Checkbox } from "@material-ui/core";
import SearchBarInput from "./component/SearchBarInput";
import StockData from "./stockList.json";
import SearchBarBody from "./component/SearchBarBody";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  })
);

const filterPosts = (
  stockList: any, //{ type: "코스피" | "코스닥"; code: string; name: string }[],
  query: string,
  checkedList: { name: string; radio: number }[]
) => {
  if (!query) {
    return [];
  }
  return stockList
    .filter((stock: any) => {
      return stock.type.includes(query) || stock.code.includes(query) || stock.name.toLowerCase().includes(query);
    })
    .map((stock: any) => {
      let checked = checkedList.some((item) => item.name === stock.name);
      return { ...stock, checked: checked };
    });
};

interface searchBarDialogProp {
  onOpen: boolean;
  anchorEl: HTMLButtonElement | null;
  setAnchorEl: (anchorEl: HTMLButtonElement | null) => void;
  onAdd(name: string): void;
  onDelete(name: string): void;
  checkedList: {
    name: string;
    radio: number;
  }[];
}

const SearchBarDialog = ({ onOpen, anchorEl, setAnchorEl, onAdd, onDelete, checkedList }: searchBarDialogProp) => {
  const classes = useStyles();

  const [searchQuery, setSearchQuery] = useState("");
  const filteredPosts = filterPosts(StockData.stockList, searchQuery, checkedList);
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
            style: { maxHeight: "500px", width: "300px" },
          }}
        >
          <SearchBarInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <SearchBarBody onAdd={onAdd} onDelete={onDelete} filteredPosts={filteredPosts} />
        </Popover>
      </div>
    </>
  );
};

export default SearchBarDialog;
