import { bookmarkList } from "./initialState";

export const bookmarkReducer = (state = bookmarkList, action) => {
    switch (action.type) {
      case "ADD_BOOKMARK":
        return [...state, action.payload];
      case "REMOVE_BOOKMARK":
        let test = state.filter(e => e !== action.payload);
        return test;
      default:
        return state;
    }
  }