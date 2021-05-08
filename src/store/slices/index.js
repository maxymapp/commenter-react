import { combineReducers } from "@reduxjs/toolkit";

import viewReducer from "store/slices/view";
import commentReducer from "store/slices/commentsSlice";

const rootReducer = combineReducers({
  view: viewReducer,
  comments: commentReducer,
});

export default rootReducer;
