import { createReducer } from "./helpers";
import GameActionTypes from "./game.actions";
import { handleStart } from "./game.handlers";

const game = createReducer({
    status: "INIT",
    boardPlayer: [
        [0, 0, 0],
        [1, 0, 0],
        [1, 0, 0]
    ],
    boardCPU: [
        [0, 0, 0],
        [0, 1, 1],
        [0, 0, 0]
    ],
}, {
    [GameActionTypes.START]: handleStart
});

export default game;