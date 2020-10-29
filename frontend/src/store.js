import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { createReport } from "./reducers/createReport";
import { composeWithDevTools } from "redux-devtools-extension";
const rootReducer = combineReducers({
  newReport: createReport,
});
const middlewares = [thunk];
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
