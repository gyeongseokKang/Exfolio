import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  stockName: {
    fontWeight: 500,
    fontFamily: "Noto Sans CJK KR",
    width: "100px",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
});

interface RatioSliderProp {
  name: string;
  value: number;
  onChange(name: string, value: number): void;
}

export default function WeightSlider(prop: RatioSliderProp) {
  const classes = useStyles();
  const [value, setValue] = React.useState<number | string | Array<number | string>>(prop.value);
  const handleSliderChange = (event: any, newValue: number | number[]) => {
    setValue(newValue);
    prop.onChange(prop.name, Number(value));
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2} alignItems="center">
        <Typography className={classes.stockName} id="input-slider" gutterBottom>
          {prop.name}
        </Typography>
        <Grid item xs>
          <Slider
            value={typeof value === "number" ? prop.value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            min={0}
            max={1}
            step={0.001}
          />
        </Grid>
      </Grid>
    </div>
  );
}
