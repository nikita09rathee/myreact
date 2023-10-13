import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk";

let root=combineReducers({reducer});

export const store=legacy_createStore(root,applyMiddleware(thunk));