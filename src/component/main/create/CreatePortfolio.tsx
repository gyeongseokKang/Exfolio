import React from "react";
import ChartSlider from "./chartSlider/ChartSlider";
import StockListLayout from "./StockListLayout";

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
      <ChartSlider
        stockList={sharesHeldList}
        onChange={onChange}
        onDelete={onDelete}
      />
    </>
  );
};

export default CreatePortfolio;
