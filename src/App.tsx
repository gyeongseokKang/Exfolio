import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Header from "./component/header/Header";
import CreatePortfolio from "./component/main/create/CreatePortfolio";
import Main from "./component/main/Main";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Link to="/">홈</Link>
      <Link to="/create">생성</Link>
      <Link to="/analysis">분석</Link>
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route path="/create" component={CreatePortfolio}></Route>
        <Route path="/analysis" component={Main}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
