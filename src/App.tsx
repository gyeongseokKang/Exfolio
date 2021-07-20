import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./component/main/Main";
import LNB from "./component/lnb/LNB";
import CreatePage from "./component/main/createPage/CreatePage";
import AnalysisPage from "./component/main/analysisPage/AnalysisPage";
import PropensityPage from "./component/main/propensity/PropensityPage";
import PerformancePage from "./component/main/performancePage/PerformancePage";
import { LoginProvider } from "./contexts/LoginContext";

function App() {
  return (
    <>
      <LoginProvider>
        <LNB />
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route path="/create" component={CreatePage}></Route>
          <Route path="/analysis" component={AnalysisPage}></Route>
          <Route path="/propensity" component={PropensityPage}></Route>
          <Route path="/performance" component={PerformancePage}></Route>
        </Switch>
      </LoginProvider>
    </>
  );
}

export default App;
