import { combineReducers } from "@reduxjs/toolkit";

import viewReducer, { name as viewName } from "store/slices/view";

const rootReducer = combineReducers({
  [viewName]: viewReducer,
});

export default rootReducer;
