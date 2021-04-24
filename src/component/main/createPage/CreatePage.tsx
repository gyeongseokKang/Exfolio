import React from "react";
import EfficientFrontierChart from "./component/efficientFrontier/component/EfficientFrontierChart";
import EfficientFrontierDetail from "./component/efficientFrontier/component/EfficientFrontierDetail";
import StockChipGroup from "./component/stockChipGroup/StockChipGroup";
import { Paper } from "@material-ui/core";
import RecommendPortfolio from "./component/recommendPortfolio/RecommendPortfolio";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import EfficientFrontier from "./component/efficientFrontier/EfficientFrontier";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: "10%",
      paddingRight: "10%",
    },
  })
);

const CreatePage = () => {
  const classes = useStyles();
  let testList = [
    { name: "삼성", radio: 50 },
    { name: "현대", radio: 30 },
    { name: "엘지", radio: 20 },
  ];

  const [sharesHeldList, setSharesHeldList] = React.useState(testList);

  const onChange = (name: string, value: number) => {
    let updateList = [...sharesHeldList];
    updateList = updateList.map((item) => {
      return item.name !== name ? item : { name: item.name, radio: value };
    });
    setSharesHeldList(updateList);
  };

  const onAdd = (name: string) => {
    if (sharesHeldList.find((item) => item.name === name)) return;
    let updateList = [...sharesHeldList];
    updateList.push({ name: name, radio: 10 });
    setSharesHeldList(updateList);
  };

  const onDelete = (name: string) => {
    let updateList = [...sharesHeldList];
    updateList = updateList.filter((item) => {
      return item.name !== name;
    });
    setSharesHeldList(updateList);
  };

  return (
    <>
      <Paper elevation={0} className={classes.root}>
        <StockChipGroup stockList={sharesHeldList} onChange={onChange} onDelete={onDelete} onAdd={onAdd} />
        <Paper
          component="ul"
          style={{
            margin: "10px 10px 10px 10px",
          }}
        >
          <EfficientFrontier />
        </Paper>
        <RecommendPortfolio />
        {/* <ChartSlider
        stockList={sharesHeldList}
        onChange={onChange}
        onDelete={onDelete}
      />  */}
      </Paper>
    </>
  );
};

export default CreatePage;
