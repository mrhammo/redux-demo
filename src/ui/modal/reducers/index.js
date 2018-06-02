import update from 'immutability-helper';

const initialState = {
    isVisible: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHOW_MODAL":
            return update(state, {
                isVisible: {
                    $set: true
                }
            });
        case "HIDE_MODAL":
            return update(state, {
                isVisible: {
                    $set: false
                }
            });
        default:
            return state;
    }
}

export default reducer;
