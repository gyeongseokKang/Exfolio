import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

import { Checkbox } from "@material-ui/core";
import React from "react";

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

const StockDialogBody = ({
  searchQuery,
  onAdd,
  onDelete,
  matchedStocks,
}: StockDialogBodyProp) => {
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
            .map(
              (StockData: { code: string; name: string; checked: boolean }) => (
                <BodyItem
                  StockData={StockData}
                  searchQuery={searchQuery}
                  onAdd={onAdd}
                  onDelete={onDelete}
                  matchedStocks={matchedStocks}
                />
              )
            )
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

const BodyItem = ({
  StockData,
  searchQuery,
  onAdd,
  onDelete,
  matchedStocks,
}: BodyItemProp) => {
  const classes = useStyles();

  const bodyRowClicked = (e: any) => {
    if (e.target.innerText.length > 0) {
      const targetStock = matchedStocks.find(
        (item) =>
          item.name === e.target.innerText || item.code === e.target.innerText
      );
      if (targetStock) {
        onAdd(targetStock.name, targetStock.code);
      }
    }
  };
  const onCheckboxClicked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetStock = matchedStocks.find(
      (item) => item.code === e.target.id.split("_")[0]
    );
    if (targetStock === undefined) return;
    if (e.target.checked) {
      onAdd(targetStock.name, targetStock.code);
    } else {
      onDelete(targetStock.name);
    }
  };

  const { 완전한문자그룹, 불완전한문자그룹 } = getMatchedGroupList(
    searchQuery,
    StockData.name
  );

  const 색칠된_주식명 = [...StockData.name].map((letter, index) => {
    if (완전한문자그룹.map((item) => item.index).includes(index)) {
      return <span style={{ color: "#1b31b1" }}>{letter}</span>;
    }
    if (불완전한문자그룹.map((item) => item.index).includes(index)) {
      return <span style={{ color: "#d43912" }}>{letter}</span>;
    }
    return <span>{letter}</span>;
  });

  const ColoredItem = ({ item, query }: { item: string; query: string }) => {
    return item.includes(query) ? (
      <>
        {item.split(query)[0]}
        <span style={{ color: "#3F51B5" }}>{query}</span>
        {item.split(query)[1]}
      </>
    ) : (
      <>{item}</>
    );
  };
  return (
    <div
      className={classes.stockItem}
      key={StockData.code + "layout"}
      onClick={bodyRowClicked}
    >
      <div className={classes.stockCode} id={`${StockData.code}_code`}>
        <ColoredItem item={StockData.code} query={searchQuery} />
      </div>
      <div className={classes.stockName} id={`${StockData.name}_name`}>
        {색칠된_주식명}
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

const is초성match = (query: string, target: string) => {
  const reg = new RegExp(query.split("").map(pattern).join(".*?"), "i");
  const matches = reg.exec(target);
  return Boolean(matches);
};

const getMatchedGroupList = (query: string, target: string) => {
  const 검색어 = [...query];
  const 초성정규식 = query.split("").map(pattern);

  const 완전한문자 = 검색어.filter((it) => 초성정규식.includes(it));
  const 불완전한문자정규식 = 초성정규식.filter((it) => !검색어.includes(it));

  const 완전한문자그룹 = 완전한문자.reduce(
    (
      group: { index: number; letter: string }[],
      curr: string,
      currentIndex: number
    ) => {
      if (검색어.includes(curr)) {
        group.push({ index: currentIndex, letter: curr });
      }
      return group;
    },
    []
  );
  const reg = new RegExp(불완전한문자정규식.join(".*?"), "i");
  const [_, ...rest] = reg.exec(target) as any;
  const 불완전한문자그룹: { index: number; letter: string }[] = rest.map(
    (letter: string, index: number) => {
      return { index: target.indexOf(letter), letter: letter };
    }
  );
  return { 완전한문자그룹, 불완전한문자그룹 };
};
