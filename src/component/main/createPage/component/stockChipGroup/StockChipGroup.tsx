import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import axios from "axios";
import SearchBarDialog from "./component/searchBarDialog/SearchBarDialog";
import { Avatar } from "@material-ui/core";

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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "left",
      flexWrap: "wrap",
      listStyle: "none",
      width: "100%",
      padding: theme.spacing(0.5),
      margin: 0,
    },
    chip: {
      margin: theme.spacing(0.5),
      "& .MuiChip-deleteIcon": {
        visibility: "hidden",
      },
      "&:hover": {
        "& .MuiChip-deleteIcon": {
          visibility: "visible",
        },
      },
    },
    button: {
      width: "15%",
      margin: "10px 10px 10px 10px",
      fontSize: "2rem",
      fontWeight: "bold",
      "&:hover": {
        background: "#f00",
        boxShadow: "0 16px 24px 0 rgba(172, 34, 34, 0.2)",
        cursor: "pointer",
      },
    },
  })
);

export default function StockChipGroup(prop: StockListLayoutProp) {
  const classes = useStyles();

  const handleDelete = (name: string) => () => {
    prop.onDelete(name);
  };

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const onApplyClick = () => {
    axios
      .post("http://192.168.175.140:5000/frontier", {
        codes: ["005380", "005930", "017670"],
      })
      .then((Response) => {
        console.log(Response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };
  const open = Boolean(anchorEl);

  return (
    <>
      <div style={{ display: "flex" }}>
        <Paper
          component="ul"
          className={classes.root}
          style={{
            margin: "10px 10px 10px 10px",
          }}
        >
          {prop.stockList.map((item) => (
            <li key={item.name}>
              <Chip
                avatar={<Avatar>주</Avatar>}
                label={item.name}
                onDelete={handleDelete(item.name)}
                className={classes.chip}
              />
            </li>
          ))}
          <Chip
            icon={<AddCircleIcon />}
            label={"주식 추가"}
            onClick={handleClick}
            className={classes.chip}
          />
          <SearchBarDialog
            onOpen={open}
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            onAdd={prop.onAdd}
            onDelete={prop.onDelete}
            checkedList={prop.stockList}
          />
        </Paper>
        {/* <Paper component="ul" className={classes.button}>
          <div onClick={onApplyClick}>Apply</div>
        </Paper> */}
      </div>
    </>
  );
}
