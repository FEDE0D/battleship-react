/**
 *  Helper function for avoiding switch() statements (commonly viewed
 * as a code smell) in reducers:
 */
export function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    };
}
