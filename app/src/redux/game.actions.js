/**
 * Actions for the game reducer
 * @enum {string}
 */
const GameActionTypes = {
    "INIT": "INIT",
    "START": "START",
    "END": "END"
}

/**
 * Inits the game with a custom status
 */
function init() {
    return {
        type: GameActionTypes.INIT,
        args: null
    }
}

/**
 * Starts the game with a custom status
 */
function start() {
    return {
        type: GameActionTypes.START,
        args: null
    }
}

/**
 * Ends the game
 */
function end() {
    return {
        type: GameActionTypes.END,
        args: null
    }
}

const GameActions = {
    init,
    start,
    end
}

export default GameActionTypes;
export {
    GameActions
}