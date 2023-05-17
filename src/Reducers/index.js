import { bookmarkReducer } from "./bookmarkReducer";
import { productReducer } from "./productReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    bookmarkReducer,
    productReducer
  });
  