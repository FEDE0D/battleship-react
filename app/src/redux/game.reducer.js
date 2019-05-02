import { createReducer } from "./helpers";
import GameActionTypes from "./game.actions";
import { handleStart, handleEnd, emptyBoard, randomBoard, handleInit } from "./game.handlers";

const game = createReducer({
    boardPlayer: emptyBoard(10),
    boardCPU: emptyBoard(10),
}, {
    [GameActionTypes.INIT]: handleInit,
    [GameActionTypes.START]: handleStart,
    [GameActionTypes.END]: handleEnd
});

export default game;