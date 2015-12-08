import React from "react";
import {Router, Route, IndexRoute} from "react-router";
import createHistory from "history/lib/createBrowserHistory";

import routes from "../constants/routes";
import views from "./views";

const history = createHistory();

export default (
  <Router history={history}>
    <Route path={routes.root} component={views.App}></Route>
  </Router>
);
