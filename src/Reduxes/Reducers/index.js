import { bookmarkReducer } from "./bookmarkReducer";
import { productReducer } from "./productReducer";
import { notificationReducer } from "./notififationReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    bookmarkReducer,
    productReducer,
    notificationReducer,
  });
  