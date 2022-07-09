import { Button, Popover } from "@material-ui/core";
import React, { useState } from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

import { Holdings } from "./AddStock";
import StockData from "./stockList.json";
import StockDialogBody from "./component/StockDialogBody";
import StockDialogInput from "./component/StockDialogInput";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    searchInput: {},
    closeBtn: {
      marginTop: "5px",
      fontSize: "0.8rem",
    },
  })
);

const matchStock = (
  stockList: Holdings[],
  query: string,
  checkedList: Holdings[]
) => {
  if (!query) {
    return [];
  }

  if (!isNaN(Number(query)) && query.length < 3) {
    return [];
  }

  return stockList
    .filter((stock: Holdings) => {
      // before
      // return (stock.code.includes(query) || stock.name.toLowerCase().includes(query));
      // after
      return stock.code.includes(query) || is초성match(query, stock.name);
    })
    .map((stock: Holdings) => {
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
  checkedList: Holdings[];
}

const AddStockDialog = ({
  onOpen,
  anchorEl,
  setAnchorEl,
  onAdd,
  onDelete,
  checkedList,
}: addStockDialogProp) => {
  const classes = useStyles();

  const [searchQuery, setSearchQuery] = useState("");
  const matchedStocks = matchStock(
    StockData.stockList,
    searchQuery,
    checkedList
  );
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
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        PaperProps={{
          style: { maxHeight: "610px", width: "320px" },
        }}
      >
        <StockDialogInput
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <Button className={classes.closeBtn} onClick={() => handleClose()}>
          닫기
        </Button>
        <StockDialogBody
          searchQuery={searchQuery}
          onAdd={onAdd}
          onDelete={onDelete}
          matchedStocks={matchedStocks}
        />
      </Popover>
    </>
  );
};

export default AddStockDialog;

const reESC = /[\\^$.*+?()[\]{}|]/g;
const reChar = /[가-힣]/;
const reJa = /[ㄱ-ㅎ]/;
const offset = 44032;

const orderOffest = [
  ["ㄱ", 44032],
  ["ㄲ", 44620],
  ["ㄴ", 45208],
  ["ㄷ", 45796],
  ["ㄸ", 46384],
  ["ㄹ", 46972],
  ["ㅁ", 47560],
  ["ㅂ", 48148],
  ["ㅃ", 48736],
  ["ㅅ", 49324],
];

const con2syl = Object.fromEntries(orderOffest as readonly any[]);
const pattern = (ch: string) => {
  let r;
  if (reJa.test(ch)) {
    const begin =
      con2syl[ch] || (ch.charCodeAt(0) - 12613) * 588 + con2syl["ㅅ"];
    const end = begin + 587;
    r = `[${ch}\\u${begin.toString(16)}-\\u${end.toString(16)}]`;
  } else if (reChar.test(ch)) {
    const chCode = ch.charCodeAt(0) - offset;
    if (chCode % 28 > 0) return ch;
    const begin = Math.floor(chCode / 28) * 28 + offset;
    const end = begin + 27;
    r = `[\\u${begin.toString(16)}-\\u${end.toString(16)}]`;
  } else r = ch.replace(reESC, "\\$&");
  return `(${r})`;
};

const matcher = (
  v: string | any[],
  matches: string | any[],
  sTag: string,
  eTag: string,
  tagLen: number
) => {
  let distance = Number.MAX_VALUE,
    first = -1,
    last = 0,
    vLast = 0,
    vPrev = 0,
    acc: any = v;
  for (let i = 1, j = matches.length; i < j; i++) {
    const curr = matches[i];
    vLast = v.indexOf(curr, vLast);
    if (first == -1) first = vLast;
    if (vLast && distance > vLast - vPrev) distance = vLast - vPrev;
    vPrev = vLast;
    last = acc.indexOf(curr, last);
    acc = `${acc.substring(0, last)}${sTag}${curr}${eTag}${acc.substr(
      last + 1
    )}`;
    last += tagLen;
  }
  return [acc, distance, v.length, first];
};

const sorter = ([, dA, lA, fA]: any, [, dB, lB, fB]: any) => {
  if (dA > dB) return 1;
  else if (dA < dB) return -1;
  else {
    if (fA > fB) return 1;
    else if (fA < fB) return -1;
    else {
      if (lA > lB) return 1;
      else if (lA < lB) return -1;
      else return 0;
    }
  }
};

const is초성match = (query: string, target: string) => {
  const reg = new RegExp(query.split("").map(pattern).join(".*?"), "i");
  const matches = reg.exec(target);
  return Boolean(matches);
};

const matchList = ((_) => {
  return (search: string, arr: any[], sTag = "", eTag = "", sort = sorter) => {
    const reg = new RegExp(search.split("").map(pattern).join(".*?"), "i");
    const tagLen = sTag.length + eTag.length;
    return arr
      .reduce((acc: any[][], curr: string) => {
        const matches = reg.exec(curr);
        if (matches) {
          acc.push(matcher(curr, matches, sTag, eTag, tagLen));
          console.log(matches, matcher(curr, matches, sTag, eTag, tagLen));
        }
        return acc;
      }, [])
      .sort(sort);
  };
})();
