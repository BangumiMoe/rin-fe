import {combineReducers} from "redux";

import language from "./reducers/language";
import torrent from "./reducers/torrent";

export default combineReducers({
  language,
  torrent
});
