import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./component/header/Header";
import CreatePage from "./component/main/createPage/CreatePage";
import Main from "./component/main/Main";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route path="/create" component={CreatePage}></Route>
        <Route path="/analysis" component={Main}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
