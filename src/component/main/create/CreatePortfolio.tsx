import React from "react";
import ChartSlider from "./chartSlider/ChartSlider";
import EfficientFrontierChart from "./efficientFrontier/EfficientFrontierChart";
import EfficientFrontierDetail from "./efficientFrontier/EfficientFrontierDetail";
import StockListLayout from "./StockListLayout";
import "./CreatePortfolio.css";
import { Paper } from "@material-ui/core";
import RecommendPortfolio from "./recommendPortfolio/RecommendPortfolio";

const CreatePortfolio = () => {
  let testList = [
    { name: "삼성", radio: 50 },
    { name: "현대", radio: 30 },
    { name: "엘지", radio: 20 },
  ];

  const [sharesHeldList, setSharesHeldList] = React.useState(testList);

  const onChange = (name: string, value: number) => {
    let updateList = [...sharesHeldList];
    updateList = updateList.map((item) => {
      console.log(item);
      return item.name !== name ? item : { name: item.name, radio: value };
    });
    setSharesHeldList(updateList);
  };

  const onAdd = (name: string) => {
    let updateList = [...sharesHeldList];
    updateList.push({ name: name, radio: 10 });
    setSharesHeldList(updateList);
  };

  const onDelete = (name: string) => {
    let updateList = [...sharesHeldList];
    updateList = updateList.filter((item) => {
      return item.name !== name;
    });

    console.log(updateList);
    setSharesHeldList(updateList);
  };

  return (
    <>
      <StockListLayout
        stockList={sharesHeldList}
        onChange={onChange}
        onDelete={onDelete}
        onAdd={onAdd}
      />
      <Paper
        component="ul"
        style={{
          margin: "10px 10px 10px 10px",
        }}
      >
        <div className="EfficientFrontier">
          <EfficientFrontierChart />
          <EfficientFrontierDetail />
        </div>
      </Paper>
      <RecommendPortfolio />
      {/* <ChartSlider
        stockList={sharesHeldList}
        onChange={onChange}
        onDelete={onDelete}
      />  */}
    </>
  );
};

export default CreatePortfolio;
