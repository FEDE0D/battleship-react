import "./types";

/**
 * Starts the game
 * @param {GameState} state 
 * @param {{type: string, args: string}} action the init status
 * @returns {GameState}
 */
function handleStart(state, action) {
    const status = action.args;
    return {
        ...state,
        status
    }
}

export {
    handleStart
}