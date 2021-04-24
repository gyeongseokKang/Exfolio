import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Checkbox } from "@material-ui/core";

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

interface SearchBarBodyProp {
  onAdd(name: string): void;
  onDelete(name: string): void;
  filteredPosts: any;
}

const SearchBarBody = ({ onAdd, onDelete, filteredPosts }: SearchBarBodyProp) => {
  return (
    <>
      <div className="matchedStockList" style={{ padding: "10px" }}>
        <div style={{ borderBottom: "1px solid gold" }}>
          <div style={{ float: "left", width: "80px" }}>코드</div>
          <div style={{ float: "left", width: "150px" }}>주식명</div>
          <div>보유</div>
        </div>
        {filteredPosts.map((StockData: any) => (
          <div
            id={StockData.name}
            style={{ paddingBottom: "1px" }}
            onClick={(e: any) => {
              if (e.target.innerText.length > 0) onAdd(e.target.id.split("_")[0]);
            }}
          >
            <div id={`${StockData.name}_code`} style={{ float: "left", width: "80px", fontSize: "0.8rem", color: "gray", paddingTop: "15px" }}>
              {StockData.code}
            </div>
            <div id={`${StockData.name}_name`} style={{ float: "left", width: "150px", paddingTop: "12px" }}>
              {StockData.name}
            </div>
            <Checkbox
              id={StockData.name}
              checked={StockData.checked}
              color="primary"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.checked) {
                  onAdd(e.target.id);
                } else {
                  onDelete(e.target.id);
                }
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchBarBody;
