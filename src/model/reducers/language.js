import {createReducer} from "../../helper/redux";

export default createReducer("language", (state, action) => (
  action.payload
), "en");
