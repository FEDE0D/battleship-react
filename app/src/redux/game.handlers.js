import "./types";

/**
 * Creates an empty board
 * - Note: cannot use ```Array(size).fill(Array(size).fill(0));``` as fill function duplicates references between rows
 * @param {number} size the size of the board
 */
function emptyBoard(size = 10) {
    var board = [];
    for (var x = 0; x < size; x++) {
        var row = [];
        for (var y = 0; y < size; y++) {
            row.push(0);
        }
        board.push(row);
    }
    return board;
}

/**
 * Creates random board for testing purposes
 * @param {number} size the size of the board
 */
function randomBoard(size = 10) {
    var board = emptyBoard(size);
    for (var x = 0; x < size; x++) {
        for (var y = 0; y < size; y++) {
            board[x][y] = Math.floor(Math.random() * 2);
        }
    }
    return board;
}

/**
 * @param {GameState} state 
 * @param {{ type: string, args: null }} action 
 */
function handleInit(state, action) {
    return {
        ...state,
        boardPlayer: emptyBoard()
    }
}

/**
 * Starts the game
 * @param {GameState} state 
 * @param {{type: string, args: null}} action the init status
 * @returns {GameState}
 */
function handleStart(state, action) {
    return {
        ...state,
        boardPlayer: randomBoard(),
        boardCPU: randomBoard(),
    }
}

/**
 * 
 * @param {GameState} state 
 * @param {{ type: string, args: null }} action 
 */
function handleEnd(state, action) {
    return {
        ...state
    }
}

export {
    emptyBoard,
    randomBoard,

    handleInit,
    handleStart,
    handleEnd
}