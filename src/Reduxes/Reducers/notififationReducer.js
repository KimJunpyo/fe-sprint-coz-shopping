export const notificationReducer = (state = { notification: [] }, action) => {
    console.log(action.type);
    switch (action.type) {
        case "ADD_NOTIFY":
            return Object.assign({}, state, { notification: [...state.notification, action.payload] });
        case "DELETE_NOTIFY":
            return Object.assign({}, state, { notification: state.notification.slice(1) });
        default:
            return state;
    }
}