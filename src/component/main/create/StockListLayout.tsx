import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import AppleIcon from "@material-ui/icons/Apple";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Popover } from "@material-ui/core";

interface stockInfo {
  name: string;
  radio: number;
}

interface StockListLayoutProp {
  stockList: stockInfo[];
  onChange(name: string, value: number): void;
  onDelete(name: string): void;
  onAdd(name: string): void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      listStyle: "none",
      padding: theme.spacing(0.5),
      margin: 0,
    },
    chip: {
      margin: theme.spacing(0.5),
    },
  })
);

export default function StockListLayout(prop: StockListLayoutProp) {
  const classes = useStyles();

  const handleDelete = (name: string) => () => {
    prop.onDelete(name);
  };

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
    prop.onAdd("애플");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Paper
      component="ul"
      className={classes.root}
      style={{
        margin: "10px 10px 10px 10px",
      }}
    >
      {prop.stockList.map((item) => {
        return (
          <li key={item.name}>
            <Chip
              icon={<AppleIcon />}
              label={item.name}
              onDelete={handleDelete(item.name)}
              className={classes.chip}
            />
          </li>
        );
      })}
      <Chip
        icon={<AddCircleIcon />}
        label={"주식 추가"}
        onClick={handleClick}
        className={classes.chip}
      />
      <Popover
        id={"search"}
        open={open}
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
      >
        <div style={{ width: "300px", height: "500px" }}>
          ddddddddddddddddddddddddddddddddddd
        </div>
      </Popover>
    </Paper>
  );
}
