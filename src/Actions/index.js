export const addBookmark = (id) => {
    return {
      type: "ADD_BOOKMARK",
      payload: id,
    }
}
  
export const removeBookMark = (id) => {
    return {
        type: "REMOVE_BOOKMARK",
        payload: id,
    }
}

export const setProduct = (productList) => {
    return {
        type: "SET_PRODUCT",
        payload: productList,
    }
}