import React, { useState } from "react";
import { Button, Card } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Plot from "react-plotly.js";
import RatioSlider from "./component/ModifyWeight";
import ConfirmDialog from "./component/ConfirmDialog";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { width: "800px", height: "500px" },
    card: {
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
      width: "100%",
      height: "500px",
      margin: "10px 100px 100px 100px",
      position: "relative",
      // display: "flex",
      // justifyContent: "center",
      // "& div": {
      //   display: "flex",
      //   justifyContent: "center",
      // },
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

  const handleClose = (value: string) => {
    setOpen(false);
  };

  return (
    <>
      <div className={classes.root}>
        <Card className={classes.card}>
          <h2>포트폴리오 최종 결정</h2>
          <div style={{ float: "left" }}>
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
          <div style={{ float: "left", paddingLeft: "20px" }}>
            {selectedPF.weights.items.map((item, index) => {
              return <RatioSlider name={item} value={selectedPF.weights.values[index]} key={item} onChange={onChange} />;
            })}
          </div>
          <Button
            variant="contained"
            color="primary"
            style={{ position: "absolute", width: "30px", height: "30px", bottom: "10px", right: "10px" }}
            onClick={handleClickOpen}
          >
            Select
          </Button>
          <ConfirmDialog selectedValue={"selectedValue"} open={open} onClose={handleClose} />
        </Card>
      </div>
    </>
  );
};

export default ConfirmPortfolio;
