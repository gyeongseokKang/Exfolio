import React from "react";
import analysisPF from "./analysisPF.jpg";
import createPF from "./createPF.png";
import "./Main.css";

function Main({ history }: any) {
  return (
    <>
      <div className="mainlayout">
        <div
          className="card"
          onClick={() => {
            history.push("/create");
          }}
        >
          <img
            src={createPF}
            alt="Avatar"
            style={{ width: "100%", height: "400px" }}
          />
          <div className="container">
            <h2>Create PortFolio</h2>
            <p>유저가 원하는 비중의 포트폴리오를 생성</p>
          </div>
        </div>

        <div
          className="card"
          style={{ float: "right" }}
          onClick={() => {
            history.push("/analysis");
          }}
        >
          <img
            src={analysisPF}
            alt="Avatar"
            style={{ width: "100%", height: "400px" }}
          />
          <div className="container">
            <h2>Analysis PortFolio</h2>
            <p>다양한 모델을 통해 유저의 포트폴리오를 분석 및 평가</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
