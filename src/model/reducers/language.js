import {handleActions} from "../../helper/redux";

export default handleActions({
  "language-set": (state, action) => (
    action.payload
  )
}, "en");
