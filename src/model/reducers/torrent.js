import Immutable from "immutable";
import {combineReducers} from "redux";
import {handleActions} from "../../helper/redux";

const item = handleActions({
  "torrent-item": (state, action) => (
    state.set(action.meta.id, {
      data: action.payload,
      error: action.error
    })
  )
}, Immutable.Map());

const list = handleActions({
  "torrent-list": (state, action) => ({
    data: action.payload.torrents,
    error: action.error
  })
}, {
  data: null,
  error: false
});

export default combineReducers({
  item,
  list
});
