import {isFSA, isError} from "flux-standard-action";

function identity(obj) {
  return obj;
}

export function createAction(type, payloadCreator = identity, metaCreator = null) {
  return function(...args) {
    const action = {
      type,
      payload: payloadCreator(...args)
    };
    if(action.payload instanceof Error) {
      action.error = true;
    }
    if(metaCreator) {
      action.meta = metaCreator(...args);
    }
    return action;
  };
}

export function createReducer(type, reducers, initialState) {
  if(typeof reducers == "function") {
    reducers = {
      complete: reducers,
      error: reducers
    };
  }
  return function(state, action) {
    if(typeof state == "undefined") {
      state = initialState;
    }
    if(!isFSA(action) || action.type !== type) {
      return state;
    }
    const reducer = isError(action) ? reducers.error : reducers.complete;
    return reducer ? reducer(state, action) : state;
  };
}
