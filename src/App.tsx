import React from "react";

import "./App.css";
import Header from "./component/header/Header";
import ChartSlider from "./component/chartSlider/ChartSlider";
import Main from "./component/main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <ChartSlider />
      <Main />
    </div>
  );
}

export default App;