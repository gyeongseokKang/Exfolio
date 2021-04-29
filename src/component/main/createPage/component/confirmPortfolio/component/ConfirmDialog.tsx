import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Dialog } from "@material-ui/core";
import IndexGaugeCharts from "src/component/main/common/wiget/chart/IndexGaugeCharts";
import Plot from "react-plotly.js";

const useStyles = makeStyles({
  root: {
    width: "500px",
    height: "500px",
    backgroundColor: "white",
    textAlignLast: "center",
  },
  descrition: {
    marginLeft: "50px",
    textAlignLast: "left",
  },
  gaugeChart: {
    marginTop: "50px",
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
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <div className={classes.root}>
        <h2>최종 투자 정보</h2>
        <div className={classes.descrition}>
          <div> 총 투자 금액 : 1100, 남은 금액 :100</div>
          <div> 총 투자 금액 : 1100, 남은 금액 :1dddddd00</div>
          <div> 총 투자 금액 : 1100, 남은 금액 :100</div>
        </div>
        <div className={classes.gaugeChart}>
          <IndexGaugeCharts sharpe={0.02} returns={0.5} volatility={0.5}></IndexGaugeCharts>
        </div>
        <div>
          <Plot
            data={[
              {
                x: [1, 2, 3, 4, 5],
                y: [2, 5, 7, 9, 13],
                mode: "lines",
                line: { shape: "spline" },
                name: "Lines",
              },
              {
                x: [3],
                y: [7],
                mode: "markers",
                name: "Scatter",
                marker: { size: 12, symbol: "star" },
              },
            ]}
            layout={{
              margin: { t: 0, b: 0, r: 0, l: 0 },
              width: 300,
              height: 200,
              showlegend: false,
            }}
            config={{ displayModeBar: false }}
          />
        </div>
      </div>
    </Dialog>
  );
}
