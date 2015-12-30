import React from "react";
import {Router, Route} from "react-router";
import createHistory from "history/lib/createBrowserHistory";

import * as router from "../router";
import * as views from "./views";

const history = createHistory();

export default (
  <Router history={history}>
    <Route component={views.App}>
      <Route path={router.get("home")} component={views.Home} />
      <Route path={router.get("torrent")} component={views.Torrent} />
    </Route>
  </Router>
);
