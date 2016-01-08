import React from "react";
import {render} from "react-dom";

import "./intl";

import Waves from "node-waves";
Waves.init();

import {Provider} from "react-redux";
import Intl from "./components/intl";
import router from "./router";

import store from "../model/store";

render((
  <Provider store={store}>
    <Intl>
      {router}
    </Intl>
  </Provider>
), document.querySelector("#app"));
