/**
 * Actions for the game reducer
 * @enum {string}
 */
const GameActionTypes = {
    "START": "START",
    "END": "END"
}

/**
 * Starts the game with a custom status
 * @param {string} status 
 */
function start(status) {
    return {
        type: GameActionTypes.START,
        args: status
    }
}

const GameActions = {
    start
}

export default GameActionTypes;
export {
    GameActions
}