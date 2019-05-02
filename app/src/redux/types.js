/**
 * @typedef GameState
 * @type {object}
 * @property {string} status the current status of the game
 * @property {Array<Array<number>>} boardPlayer the player's board
 * @property {Array<Array<number>>} boardCPU the CPU's board
 */

/**
 * @typedef ReduxState
 * @type {object}
 * @property {GameState} game
 */