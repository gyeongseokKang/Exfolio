import React from "react";
import AddStockButton from "./AddStockButton";
import AddStockDialog from "./AddStockDialog";

interface stockInfo {
  name: string;
  code: string;
  weight: number;
}

interface AddStockProp {
  stockList: stockInfo[];
  onChange(name: string, value: number): void;
  onDelete(name: string): void;
  onAdd(name: string, code: string): void;
}

export default function AddStock({ stockList, onChange, onDelete, onAdd }: AddStockProp) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  return (
    <>
      <AddStockButton onClick={handleClick} />
      <AddStockDialog onOpen={open} anchorEl={anchorEl} setAnchorEl={setAnchorEl} onAdd={onAdd} onDelete={onDelete} checkedList={stockList} />
    </>
  );
}
