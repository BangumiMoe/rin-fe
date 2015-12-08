import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise";

import reducers from "./reducers";

export default applyMiddleware(thunk, promise)(createStore)(reducers);
