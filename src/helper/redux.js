import {isFSA, isError} from "flux-standard-action";
import reduceReducers from "reduce-reducers";

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

export function handleAction(type, reducers, initialState) {
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

export function handleActions(map, initialState) {
  const reducers = Object.keys(map).map(type => (
    handleAction(type, map[type], undefined)
  ));
  const reducer = reduceReducers(...reducers);
  return function(state, action) {
    if(typeof state == "undefined") {
      state = initialState;
    }
    return reducer(state, action);
  };
}
