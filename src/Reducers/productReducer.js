import { productList } from "./initialState";

export const productReducer = (state = productList, action) => {
    switch (action.type) {
      case "SET_PRODUCT":
        if (action.payload === undefined) return [];
        return [...action.payload];
      default:
        return state;
    }
  }