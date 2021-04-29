import React, { useState } from "react";
import { Button, Card } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Plot from "react-plotly.js";
import WeightSlider from "./component/WeightSlider";
import ConfirmDialog from "./component/ConfirmDialog";
import RefreshIcon from "@material-ui/icons/Refresh";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { width: "800px", height: "500px" },
    card: {
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
      width: "800px",
      height: "500px",
      margin: "10px 100px 100px 100px",
      position: "relative",
    },
    button: {
      "& .MuiSvgIcon-root": {
        transition: "all 0.3s ease",
      },
      "&:hover": {
        background: "#B6EBFF",
        boxShadow: "0 16px 24px 0 rgba(172, 34, 34, 0.2)",
        cursor: "pointer",
        "& .MuiSvgIcon-root": {
          transform: "rotate(180deg)",
        },
      },
    },
  })
);

interface ConfirmPortfolioProp {
  selectedPF: RRSW;
}

interface RRSW {
  returns: number;
  risk: number;
  sharpe: number;
  weights: {
    items: string[];
    values: number[];
  };
}

const ConfirmPortfolio = ({ selectedPF }: ConfirmPortfolioProp) => {
  const classes = useStyles();
  const originalWeight: number[] = [...selectedPF.weights.values];
  const [weightList, setWeightList] = useState({ items: [...selectedPF.weights.items], values: [...selectedPF.weights.values] });
  const onChange = (name: string, value: number) => {
    let changed = { items: [...weightList.items], values: [...weightList.values] };
    changed.values[changed.items.indexOf(name)] = value;
    setWeightList(changed);
  };

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const resetWeight = () => {
    setWeightList({ items: [...weightList.items], values: [...originalWeight] });
  };
  console.log(weightList);

  return (
    <>
      <div className={classes.root}>
        <Card className={classes.card}>
          <h2 style={{ paddingLeft: "280px" }}>포트폴리오 최종 결정</h2>
          <div style={{ float: "left", width: "50%" }}>
            <div style={{ paddingLeft: "60px", paddingTop: "20px" }}>
              <Plot
                data={[
                  {
                    labels: weightList.items,
                    values: weightList.values,
                    type: "pie",
                    hoverinfo: "label+percent",
                    textinfo: "label+percent",
                    sort: false,
                    textposition: "inside",
                    insidetextorientation: "horizontal",
                  },
                ]}
                layout={{
                  width: 300,
                  height: 300,
                  margin: { t: 30, b: 20, r: 0, l: 0 },
                  showlegend: false,
                }}
                config={{ displayModeBar: false }}
              />
            </div>
          </div>
          <div style={{ float: "left", width: "50%" }}>
            <Button className={classes.button} style={{ float: "right", marginRight: "60px" }} onClick={resetWeight}>
              <RefreshIcon /> 되돌리기
            </Button>
            <div style={{ float: "left", paddingLeft: "80px" }}>
              {weightList.values.map((value, index) => {
                return <WeightSlider name={weightList.items[index]} value={value} key={weightList.items[index]} onChange={onChange} />;
              })}
            </div>
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{ position: "absolute", bottom: "10px", right: "10px" }}
              onClick={handleClickOpen}
            >
              confirm
            </Button>
            <ConfirmDialog finalWeightList={weightList} open={open} onClose={handleClose} />
          </div>
        </Card>
      </div>
    </>
  );
};

export default ConfirmPortfolio;
