/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Plot from "react-plotly.js";
import RatioSlider from "./ratioSlider";

function ChartSlider() {
  let inputList = [
    { name: "삼성", radio: 50 },
    { name: "현대", radio: 30 },
    { name: "엘지", radio: 20 },
  ];

  const [sharesHeldList, setSharesHeldList] = React.useState(inputList);

  const onChange = (name: string, value: number) => {
    let updateList = [...sharesHeldList];
    updateList = updateList.map((item) => {
      console.log(item);
      return item.name !== name ? item : { name: item.name, radio: value };
    });
    console.log(updateList);
    setSharesHeldList(updateList);
  };

  return (
    <>
      <Plot
        data={[
          {
            labels: sharesHeldList.map((item) => item.name),
            values: sharesHeldList.map((item) => item.radio),
            type: "pie",
            hoverinfo: "label+percent",
            textinfo: "label+percent",
          },
        ]}
        layout={{ width: 500, height: 500 }}
        config={{ displayModeBar: false }}
      />
      <div style={{ paddingLeft: "10px", width: 490 }}>
        {sharesHeldList.map((item) => {
          return (
            <RatioSlider
              name={item.name}
              value={item.radio}
              key={item.name}
              onChange={onChange}
            />
          );
        })}
      </div>
    </>
  );
}

export default ChartSlider;
