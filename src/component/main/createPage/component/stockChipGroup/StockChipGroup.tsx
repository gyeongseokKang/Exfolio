import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import SearchBarDialog from "./component/searchBarDialog/SearchBarDialog";
import { Avatar, Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "left",
      flexWrap: "wrap",
      listStyle: "none",
      width: "100%",
      padding: theme.spacing(0.5),
      margin: "10px 10px 10px 10px",
      maxWidth: "800px",
    },
    chip: {
      margin: theme.spacing(0.5),
      fontWeight: 500,
      fontFamily: "Noto Sans CJK KR",
      "& .MuiChip-deleteIcon": {
        visibility: "hidden",
      },
      "&:hover": {
        "& .MuiChip-deleteIcon": {
          visibility: "visible",
        },
      },
    },
    placeHolderText: {
      fontWeight: 500,
      fontFamily: "Noto Sans CJK KR",
      fontSize: "0.8rem",
      color: "gray",
      marginTop: "4px",
      marginLeft: "10px",
    },
    button: {
      margin: "10px 10px 10px 10px",
      padding: "0px 20px 0px 10px",
      height: "2rem",
      borderRadius: "10px",
      fontSize: "1rem",
      fontWeight: 500,
      fontFamily: "Noto Sans CJK KR",
      "& .MuiSvgIcon-root": {
        transition: "all 0.3s ease",
        marginRight: "10px",
      },
      "&:hover": {
        color: "white",
        fontWeight: "normal",
        background: "#303F9F",
        boxShadow: "0 8px 16px 0 rgba(172, 34, 34, 0.2)",
        cursor: "pointer",
        "& .MuiSvgIcon-root": {
          transform: "rotate(90deg)",
        },
      },
    },
  })
);

interface stockInfo {
  name: string;
  code: string;
  weight: number;
}

interface StockListLayoutProp {
  stockList: stockInfo[];
  onChange(name: string, value: number): void;
  onDelete(name: string): void;
  onAdd(name: string, code: string): void;
}

export default function StockChipGroup(prop: StockListLayoutProp) {
  const classes = useStyles();

  const handleDelete = (name: string) => () => {
    prop.onDelete(name);
  };

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <div>
        <Paper elevation={0} style={{ display: "flex" }}>
          <Paper component="ul" className={classes.root}>
            {prop.stockList.length === 0 ? <div className={classes.placeHolderText}>주식 추가 버튼을 클릭하여 주식을 추가하세요</div> : undefined}
            {prop.stockList.map((item) => (
              <li key={item.name}>
                <Chip avatar={<Avatar>S</Avatar>} label={item.name} onDelete={handleDelete(item.name)} className={classes.chip} />
              </li>
            ))}
          </Paper>
          <Button className={classes.button} variant="contained" size="small" onClick={handleClick}>
            <AddCircleIcon />
            주식 추가
          </Button>
          <SearchBarDialog
            onOpen={open}
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            onAdd={prop.onAdd}
            onDelete={prop.onDelete}
            checkedList={prop.stockList}
          />
        </Paper>
      </div>
    </>
  );
}
