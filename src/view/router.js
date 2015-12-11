import React from "react";
import {Router, Route, IndexRoute} from "react-router";
import createHistory from "history/lib/createBrowserHistory";

import * as router from "../router";
import views from "./views";

const history = createHistory();

export default (
  <Router history={history}>
    <Route path={router.get("root")} component={views.App}>
      <IndexRoute component={views.Home} />
    </Route>
  </Router>
);
