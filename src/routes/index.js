import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "pages/Home";
import View from "pages/View";
import NotFoundPage from "components/NotFoundPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/view" component={View} exact />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
