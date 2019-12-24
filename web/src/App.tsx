import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BasicLayout from "./layouts/BasicLayout";
import View from "./pages/View";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <BasicLayout>
              <View></View>
            </BasicLayout>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
