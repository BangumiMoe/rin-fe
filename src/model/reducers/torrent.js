import Immutable from "immutable";
import {combineReducers} from "redux";
import {createReducer} from "../../helper/redux";

const item = createReducer("torrent-item", (state, action) => (
  state
), Immutable.Map());

const list = createReducer("torrent-list", (state, action) => (
  state
), Immutable.List());

export default combineReducers({
  item,
  list
});
