import { LocalStorage } from "../../Utils/BrowserStorage";
import { bookmarkList } from "./initialState";

export const bookmarkReducer = (state = bookmarkList, action) => {
  
  const bookmarkState = LocalStorage.get("bookmarkList");
    switch (action.type) {
      case "ADD_BOOKMARK":
        const addedState = [...state, action.payload];
        LocalStorage.set("bookmarkList", JSON.stringify(addedState))
        return addedState;
      case "REMOVE_BOOKMARK":
        const removedState = state.filter(e => e !== action.payload);
        LocalStorage.set("bookmarkList", JSON.stringify(removedState));
        return removedState;
      default:
        return bookmarkState ? JSON.parse(bookmarkState) : state;
    }
  }