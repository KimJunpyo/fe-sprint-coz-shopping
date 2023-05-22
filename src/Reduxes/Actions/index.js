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

export const notify = (message) => (dispatch) => {
    const key = Math.random();
    const delayTime = 5000;
    dispatch(addNotification(message, delayTime, key));
    setTimeout(() => {
        dispatch(deleteNotification());
    }, delayTime);
}

export const addNotification = (message, delayTime, key) => {
    return {
        type: "ADD_NOTIFY",
        payload: {
            message, delayTime, key
        }
    }
}

export const deleteNotification = () => {
    return {
        type: "DELETE_NOTIFY"
    }
}