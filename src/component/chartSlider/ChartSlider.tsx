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

  let width = 500;
  let height = 500;

  return (
    <>
      <div
        style={{
          width: "800px",
          height: "500px",
          borderColor: "black",
          borderWidth: "2px",
          borderStyle: "solid",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "500px",
            height: "350px",
            borderColor: "black",
            borderWidth: "2px",
            borderStyle: "solid",
          }}
        >
          <Plot
            data={[
              {
                labels: sharesHeldList.map((item) => item.name),
                values: sharesHeldList.map((item) => item.radio),
                type: "pie",
                hoverinfo: "label+percent",
                textinfo: "label+percent",
                sort: false,
              },
            ]}
            layout={{
              width: 500,
              height: 500,
              showlegend: false,
              title: "<추천 포트폴리오>",
            }}
            config={{ displayModeBar: false }}
          />
        </div>
        <div
          style={{
            padding: "0px 10px 0px 10px",
            borderColor: "black",
            borderWidth: "2px",
            borderStyle: "solid",
          }}
        >
          [ 종목구성 ]
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
      </div>
      <div
        style={{
          width: "800px",
          height: "150px",
          borderColor: "black",
          borderWidth: "2px",
          borderStyle: "solid",
        }}
      >
        이곳은 모델 설명 텍스트를 박는곳이곳은 모델 설명 텍스트를 박는곳이곳은
        모델 설명 텍스트를 박는곳이곳은 모델 설명 텍스트를 박는곳이곳은 모델
        설명 텍스트를 박는곳이곳은 모델 설명 텍스트를 박는곳이곳은 모델 설명
        텍스트를 박는곳이곳은 모델 설명 텍스트를 박는곳이곳은 모델 설명 텍스트를
        박는곳이곳은 모델 설명 텍스트를 박는곳이곳은 모델 설명 텍스트를
        박는곳이곳은 모델 설명 텍스트를 박는곳
      </div>
    </>
  );
}

export default ChartSlider;
