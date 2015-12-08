import {handleAction} from "../../helper/redux";

export default handleAction("language", (state, action) => (
  action.payload
), "en");
