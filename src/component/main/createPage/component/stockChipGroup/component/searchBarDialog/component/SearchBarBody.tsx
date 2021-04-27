import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Checkbox } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "10px",
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
  onAdd(name: string, code: string): void;
  onDelete(name: string): void;
  filteredPosts: any;
}

const SearchBarBody = ({
  onAdd,
  onDelete,
  filteredPosts,
}: SearchBarBodyProp) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <div style={{ borderBottom: "1px solid gold" }}>
          <div style={{ float: "left", width: "80px" }}>코드</div>
          <div style={{ float: "left", width: "130px" }}>주식명</div>
          <div>보유</div>
        </div>
        {filteredPosts.map((StockData: any) => (
          <div
            id={StockData.name}
            style={{ paddingBottom: "1px" }}
            onClick={(e: any) => {
              if (e.target.innerText.length > 0) {
                let codeElement: HTMLElement | null = document.querySelector(
                  `#${e.target.id.split("_")[0]}_code`
                );
                let nameElement: HTMLElement | null = document.querySelector(
                  `#${e.target.id.split("_")[0]}_name`
                );
                if (codeElement && nameElement) {
                  onAdd(nameElement.innerText, codeElement.innerText);
                  console.log("클릭", nameElement.innerText);
                }
              }
            }}
          >
            <div
              id={`${StockData.name}_code`}
              style={{
                float: "left",
                width: "80px",
                fontSize: "0.8rem",
                color: "gray",
                paddingTop: "15px",
              }}
            >
              {StockData.code}
            </div>
            <div
              id={`${StockData.name}_name`}
              style={{ float: "left", width: "130px", paddingTop: "12px" }}
            >
              {StockData.name}
            </div>
            <Checkbox
              id={StockData.name}
              checked={StockData.checked}
              color="primary"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.checked) {
                  let codeElement: HTMLElement | null = document.querySelector(
                    `#${e.target.id.split("_")[0]}_code`
                  );
                  let nameElement: HTMLElement | null = document.querySelector(
                    `#${e.target.id.split("_")[0]}_name`
                  );
                  if (codeElement && nameElement)
                    onAdd(nameElement.innerText, codeElement.innerText);
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
