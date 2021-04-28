import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  input: {
    width: 42,
  },
});

interface ConfirmDialogProp {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

export default function ConfirmDialog({ open, selectedValue, onClose }: ConfirmDialogProp) {
  const classes = useStyles();

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <div className={classes.root}>
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">최종 투자 정보</DialogTitle>
        <DialogContent>
          <div> 총 투자 금액 : 1100, 남은 금액 :100</div>
          <div> 총 투자 금액 : 1100, 남은 금액 :100</div>
          <div> 총 투자 금액 : 1100, 남은 금액 :100</div>
          <div> 총 투자 금액 : 1100, 남은 금액 :100</div>
          <div> 총 투자 금액 : 1100, 남은 금액 :100</div>
          <div> 총 투자 금액 : 1100, 남은 금액 :100</div>
          <div> 총 투자 금액 : 1100, 남은 금액 :100</div>
          <div> 총 투자 금액 : 1100, 남은 금액 :100</div>
          <div> 총 투자 금액 : 1100, 남은 금액 :100</div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
