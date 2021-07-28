import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./component/main/Main";
import LNB from "./component/lnb/LNB";
import { LoginProvider } from "./contexts/LoginContext";

function App() {
  const CreatePage = React.lazy(() => import("./component/main/createPage/CreatePage"));
  const AnalysisPage = React.lazy(() => import("./component/main/analysisPage/AnalysisPage"));
  const PropensityPage = React.lazy(() => import("./component/main/propensity/PropensityPage"));
  const PerformancePage = React.lazy(() => import("./component/main/performancePage/PerformancePage"));
  return (
    <>
      <LoginProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <LNB />
          <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route path="/create" component={CreatePage}></Route>
            <Route path="/analysis" component={AnalysisPage}></Route>
            <Route path="/propensity" component={PropensityPage}></Route>
            <Route path="/performance" component={PerformancePage}></Route>
          </Switch>
        </Suspense>
      </LoginProvider>
    </>
  );
}

export default App;
