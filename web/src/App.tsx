import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BasicLayout from "./layouts/BasicLayout";
import Pocket from "./pages/pocket";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <BasicLayout>
              <Pocket></Pocket>
            </BasicLayout>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
